import React from "react";
import "../Styles/Headersection.scss";
import rec1 from "../assets/Rectangle1.png";
import rec2 from "../assets/Rect2.png";
import rec3 from "../assets/Rect3.png";
import rec4 from "../assets/Rect4.png";
import rect5 from "../assets/Rect5.png";
import rect6 from "../assets/Rect6.png";
import { FaArrowRightLong } from "react-icons/fa6";
import Axelar from "../assets/Axelar.png";
import filecoin from "../assets/filecoin.png";
import Longhash from "../assets/Longhash.png";
import lync from "../assets/lync.png";
import line from "../assets/Line.png";
import zoro from "../assets/zoro.png";
import soul from "../assets/soul.png";
import born from "../assets/born.png";
import lums from "../assets/lums.png";
import vr from "../assets/vr.png";

export const Headersection = () => {
  return (
    <div>
      <div className="header-box">
        <div className="first-rect-box">
          <div>
            <img src={rec1} alt="Rectangle 1" />
          </div>
          <div>
            <img src={rec2} alt="Rectangle 2" />
          </div>
        </div>

        <div className="two-rect-box">
          <div>
            <img src={rec3} alt="Rectangle 3" />
          </div>
          <div>
            <img src={rec4} alt="Rectangle 4" />
          </div>
        </div>

        <div className="third-rect-box">
          <div>
            <img src={rect5} alt="Rectangle 5" />
          </div>
          <div>
            <img src={rect6} alt="Rectangle 6" />
          </div>
        </div>
        {/* Text box */}
        <div className="text-box">
          {/* <img src={web} /> */}
          <h1>
            Launch Your Game on<span className="flex-web">Web 3.0</span> in
            Minutes
          </h1>
        </div>
        <div className="txt-web">
          <p>
            we help Game developer to luanch the own game on wen 3.0 by keeping
            blockchain complexcity aside with web world SDKs!
          </p>
          <div className="btn-row">
            <div className="btn-col">
              <button>Get Started</button>
              <span>
                <FaArrowRightLong className="arrow-icon1" />
              </span>
            </div>
            <div className="btn-col">
              <button style={{ background: "black" }}>View Doc</button>
              <span>
                <FaArrowRightLong className="arrow-icon1" />
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* //// */}
      <div className="text-image-box">
        <div className="txt-back">
          <h2>Backed By</h2>
        </div>
        <div className="three-img-box">
          <div className="img-row">
            <div>
              {" "}
              <img src={Longhash} alt="longhash" />
            </div>
            <div>
              {" "}
              <img src={Axelar} alt="axelar" />
            </div>
            <div>
              {" "}
              <img src={filecoin} alt="filecoin" />
            </div>
          </div>
        </div>
      </div>
      <div className="txt-exp space-top">
        <div>
          <div className="line">
            <img src={line} />
          </div>
          {/* <img src={lync} /> */}
          <div className="txt-font">
            <h2>
              LYNC provides a scalable infrastructure for launching web3 games,
              without hampering the{" "}
              <span className="color-txt">gaming experience .</span>So that you
              can deliver the next big hit!
            </h2>
          </div>
          <div className="line1">
            <img src={line} />
          </div>
          <div className="bc-img">
            <div className="txt-font2">
              <h2>
                Making blockchain gaming accessible to{" "}
                <span style={{ color: "blue" }}>everyone!</span>
              </h2>
            </div>
          </div>
          <div className="img-flex-item">
            <div>
              {" "}
              <img src={zoro} alt="" />
            </div>
            <div>
              {" "}
              <img src={born} alt="" />
            </div>
            <div>
              {" "}
              <img src={soul} alt="" />
            </div>
            <div>
              <img src={lums} alt="" />
            </div>
            <div>
              <img src={vr} alt="" />
            </div>
          </div>
        </div>
        <div className="power-txt txt-font2">
          <h2>
            Power Up Your Web3 Game Development, With
            <span style={{ color: "purple" }}>LYNC SDKs</span>
          </h2>
        </div>
        <div className="txt-3d">
          <p>
            LYNC SDKs can be easily integrated into game engines like Unity 3D
            and Unreal Engine in a few clicks.
          </p>
        </div>
      </div>
    </div>
  );
};
