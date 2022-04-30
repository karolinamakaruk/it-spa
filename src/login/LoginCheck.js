import { Home } from "../views/Home";

export async function loginCheck() {
  event.preventDefault();

  const matchCredentials = (array, email, password) => {
    const match = array.find((el) => {
      return el.email === email && el.pass === password;
    });
    return match;
  };

  const email = document.getElementById("se").value;
  const password = document.getElementById("sp").value;

  const response = await fetch("http://localhost:3000/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((check) => {
      const match = matchCredentials(check, email, password);

      if (!match) {
        window.alert("wrong email or password!");
      } else {
        const matchName = match.name;

        document.querySelector(".btn.log").textContent = `Logout: ${matchName}`;
        const customEvent = new CustomEvent("navigate", {
          detail: Home,
        });
        window.alert(`Welcome: ${matchName} `);
        document.body.dispatchEvent(customEvent);
        return matchName;
      }
    });
  return response;
}
