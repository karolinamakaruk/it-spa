import { Button } from "../common/Button";
import { RoomsList } from "./RoomsList";

const backButton = Button({
  text: "Back",
  classes: "btn btn-secondary",
  onClick: () => {
    const customEvent = new CustomEvent("navigate", {
      detail: RoomsList,
    });

    document.body.dispatchEvent(customEvent);
  },
});

export function RoomDetails(id) {
  const section = document.createElement("section");
  section.classList.add("roomDetails");

  section.innerHTML = `
            <h2>Room Details</h2>
            <header>Loading...</header>
        `;

  fetch(`http://localhost:3000/rooms/${id}`)
    .then((response) => response.json())
    .then((room) => {
      section.querySelector("header").remove();

      const article = document.createElement("article");
      article.innerHTML = `
                <h3>${room.name}</h3>
                <hr>
                <p>${room.description}</p>
                <hr>
                <p>${room.beds} x beds</p>
                <p>${room.guests} x guests</p>
                <p>
                    <strong>${room.price.toFixed(2)} PLN</strong>
                </p>
            `;

      section.append(article, backButton);
    });

  return section;
}
