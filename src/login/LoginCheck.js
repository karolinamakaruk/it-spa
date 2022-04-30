export const loginCheck = {
  login() {
    event.preventDefault();

    const matchCredentials = (array, email, password) => {
      const match = array.find((el) => {
        return el.email === email && el.pass === password;
      });
      return !!match;
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
        if (!matchCredentials(check, email, password)) {
          window.alert("wrong email or password!");
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