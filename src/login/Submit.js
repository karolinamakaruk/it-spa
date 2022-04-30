import { Button } from "../common/Button";
import { login, loginCheck } from "./LoginCheck";


export function SubmitButton(item) {
  return Button({
    text: "Sign in",
    classes: "btn btn-secondary",
    onClick: async () => {
      user = await loginCheck();
    },
  });
}
