import "bootstrap";

////////////////nav會員顯示//////////////////

function setupMemberUI() {
  const MemberName = localStorage.getItem("memberName");
  const showMemberName = document.querySelector(".showMemberName");
  const signOut = document.querySelector(".signOut");
  const lisignOut = document.querySelector(".lisignOut");

  if (MemberName) {
    showMemberName.innerHTML = `<a href="./member.html" class="showMemberName">您好，${MemberName}`;
    signOut.innerHTML = "登出";
    lisignOut.style.display = "flex";
    signOut.addEventListener("click", (e) => {
      e.preventDefault();
      location.href = "./index.html";
      localStorage.clear();
    });
  }
}
export { setupMemberUI };
