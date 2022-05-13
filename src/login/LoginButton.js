import { Login } from "../views/Login";
import { Button } from "../common/Button";

global.user = undefined;
let customEvent = "";

export function LoginButton(btnClass) {
  const logButton = Button({
    text: "Login",
    classes: btnClass,
    onClick: () => {
      if (!!user) {
        const confirm = window.confirm("Are you sure you want to logout?");
        console.log(confirm);
        if (confirm) {
          customEvent = new CustomEvent("navigate", {
            detail: Login,
          });
          document.querySelector(".btn.log").textContent = "Login";
          user = undefined;
        } else {
          return;
        }
      } else {
        customEvent = new CustomEvent("navigate", {
          detail: Login,
        });
      }
      document.body.dispatchEvent(customEvent);
    },
  });
  return logButton;
}
