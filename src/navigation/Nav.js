import { Home } from "../views/Home";
import { RoomsList } from "../views/RoomsList";
import { Button } from "../common/Button";
import { TreatmentsList } from "../views/TreatmentsList";
import { Cart } from "../views/Cart";
import { LoginButton } from "../login/LoginButton";

const navItems = [
  { name: "Home", component: Home },
  { name: "Rooms", component: RoomsList },
  { name: "Treatments", component: TreatmentsList },
  { name: "Basket", component: Cart },
];

export function Nav() {
  const nav = document.createElement("nav");
  nav.classList.add("nav");

  const navButtons = navItems.map((item) => {
    return Button({
      text: item.name,
      classes: "btn",
      onClick: (event) => {
        const siblings = event.target.parentElement.children;
        Array.from(siblings).forEach((element) => {
          element.classList.remove("btn-active");
        });
        event.target.classList.add("btn-active");

        const customEvent = new CustomEvent("navigate", {
          detail: item.component,
        });

        document.body.dispatchEvent(customEvent);
      },
    });
  });

  const logButton = LoginButton("btn log");

  navButtons[0].classList.add("btn-active");

  nav.append(...navButtons, logButton);

  return nav;
}
