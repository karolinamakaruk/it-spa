import { Button } from "../common/Button";
import { SubmitButton } from "../common/Submit";

export function Login() {
  const logButtons = document.createElement("logButtons");


  logButtons.append(
    Button({
      text: "Login",
      classes: "btn btn-light btn-outline-secondary col-1",
    })
  );

  logButtons.append(
    Button({
      text: "Register",
      classes: "btn btn-light btn-outline-secondary col-1",
    })
  );

  const logInput = document.createElement("logInput");
  logInput.innerHTML = `
  <div id="tabs">
    <input id="se" type="email" placeholder="Email address" required/>
    <input id="sp" type="password" placeholder="Password" required/>
    </div>
    `;

  const submit = document.createElement("submit");
  submit.append(SubmitButton());

  const section = document.createElement("section");
  section.append(logButtons, logInput, submit);
  section.style.marginTop = "1rem";
  section.style.padding = "3rem";

  return section;
}
