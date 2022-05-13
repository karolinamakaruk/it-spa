import { RoomsListItem } from "./RoomsListItem";
import { datapicker } from "../common/select_date";

export function RoomsList() {
  const section = document.createElement("section");

  const header = document.createElement("header");
  header.innerHTML = `
        <h2>Rooms List</h2>
        <h4>Loading...</h4>
        <h4>Select dates</h4>
    `;
  const list = document.createElement("list");
  fetch("http://localhost:3000/rooms")
    .then((response) => response.json())
    .then((rooms) => {
      const ul = document.createElement("ul");
      const lis = rooms.map((room) => RoomsListItem(room));

      ul.append(...lis);
      header.querySelector("h4").remove();
      list.append(ul);
    });
  const dp = datapicker();
  header.append(dp);
  section.append(header, list);

  return section;
}
