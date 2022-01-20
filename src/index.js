import { Empty } from "./components/Empty.js";
import { Post } from "./components/Post.js";
import { createPost, fetchPosts } from "./logic/post.js";
import { auth } from "./lib/firebase.js";
import {
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js";
import { CreatePost } from "./components/CreatePost.js";

// instanstiate the modal library
MicroModal.init();

// use relative time
dayjs.extend(window.dayjs_plugin_relativeTime);

// get all the elements
const createPostContainer = document.querySelector("#create-post-div");
const postsContainer = document.querySelector("#posts-div");
const newPostTextarea = document.querySelector("#new-post-textarea");
const newPostButton = document.querySelector("#new-post-button");
const signOutButton = document.querySelector("#sign-out-button");

// authentication routing logic
onAuthStateChanged(auth, async (user) => {
  // if logged in, run the main function
  if (user) await main(user);
  // else redirect to login
  else window.location.href = "login.html";
});

// the entry point
function main(user) {
  const { photoURL, uid, displayName, email } = user;
  // render create post bar
  renderCreatePost(photoURL, displayName, email);

  // fetch and render posts
  renderPosts();

  // add logic to the sign out button
  signOutButton.addEventListener("click", () =>
    signOut(auth).then(() => (window.location.href = "login.html"))
  );

  // add logic to the new post button
  newPostButton.addEventListener("click", () => {
    if (newPostTextarea.value.trim().length === 0) {
      Toastify({
        text: "post content cannot be empty",
        gravity: "bottom",
        style: { background: "#be123c" },
      }).showToast();
      return;
    }

    try {
      // creates a new post
      createPost(
        { avatarUrl: photoURL, uid, name: displayName, email },
        newPostTextarea.value
      );
      // notify post creation is successful
      Toastify({
        text: "post is successfully created",
        gravity: "bottom",
        style: { background: "#22c55e" },
      }).showToast();
      // close the modal
      MicroModal.close("modal-1");

      // re-render posts
      renderPosts();
    } catch (err) {
      Toastify({
        text: "an error occured while creating post",
        gravity: "bottom",
        style: { background: "#be123c" },
      }).showToast();
    }
  });
}

// render the CreatePost bar
function renderCreatePost(avatarUrl, name, email) {
  // clear the div
  createPostContainer.innerHTML = "";

  // add the CreatePost component
  createPostContainer.appendChild(CreatePost({ avatarUrl, name, email }));
}

// fetch posts and render them
async function renderPosts() {
  // fetch posts
  const posts = await fetchPosts();

  // clear the posts div
  postsContainer.innerHTML = "";

  // render the posts
  if (posts.length === 0) {
    postsContainer.appendChild(Empty("si-glyph:mail-empty", "no posts found"));
  } else {
    posts
      .sort((a, b) => b.createdAt.toDate() - a.createdAt.toDate())
      .forEach((post, i) =>
        postsContainer.appendChild(
          Post({ post, renderPosts }, i !== 0 ? "mt-4" : "")
        )
      );
  }
}
