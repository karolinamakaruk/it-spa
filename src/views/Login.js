import { SigninButton } from "../login/SubmitButtons";
import { LoginButton } from "../login/LoginButton";
import { RegisterButton } from "../login/RegisterButton";

export function Login() {
  const logButtons = document.createElement("logButtons");

  logButtons.append(
    LoginButton("btn btn-light btn-outline-secondary btn-active")
  );

  logButtons.append(RegisterButton());

  const logInput = document.createElement("logInput");
  logInput.innerHTML = `
  <form id="tabs">
    <input id="se" type="email" autocomplete="username" placeholder="Email address" required/>
    <input id="sp" type="password" autocomplete="current-password" placeholder="Password" required/>
    </form>
    `;

  const submit = document.createElement("submit");
  submit.append(SigninButton());

  const section = document.createElement("section");
  section.append(logButtons, logInput, submit);
  section.style.marginTop = "1rem";
  section.style.padding = "3rem";

  return section;
}
