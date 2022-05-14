export function formCheck(section) {
  section.addEventListener("keyup", function () {
    const btnSignUp = document.querySelector(`[id^="btnSign"]`);

    if (document.getElementById("tabs").checkValidity()) {
      btnSignUp.disabled = false;
    } else {
      btnSignUp.disabled = true;
    }
  });
}
