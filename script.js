const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const submitBtn = document.querySelector("#submit-btn");
const padicon = document.querySelector(".uil-padlock");
const shieldicon = document.querySelector(".uil-shield-check");

let passEnter = document.querySelector("#password");
let passConfirm = document.querySelector("#confirm_password");
let email = document.querySelector("#email");

function checkEmail() {
  email.style.border =
    reg.test(email.value) || email.value.length == 0 ? "" : "red solid 1px";
}

function visibility(pass) {
  const type = pass.getAttribute("type") === "password" ? "text" : "password";
  pass.setAttribute("type", type);
}

function validate() {
  submitBtn.disabled =
    passEnter.value != passConfirm.value ||
    passEnter.value.length <= 0 ||
    passConfirm.value.lenghth <= 0 ||
    reg.test(email.value) == false ||
    email.value.length <= 0
      ? true
      : false;

  passConfirm.style.border =
    passEnter.value != passConfirm.value ? "red solid 1px" : "";
}
validate();

padicon.onclick = () => visibility(passEnter);
shieldicon.onclick = () => visibility(passConfirm);
passEnter.addEventListener("keyup", validate);
passConfirm.addEventListener("keyup", validate);
email.addEventListener("keyup", () => {
  checkEmail();
  validate();
});
