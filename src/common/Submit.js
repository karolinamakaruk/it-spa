import { Button } from "./Button";
import { login, loginCheck} from '../login/LoginCheck';

export function SubmitButton(item) {
  return Button({
    text: "Submit",
    classes: "btn btn-outline-secondary",
    onClick: () => {
          loginCheck.login();
    },
  });
}
