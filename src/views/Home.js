export function Home() {
  const section = document.createElement("section");
  section.classList.add("home");

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

  return section;
}
