export function formCheck(section) {
  section.addEventListener("keyup", function () {
    const btnSignUp = document.querySelector(`[id^="btnSign"]`);

    if (document.getElementById("tabs").checkValidity()) {
      console.log(document.getElementById("tabs"));
      btnSignUp.disabled = false;
    } else {
      btnSignUp.disabled = true;
      console.log(document.getElementById("tabs"));
    }
  });
}
