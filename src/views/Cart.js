import { cartManager } from "../cart/CartManager";
import { RemoveFromCartButton } from "../common/RemoveFromCartButton";

export function Cart() {
  const section = document.createElement("section");
  section.classList.add("cart");

  section.innerHTML = `
        <h2>Cart</h2>
        <p>Here are the items of your cart</p>
    `;

  const table = document.createElement("table");
  table.classList.add("table");

  const tableHead = document.createElement("tr");
  tableHead.innerHTML = `
        <th>Name</th>
        <th>Dates</th>
        <th>Total Price</th>
        <th></th>
    `;

  const tableRows = cartManager.getAllItems().map((item) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
            <td>${item.name}</td>
            <td>${item.dates}</td>
            <td>€ ${item.totalPrice.toFixed(2)}</td>
            <td></td>
        `;

    tr.lastElementChild.append(RemoveFromCartButton(item));

    return tr;
  });

  const tableFooter = document.createElement("tr");
  tableFooter.innerHTML = `
        <td></td>
        <td></td>
        <td>
            <strong>€ ${cartManager.getTotal().toFixed(2)}</strong>
        </td>
        <td></td>
    `;

  table.append(tableHead, ...tableRows, tableFooter);
  section.append(table);

  return section;
}
