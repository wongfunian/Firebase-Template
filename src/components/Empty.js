/**
 * Creates an empty component.
 * @author Marcus Lee Kai Yang
 *
 * @param {String} icon - Iconify key for a particular icon
 * @param {String} description - Text under the icon
 *
 * @returns {HTMLDivElement} a div containing the Empty component
 */
export function Empty(icon, description) {
  if (typeof icon !== "string" || typeof description !== "string") {
    throw new Error("`icon` and `description` must be of type string");
  }

  const iconElem = document.createElement("span");
  iconElem.classList = "iconify w-10 h-10";
  iconElem.setAttribute("data-icon", icon);
  iconElem.setAttribute("data-inline", "false");

  const descriptionElem = document.createElement("p");
  descriptionElem.classList = "mt-1";
  descriptionElem.innerText = description;

  const empty = document.createElement("div");
  empty.classList =
    "flex flex-col justify-center items-center text-neutral-400 mt-2";
  empty.appendChild(iconElem);
  empty.appendChild(descriptionElem);

  return empty;
}
