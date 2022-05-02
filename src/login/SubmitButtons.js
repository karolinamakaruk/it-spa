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
  return Button({
    btnId: "btnSignUp",
    text: "Sign up",
    classes: "btn btn-secondary",
    //btnType: "submit",
    btnForm: "tabs",
    onClick: () => {
      console.log("tito");
    },
    // async () => {
    //       user = await loginCheck();
    // }
  });
}
