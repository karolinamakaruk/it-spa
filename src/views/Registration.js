
import { SignupButton } from "../login/SubmitButtons";
import { LoginButton } from "../login/LoginButton";
import { RegisterButton } from "../login/RegisterButton";

export function Registration() {
  const logButtons = document.createElement("logButtons");

  logButtons.append(
    LoginButton("btn btn-light btn-outline-secondary")
  );

  logButtons.append(
    RegisterButton()
  );

  const logInput = document.createElement("logInput");
  logInput.innerHTML = `
  <form id="tabs">
    <input id="se" type="text" placeholder="Name" required/>
    <input id="se" type="email" placeholder="Email Address" required/>
    <input id="sp" type="password" placeholder="Password" required/>
    <input id="sp" type="password" placeholder="Confirm Password" required/>
    </form>
    `;

  const submit = document.createElement("submit");
  submit.append(SignupButton());

  const section = document.createElement("section");
  section.append(logButtons, logInput, submit);
  section.style.marginTop = "1rem";
  section.style.padding = "3rem";

  return section;
}
