import { auth } from "../lib/firebase.js";
import { likePost, unlikePost } from "../logic/post.js";

/**
 * Creates a post component.
 * @author Marcus Lee Kai Yang
 *
 * @param {{ post: {
 *   id: string;
 *   content: string;
 *   user: { avatarUrl: string; name: string; uid: string; email: string; };
 *   likes: string[];
 *    { nanoseconds: number; seconds: number; toDate: () => Date; };
 * }, renderPosts: () => Promise<void> }} prop - Properties that the component uses
 * @param {String} className - Extra CSS classes for the component
 *
 * @returns {HTMLDivElement} a div containing the Post component
 */
export function Post(prop, className) {
  const { post, renderPosts } = prop;
  const { id, user, content, createdAt, likes } = post;

  const liked = likes.includes(auth.currentUser.uid);

  const topSeparatorElem = document.createElement("div");
  topSeparatorElem.classList = "bg-neutral-600 w-full h-[1px] mt-4";

  const bottomSeparatorElem = document.createElement("div");
  bottomSeparatorElem.classList = "bg-neutral-600 w-full h-[1px] mb-4";

  const likeButtonElem = document.createElement("button");
  likeButtonElem.classList =
    "flex justify-center items-center text-neutral-400 font-medium w-full hover:bg-neutral-700 py-2 rounded-lg";
  likeButtonElem.innerHTML = `
    <span class="iconify mr-1 w-5 h-5" data-icon="${
      liked ? "ant-design:like-filled" : "ant-design:like-outlined"
    }" data-inline="false"></span>
    Like
  `;
  likeButtonElem.onclick = () => {
    if (!liked) likePost(id, auth.currentUser.uid);
    else unlikePost(id, auth.currentUser.uid);
    renderPosts();
  };

  const commentButtonElem = document.createElement("button");
  commentButtonElem.classList =
    "flex justify-center items-center text-neutral-400 font-medium w-full hover:bg-neutral-700 py-2 rounded-lg";
  commentButtonElem.onclick = () =>
    Toastify({
      text: "not implemented",
      gravity: "bottom",
      style: { background: "#be123c" },
    }).showToast();
  commentButtonElem.innerHTML = `
    <span class="iconify mr-1 w-5 h-5" data-icon="ant-design:message-outlined" data-inline="false"></span>
    Comment
  `;

  const buttonDivElem = document.createElement("div");
  buttonDivElem.classList = "flex justify-around w-full my-1";
  buttonDivElem.appendChild(likeButtonElem);
  buttonDivElem.appendChild(commentButtonElem);

  const postElem = document.createElement("div");
  postElem.classList = `w-full bg-neutral-800 rounded-lg p-4 ${className}`;
  postElem.innerHTML = `
    <div class="flex">
        <img class="w-10 h-10 rounded-full mr-4" src="${
          user.avatarUrl ||
          `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}`
        }" />
        <div class="flex flex-col">
            <p class="font-medium">${user.name || user.email}</p>
            <p class="text-neutral-400 text-xs">${dayjs(
              createdAt.toDate()
            ).fromNow()}</p>
        </div>
    </div>

    <p class="mt-4 whitespace-pre-wrap">${content}</p>

    <p class="flex items-center text-xs text-neutral-400 mt-2">${
      likes.length > 0
        ? `<span class="iconify mr-1" data-icon="bx:bxs-like" data-inline="false"></span> ${likes.length} `
        : '<span class="iconify mr-1" data-icon="bx:bxs-like" data-inline="false"></span> 0'
    }</p>
  `;
  postElem.appendChild(topSeparatorElem);
  postElem.appendChild(buttonDivElem);
  postElem.appendChild(bottomSeparatorElem);

  return postElem;
}
