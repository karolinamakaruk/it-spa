import { Button } from "../common/Button";
import { loginCheck } from "./LoginCheck";

export function SigninButton() {
  return Button({
    text: "Sign in",
    classes: "btn btn-secondary",
    onClick: async () => {
      user = await loginCheck();
      console.log("test2");
    },
  });
}

export function SignupButton() {
  const btnDisabled = Button({
    btnId: "btnSignUp",
    text: "Sign up",
    classes: "btn btn-secondary",
    onClick: () => {
      console.log("tito");
    },
    // async () => {
    //       user = await loginCheck();
    // }
  });
  
  btnDisabled.disabled = true;
  return btnDisabled;
}
