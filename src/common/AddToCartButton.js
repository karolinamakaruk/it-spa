import { Button } from "./Button";
import { cartManager } from "../cart/cart-manager";

export function AddToCartButton(item) {
  return Button({
    text: "Add To Cart",
    classes: "btn btn-light btn-outline-secondary fw-bold",
    onClick: () => {
      cartManager.addItem(item);
    },
  });
}
