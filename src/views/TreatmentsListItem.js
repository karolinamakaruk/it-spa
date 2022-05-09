import { AddToCartButton } from '../common/AddToCartButton';

export function TreatmentsListItem(treatment) {
    const article = document.createElement('article');
    article.style.margin = '2em 1em';
    article.style.backgroundColor = 'white';
    article.style.opacity = '80%';
    article.style.padding = '2em 1em';

    article.innerHTML = `
        <h4>${treatment.name}</h4>
        <div> ${treatment.time} minutes</div>
        <div>
            <strong>€ ${treatment.price.toFixed(2)}</strong>
        </div>
    `;

    article.append(AddToCartButton(treatment));

    return article;
}
