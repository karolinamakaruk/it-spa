import { Registration } from "../views/Registration";
import { Button } from "../common/Button";

export function RegisterButton() {
  const regButton = Button({
    text: "Register",
    classes: "btn btn-light btn-outline-secondary btn-active",
    onClick: () => {
      const customEvent = new CustomEvent("navigate", {
        detail: Registration,
      });
      document.body.dispatchEvent(customEvent);
    },
  });
  return regButton;
}
