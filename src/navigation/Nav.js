import { Home } from '../views/Home';
import { RoomsList } from '../views/RoomsList';
import { Button } from '../common/Button';
import { TreatmentsList } from '../views/TreatmentsList';
import { Cart } from '../views/Cart';
import { Login } from '../views/Login'

const navItems = [
    { name: 'Home', component: Home },
    { name: 'Rooms', component: RoomsList },
    { name: 'Treatments', component: TreatmentsList },
    { name: 'Basket', component: Cart },
    { name: 'Login', component: Login }
];

export function Nav() {
    const nav = document.createElement('nav');

    nav.style.backgroundColor = 'white';
    nav.style.opacity= '80%';
    nav.style.padding = '1rem 2rem';
    // nav.style.width = '100%';
    // nav.style.marginLeft = '-2em';
    // full width for navigation czym jest vw!!!
    nav.style.width= '100vw';
    nav.style.position= 'fixed';
    nav.style.left= '50%';
    nav.style.right= '50%';
    nav.style.marginLeft= '-50vw';
    nav.style.marginRight= '-50vw';
    

    const navButtons = navItems.map(item => {
        return Button({
            text: item.name,
            classes: 'btn',
            onClick: event => {
                const siblings = event.target.parentElement.children;
                Array.from(siblings).forEach(element => {
                    element.classList.remove('btn-active');
                });
                event.target.classList.add('btn-active');

                const customEvent = new CustomEvent('navigate', {
                    detail: item.component
                });
        
                document.body.dispatchEvent(customEvent);
            }
        });
    });

    // aktywujemy pierwszy guzik w menu -- Home
    navButtons[0].classList.add('btn-active');

    nav.append(...navButtons);

    return nav;
}
