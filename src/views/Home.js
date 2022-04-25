export function Home() {
  const section = document.createElement("section");
  // const img = document.createElement("img");
  // img.src = require("../assets/support.png");
  // img.style.width = "50vw";

  section.innerHTML = `
        <h3>WELCOME TO THE IT SPA</h3>
        <p class = "welcome">It is our mission to provide an exceptional experience that invites relaxation, rejuvenation and
        overall well-being. All spa guests receive complimentary access to our amenities to help bring
        balance to the body, mind and soul.
        <br>
        The spa treatment areas are places of peace and tranquility. To maintain a pleasant environment,
        we kindly ask you refrain from using any electronic devices during your visit and to keep
        conversations to a whisper.</p>
    `;

  // section.append(img);
  section.style.backgroundColor = 'white';
  section.style.marginTop='40rem';
  section.style.width= '100vw';
  section.style.opacity= '85%';
  section.style.position= 'relative';
  section.style.left= '50%';
  section.style.right= '50%';
  section.style.marginLeft= '-50vw';
  section.style.marginRight= '-50vw';
  
  return section;
}

