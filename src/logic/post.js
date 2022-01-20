import { firestore } from "../lib/firebase.js";
import {
  addDoc,
  updateDoc,
  getDocs,
  arrayUnion,
  arrayRemove,
  doc,
  query,
  collection,
  Timestamp,
} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js";

// define the 'posts' firestore collection
const posts = collection(firestore, "posts");

/**
 * Creates a post.
 * @author Marcus Lee Kai Yang
 *
 * @param {{ avatarUrl: string; name: string; uid: string; email: string; }} user - User information of the post creator
 * @param {String} content - Text content of the post
 */
export async function createPost(user, content) {
  // TODO: Implement adding a post to Firestore
}

/**
 * Fetch all posts.
 * @author Marcus Lee Kai Yang
 *
 * @returns {Array<{
 *   id: string;
 *   content: string;
 *   user: { avatarUrl: string; name: string; uid: string; email: string; };
 *   likes: string[];
 *   createdAt: { nanoseconds: number; seconds: number; toDate: () => Date; };
 * }>} List of queried posts.
 */
export async function fetchPosts() {
  // TODO: Implement fetching posts from Firestore
}

/**
 * Like a post.
 * @author Marcus Lee Kai Yang
 *
 * @param {String} id - ID of the Post to be liked
 * @param {String} uid - ID of the User liking the Post
 */
export async function likePost(id, uid) {
  // TODO: Implementing updating post by adding like
}

/**
 * Unlike a post.
 * @author Marcus Lee Kai Yang
 *
 * @param {String} id - ID of the Post to be liked
 * @param {String} uid - ID of the User liking the Post
 */
export async function unlikePost(id, uid) {
  // TODO: Implement updating post by removing like
}
