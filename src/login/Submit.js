import { Button } from "../common/Button";
import { login, loginCheck} from './LoginCheck';

export function SubmitButton(item) {
  return Button({
    text: "Sign in",
    classes: "btn btn-secondary col-2",
    onClick: () => {
          loginCheck.login();
    },
  });
}
