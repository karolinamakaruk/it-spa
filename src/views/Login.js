import { Button } from "../common/Button";
import { SubmitButton } from "../common/Submit";

// export function Login() {
//     const section = document.createElement('section');

//     section.innerHTML = `
//     <div id="tabs">
//         <p id="lt" class="tabs">Log in</p>
//         <p id="rt" class="tabs">Register</p>
//     </div>

//     `
//     return section
// }

export function Login() {
  const logButtons = document.createElement("logButtons");

  logButtons.append(
    Button({
      text: "Login",
      classes: "btn btn-outline-secondary",
    })
  );

  logButtons.append(
    Button({
      text: "Register",
      classes: "btn btn-outline-secondary",
    })
  );

  const logInput = document.createElement("logInput");
  logInput.innerHTML = `
  <div id="tabs">
    <input id="se" type="email" placeholder="Email" required/>
    <input id="sp" type="password" placeholder="Password" required/>
    </div>
    `;

const submit = document.createElement("submit");
submit.append(
    SubmitButton()
)

  const section = document.createElement("section");
  section.append(logButtons, logInput, submit);
  section.style.marginTop = "4rem";

  return section;
}
