import React from "react";
import "../Styles/Midsection.scss";
import power from "../assets/Power.png";
import Ethrium from "../assets/Ethrium.png";
import boxcard from "../assets/boxcard.png";
import game from "../assets/game.png";
import rectanglecard from "../assets/Rectanglecard.png";
import squarecard from "../assets/squarecard.png";
import crypto from "../assets/crypto.png";
function Midsection() {
  return (
    <div>
      <div className="top-box">
        <div>
          <img src={power} />
        </div>
        <div className="pos-eth">
          <img src={Ethrium} />
        </div>
      </div>
      {/* /////////// */}
      <div className="container">
        {/* First Main Card */}
        <div className="card-box">
          <img src={boxcard} alt="Box Card" className="boxcard-img" />
          <div className="content">
            <h3>Elevate Your Gameplay with Essential Insights!</h3>
            <h2>Unleash Your Potential - Explore the Knowledge Hub Today!</h2>
            <button>View Doc</button>
          </div>
          <div className="dummy-img">
            <img src={game} alt="Dummy" />
          </div>
        </div>

        {/* Center Column Cards */}
        <div className="number-txt-box">
          <div className="first-box">
            <img src={rectanglecard} alt="Card 1" className="rectangle-image" />
            <div className="number-txt">
              <h3>200 +</h3>
              <p>Project have download and Integrated Lync SDKs!</p>
            </div>
          </div>
          <div className="second-box">
            <img src={rectanglecard} alt="Card 2" className="rectangle-image" />
            <div className="number-txt color-txt-num">
              <h3>8000 +</h3>
              <p>Contact have been deplyed vic LYNC</p>
            </div>
          </div>
        </div>
        {/* Second Main Card */}
        <div className="number-txt-box1">
          <div className="first-box">
            <img src={squarecard} alt="Card 1" className="rectangle-image1" />
            <div className="number-txt1">
              <h3>50000 +</h3>
              <p>Project have download and Integrated Lync SDKs!</p>
            </div>
            <div className="dummy-img">
              <img src={crypto} alt="Dummy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Midsection;
