import React from "react";
import "../Styles/Midsection.scss";
import power from "../assets/Power.png";
import Ethrium from "../assets/Ethrium.png";

function Midsection() {
  return (
    <div className="midsection">
      <div className="top-box">
        <div>
          <img src={power} alt="Power" />
        </div>
        <div className="pos-eth">
          <img src={Ethrium} alt="Ethereum" />
        </div>
      </div>
    </div>
  );
}

export default Midsection;
