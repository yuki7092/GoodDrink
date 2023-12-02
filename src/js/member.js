import "../assets/sass/member.scss";
import { setupMemberUI } from "./memberName.js";

document.addEventListener("DOMContentLoaded", () => {
  setupMemberUI();
});

const showName = localStorage.getItem("memberName");
const showEmail = localStorage.getItem("memberEmail");

const userName = document.querySelectorAll(".userName");
const userEmail = document.querySelector(".userEmail");

if (showName) {
  console.log(showName);

  userEmail.innerText = showEmail;

  userName.forEach((data) => {
    data.innerText = showName;
  });
}
