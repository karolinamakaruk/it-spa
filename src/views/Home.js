export function Home() {
  const section = document.createElement("section");
  section.classList.add("home");

  const firstImg = document.createElement("firstImg");
  firstImg.src = require("../assets/spa_img1.jpg");

  const secondImg = document.createElement("secondImg");
  secondImg.src = require("../assets/spa_img2.jpg");

  section.innerHTML = `
  <div class='background'>
        <h3>WELCOME TO THE IT SPA</h3>
        <div class="welcome">
        <p>It is our mission to provide an exceptional experience that invites relaxation, rejuvenation and
        overall well-being. All spa guests receive complimentary access to our amenities to help bring
        balance to the body, mind and soul. </p>
        <p>The spa treatment areas are places of peace and tranquility. To maintain a pleasant environment,
        we kindly ask you refrain from using any electronic devices during your visit and to keep
        conversations to a whisper. </p>
        <p>We invite you to immerse yourself in our mindfully created spa amenities that have been based on mother nature's key elements - Air, Water, Fire, Light and Earth. This includes our Elements lounge, private change areas with plush robes and towels, calming treatment rooms, Infrared Saunas, a Hydrotherapy Spa, a Salt Meditation room, LED Lounge and Altitude Lounge where guests are free to express themselves. We believe in forming an authentic connection with our community and we are dedicated to guiding you to a greater state of balance and wellbeing. </p>
        </div>
        <section class="photos">
          <img src = ${firstImg.src}"/>
          <img src = ${secondImg.src}"/>
        </section>
  </div>
    `;

  return section;
}
