import React from "react";
import "../Styles/Animationcard.scss"; // Ensure the correct path to the SCSS file

import game from "../assets/game.png";
import crypto from "../assets/crypto.png";

function Animationsection() {
  return (
    <div className="main-box-animation">
      <div className="content-box">
        <div className="boxcard-background">
          <h3>Elevate Your Gameplay with Essential Insights!</h3>
          <p>Unleash Your Potential - Explore the Knowledge Hub Today!</p>
          <button>View Doc</button>
          <img src={game} className="game-img" />
        </div>
      </div>

      {/* Additional content */}
      <div className="additional-content">
        <div className="rectangle-box">
          <h2 style={{ color: "blue" }}>200 +</h2>
          <p>Projects have downloaded & integrated LYNC SDKs</p>
        </div>
        <div className="rectangle-box">
          <h2 style={{ color: "purple" }}>8000 +</h2>
          <p>Contracts have been deployed via LYNC</p>
        </div>
      </div>

      <div className="square-card-container">
        <div className="content">
          <h2 style={{ color: "blue" }}>50000 +</h2>
          <p>User ops created in 10 hours</p>
        </div>
        <img src={crypto} className="crypto-image" />
      </div>
    </div>
  );
}

export default Animationsection;
