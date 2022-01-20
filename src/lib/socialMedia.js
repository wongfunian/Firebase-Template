/**
 * @author Wong Fu Nian
 */

const expandButton = document.querySelector(".button");
const facebookIcon = document.querySelector(".facebook");
const instagramIcon = document.querySelector(".instagram");
const linkedinIcon = document.querySelector(".linkedin");
const discordIcon = document.querySelector(".discord");
const websiteIcon = document.querySelector(".website");

expandButton.addEventListener("click", function () {
  if (facebookIcon.classList.contains("facebook-show")) {
    expandButton.classList.remove("expand");
    expandButton.classList.add("shrink");
    facebookIcon.classList.remove("facebook-show");
    facebookIcon.classList.add("facebook-hide");
    instagramIcon.classList.remove("instagram-show");
    instagramIcon.classList.add("instagram-hide");
    linkedinIcon.classList.remove("linkedin-show");
    linkedinIcon.classList.add("linkedin-hide");
    discordIcon.classList.remove("discord-show");
    discordIcon.classList.add("discord-hide");
    websiteIcon.classList.remove("website-show");
    websiteIcon.classList.add("website-hide");
  } else {
    expandButton.classList.add("expand");
    expandButton.classList.remove("shrink");
    facebookIcon.classList.add("facebook-show");
    facebookIcon.classList.remove("facebook-hide");
    instagramIcon.classList.add("instagram-show");
    instagramIcon.classList.remove("instagram-hide");
    linkedinIcon.classList.add("linkedin-show");
    linkedinIcon.classList.remove("linkedin-hide");
    discordIcon.classList.add("discord-show");
    discordIcon.classList.remove("discord-hide");
    websiteIcon.classList.add("website-show");
    websiteIcon.classList.remove("website-hide");
  }
});
