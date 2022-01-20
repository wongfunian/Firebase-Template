/**
 * Create an CreatePost bar.
 * @author Marcus Lee Kai Yang
 *
 * @param {{ avatarUrl: string; name: string; }} prop - Properties that the component uses
 * @param {String} className - Extra CSS classes for the component
 *
 * @returns {HTMLDivElement} a div containing the CreatePost component
 */
export function CreatePost(prop, className) {
  const { avatarUrl, name, email } = prop;

  const createPostElem = document.createElement("div");
  createPostElem.classList = `bg-neutral-800 rounded-lg w-full p-4 ${className}`;
  createPostElem.innerHTML = `
    <div class="flex">
      <img class="w-10 h-10 rounded-full mr-4"
        src="${
          avatarUrl ||
          `https://ui-avatars.com/api/?name=${encodeURIComponent(
            email.split("@")[0]
          )}`
        }" />
      <input class="bg-neutral-600 w-full px-4 rounded-full focus:outline-none" type="text"
        placeholder="What's on your mind, ${
          name || email
        }?" onclick="MicroModal.show('modal-1')" />
    </div>
  `;

  return createPostElem;
}
