import React from "react";
import "../Styles/Bottomsection.scss";
import circle from "../assets/circle.png";
import telegram from "../assets/telegram.png";
import chin from "../assets/chin.png";
import lighthouse from "../assets/lighthouse.png";
import biconomy from "../assets/biconomy.png";
import xelar from "../assets/xelar.png";
import longHash1 from "../assets/LongHash1.png";
import chainlink from "../assets/chainlink.png";
import filecoin from "../assets/filecoin.png";
import spheron from "../assets/spheron.png";

const Bottomsection = () => {
  return (
    <>
      <div className="circle-main-box">
        <div>
          <img src={circle} alt="Circle" />
        </div>
        <div className="txt-btn-shape-box">
          <h1>
            Strong web3 <span className="color-txt">Community</span>
          </h1>
          <div className="tel-txt">
            <button>
              <img src={telegram} alt="Telegram" />
              <p>Join telegram</p>
            </button>
          </div>
        </div>
      </div>

      <div className="main-card-box1">
        <div className="txt-cen text-box-style box-shape">
          <h1>
            Our
            <span className="color-txt"> Beliveres and patners</span>
          </h1>
        </div>

        <div className="grid-box">
          <div className="img-round">
            <img src={spheron} />
          </div>
          <div className="img-round">
            <img src={lighthouse} />
          </div>
          <div className="img-round">
            <img src={biconomy} />
          </div>
          <div className="img-round">
            <img src={xelar} />
          </div>
          <div className="img-round">
            <img src={filecoin} />
          </div>
          <div className="img-round">
            <img src={longHash1} />
          </div>
          <div className="img-round">
            <img src={chainlink} />
          </div>
          <div className="img-round">
            <img src={spheron} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Bottomsection;
