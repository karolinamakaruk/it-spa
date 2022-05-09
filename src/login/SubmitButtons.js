import { Button } from "../common/Button";
import { loginCheck } from "./LoginCheck";
import { registrationAppend } from "./RegistrationAppend";

export function SigninButton() {
  return Button({
    btnId: "btnSignIn",
    text: "Sign in",
    classes: "btn btn-secondary",
    onClick: async () => {
      user = await loginCheck();
    },
  });
}

export function SignupButton() {
  const btnDisabled = Button({
    btnId: "btnSignUp",
    text: "Sign up",
    classes: "btn btn-secondary",
    onClick: () => {
      registrationAppend();
    },
    // async () => {
    //       user = await loginCheck();
    // }
  });
  
  btnDisabled.disabled = true;
  return btnDisabled;
}
