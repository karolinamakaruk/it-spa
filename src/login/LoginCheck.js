import { Home } from "../views/Home";

export const loginCheck = {
  login() {
    event.preventDefault();

    console.log(global.loginState); //

    const matchCredentials = (array, email, password) => {
      const match = array.find((el) => {
        return el.email === email && el.pass === password;
      });
      return match;
    };

    const email = document.getElementById("se").value;
    console.log(email);
    const password = document.getElementById("sp").value;
    console.log(password);

    const usersObject = fetch("http://localhost:3000/users")
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
          const matchName = (global.matchName = match.name);
          document.querySelector(
            ".btn.log"
          ).textContent = `Logout: ${matchName}`;
          const customEvent = new CustomEvent("navigate", {
            detail: Home,
          });
          window.alert(`Welcome ${matchName} `);
          document.body.dispatchEvent(customEvent);
        }
      });

    //var i = emailArray.indexOf(email);

    // if (emailArray.indexOf(email) == -1) {
    //   if (email == "") {
    //     alert("Email required.");
    //     return;
    //   }
    //   alert("Email does not exist.");
    //   return;
    // } else if (passwordArray[i] != password) {
    //   if (password == "") {
    //     alert("Password required.");
    //     return;
    //   }
    //   alert("Password does not match.");
    //   return;
    // } else {
    //   alert(email + " yor are login Now \n welcome to our website.");

    //   document.getElementById("se").value = "";
    //   document.getElementById("sp").value = "";
    //   return;
    //}
  },
};
