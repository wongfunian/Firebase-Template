/**
 * Creates an icon component
 * @author Marcus Lee Kai Yang
 *
 * @param {{ iconify: string }} prop - Properties that the component uses
 * @param {String} className - Extra CSS classes for the component
 *
 * @returns {HTMLSpanElement} a span containing the Icon component
 */
export function Icon(prop, className) {
  const iconElem = document.createElement("span");
  iconElem.classList = `iconify ${className}`;
  iconElem.setAttribute("data-icon", prop.iconify);
  iconElem.setAttribute("data-inline", "false");
  return iconElem;
}
