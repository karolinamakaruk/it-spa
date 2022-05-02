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
    text: "Sign up",
    classes: "btn btn-secondary",
    btnType: "submit",
    btnForm: "tabs",
    onClick: () => {
      console.log("sign up");
    },
    // async () => {
    //       user = await loginCheck();
    // }
  });
}
