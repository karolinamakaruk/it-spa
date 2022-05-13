import { Button } from '../common/Button';
import { RoomDetails } from './RoomDetails';
import { AddToCartButton } from '../common/AddToCartButton';

export function RoomsListItem(room) {
    const li = document.createElement('li');

    li.innerHTML = `
            <h4>${room.name}</h4>
            <div>
                <strong> Price: € ${room.price.toFixed(2)} per night</strong>
            </div>
        `;

    li.append(
        Button({
            text: 'Read More',
            classes: 'btn btn-outline-secondary btn-light fw-bold me-2',
            onClick: () => {
                const customEvent = new CustomEvent('navigate', {
                    detail: () => RoomDetails(room.id)
                });
                
                document.body.dispatchEvent(customEvent);
            }
        })
    );

    li.append(AddToCartButton(room));

    return li;
}
