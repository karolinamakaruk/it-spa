import { Home } from "../views/Home";

export function welcomeUser(name) {
  document.querySelector(".btn.log").textContent = `Logout: ${name}`;
  const customEvent = new CustomEvent("navigate", {
    detail: Home,
  });
  swal({
    icon: "success",
    text: `Welcome: ${name} `,
  });
  document.body.dispatchEvent(customEvent);
}
