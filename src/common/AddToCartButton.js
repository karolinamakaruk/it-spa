import { Button } from "./Button";
import { cartManager } from "../cart/cart-manager";

export function AddToCartButton(item) {
  return Button({
    text: "Add To Cart",
    classes: "btn btn-light btn-outline-secondary fw-bold",
    onClick: () => {
      if (item.beds) {
        item["totalPrice"] = numberDays * item["price"];
        item["dates"] = `${startDay} - ${endDay}`;
      } else {
        item["totalPrice"] = item["price"];
        item["dates"] = "walk-in";
      }

      cartManager.addItem(item);
    },
  });
}
