import React from "react";
import bgVideo from "../../../assets/video/bg.mp4";
import NavBar from "../NavBar/NavBar";
import "./Sections/HomePage.css";
export default function HomePage() {
  return (
    <div>
      <NavBar fontColor="white" positionStyle="fixed" />
      <div class="content">
        <h2>Sculpture Display</h2>
        {/* <p>Get up close and personal with the sculpture Enjoy the cultural</p>
        <p>history behind the sculpture, Highlighting the themes of cultural</p>
        <p>communication and heritage preservation.</p> */}

        <a href="/landing" class="link">
          EXPLORE NOW!
        </a>
      </div>
      <video
        loop
        autoPlay
        style={{
          objectFit: "cover",
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      >
        <source src={bgVideo} type="video/mp4" />
        <source src={bgVideo} type="video/opgg" />
      </video>
    </div>
  );
}
