const apiURL = "https://todoo.5xcamp.us";

const userAccount = document.querySelector("#userAccount");
const userPwd = document.querySelector("#userPwd");
const logIn = document.querySelector(".logIn");

const name = document.querySelector("#name");
const account = document.querySelector("#account");
const pwd = document.querySelector("#pwd");
const pwdConfirm = document.querySelector("#pwdConfirm");
const signUp = document.querySelector(".signUp");
const signUpForm = document.querySelector("#signUpForm");

let memberName;

///////////////////////////////

const showName = localStorage.getItem("memberName");
if (showName) {
  location.href = "./member.html";
}

///////////////////////////////////

logIn.addEventListener("click", (e) => {
  e.preventDefault();
  callLogIn(userAccount.value.trim(), userPwd.value.trim());
});

function callLogIn(userAccount, userPwd) {
  if (userAccount.trim() == "" || userPwd.trim() == "") {
    alert("帳號或密碼不得為空!");
    return;
  } else {
    axios
      .post(`${apiURL}/users/sign_in`, {
        user: {
          email: userAccount,
          password: userPwd,
        },
      })
      .then((res) => {
        alert(`${res.data.nickname}，歡迎回來`);
        console.log(res);
        console.log(res.data);
        localStorage.setItem("memberName", res.data.nickname);
        localStorage.setItem("memberEmail", res.data.email);
        memberName = localStorage.getItem("memberName");
        location.href = "./index.html";
      })
      .catch((err) => {
        alert("帳號或密碼錯誤!");
      });
  }
}

signUp.addEventListener("click", (e) => {
  const modalSignUpForm = document.getElementById("modalSignUpForm");
  if (!modalSignUpForm.reportValidity()) {
    // 驗證不通過的處理
    return;
  } else {
    e.preventDefault();
    callSignUp(name.value, account.value, pwd.value, pwdConfirm.value);
  }
});

function callSignUp(name, account, pwd, pwdConfirm) {
  if (pwd != pwdConfirm) {
    alert("密碼不相符!");
    return;
  } else {
    axios
      .post(`${apiURL}/users`, {
        user: {
          email: account,
          nickname: name,
          password: pwd,
        },
      })
      .then((res) => {
        alert("註冊成功!");

        document.querySelector(".btn-close").click();
      })
      .catch((err) => alert("該信箱已註冊"));
  }
}
