export function formCheck() {
  window.addEventListener("keyup", function () {
    const btnSignUp = document.getElementById("btnSignUp");

    if (document.getElementById("tabs").checkValidity()) {
      btnSignUp.disabled = false;
    } else {
      btnSignUp.disabled = true;
    }
  });
}

// export function passCheck() {
//   const sp = document.getElementById("sp").value;
//   console.log(sp);
//   const spc = document.getElementById("spc").value;
//   console.log(spc);
//   console.log(sp === spc);
//   if (sp !== spc) {
//     window.alert("passwords are not same");
//   } else {
//     console.log("jesteś w złym miejscu");
//   }
// }
