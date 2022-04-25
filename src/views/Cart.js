import { cartManager } from '../cart/cart-manager';
import { RemoveFromCartButton } from '../common/RemoveFromCartButton';

export function Cart() {
    const section = document.createElement('section');
    
    section.innerHTML = `
        <h2>Cart</h2>
        <p>Oto zawartość Twojego koszyka.</p>
    `;

    const table = document.createElement('table');
    table.classList.add('table');

    const tableHead = document.createElement('tr');
    tableHead.innerHTML = `
        <th>Name</th>
        <th>Price</th>
        <th></th>
    `;

    const tableRows = cartManager.getAllItems().map(item => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price.toFixed(2)} PLN</td>
            <td></td>
        `;

        tr.lastElementChild.append(RemoveFromCartButton(item));

        return tr;
    });

    const tableFooter = document.createElement('tr');
    tableFooter.innerHTML = `
        <td></td>
        <td>
            <strong>${cartManager.getTotal().toFixed(2)} PLN</strong>
        </td>
        <td></td>
    `;

    table.append(tableHead, ...tableRows, tableFooter);
    section.append(table);

    section.style.backgroundColor = 'white';
    section.style.opacity= '85%';
    section.style.padding ='1rem';
    // section.style.paddingRight ='1%';
    // section.style.paddingBottom ='1%';
    section.style.marginTop = '5rem';


    return section;
}
