import { welcomeUser } from "../common/WelcomeUser";

export function registrationAppend() {
  //   variables created from the form data located in the Registration.js
  const fName = document.getElementById("sn").value;
  const fEmail = document.getElementById("se").value;
  const fPassword = document.getElementById("sp").value;
  const fPasswordConfirm = document.getElementById("spc").value;
  const userData = { name: fName, email: fEmail, pass: fPassword };

  function postUser() {
    fetch("http://localhost:3000/users", {
      method: "POST", //sending data to the server
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData), //converts a JavaScript objectto a JSON string
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        response.json();
      })
      .then((data) => {
        console.log("Success", userData);
      });
  }

  if (fPassword === fPasswordConfirm) {
    fetch(`http://localhost:3000/users?email=${fEmail}&_limit=1`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((machedUsers) => {
        if (machedUsers.length === 0) {
          postUser();
          welcomeUser(fName);
          
        } else {
          swal({
            icon: "warning",
            text: "This email address is already being used",
          });
        }
      });
  } else {
    swal({
      icon: "warning",
      text: "Passwords are not the same!",
    });
  }
}
