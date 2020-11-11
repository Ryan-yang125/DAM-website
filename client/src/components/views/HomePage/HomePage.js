import React from "react";
import bgVideo from "../../../assets/video/bg3.mp4";
export default function HomePage() {
  return (
    <div>
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
