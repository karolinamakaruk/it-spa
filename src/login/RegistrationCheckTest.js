export function test2() {
  window.addEventListener("keyup", function () {
    let button = document.getElementById("btnSignUp");

    button.disabled = true;
    if (!document.getElementById("tabs").checkValidity()) {
      button.disabled = true; //button remains disabled
    } else {
      button.disabled = false; //button is enabled
    }
  });
}
