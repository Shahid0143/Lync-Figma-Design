import React from "react";
import "../Styles/Cardsection.scss";
import img1 from "../assets/image.png";
import aptos from "../assets/aptos.png";
import saga from "../assets/saga.png";
import ethereum from "../assets/ethereum.png";
import astar from "../assets/astar.png";
import avalanche from "../assets/avalanche.png";
import zksync from "../assets/zksync.png";
import polygon from "../assets/polygon.png";
import shardeum from "../assets/shardeum.png";
import review from "../assets/review.png";
import alex from "../assets/alex.png";
import img2 from "../assets/img2.png";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
export const Cardsection = () => {
  return (
    <>
      <div className="main-card-box">
        <div className="txt-cen text-box-style">
          <h1>
            Powered <span style={{ color: "blue" }}>Suite</span>
          </h1>
        </div>

        <div className="card-main-container">
          <div className="card-shape-box">
            <img src={img1} />
            <h2>KDSKA KSD ADH</h2>
            <p className="lor-col">
              Lorem ipsum dolor sit amet consadsad asdsadsadas!!
            </p>
          </div>
          <div className="card-shape-box">
            <img src={img1} />
            <h2>KDSKA KSD ADH</h2>
            <p className="lor-col">
              Lorem ipsum dolor sit amet consadsad asdsadsadas!!
            </p>
          </div>
          <div className="card-shape-box">
            <img src={img1} />
            <h2>KDSKA KSD ADH</h2>
            <p className="lor-col">
              Lorem ipsum dolor sit amet consadsad asdsadsadas!!
            </p>
          </div>
          <div className="card-shape-box">
            <img src={img1} />
            <h2>KDSKA KSD ADH</h2>
            <p className="lor-col">
              Lorem ipsum dolor sit amet consadsad asdsadsadas!!
            </p>
          </div>
          <div className="card-shape-box">
            <img src={img1} />
            <h2>KDSKA KSD ADH</h2>
            <p className="lor-col">
              Lorem ipsum dolor sit amet consadsad asdsadsadas!!
            </p>
          </div>
          <div className="card-shape-box">
            <img src={img1} />
            <h2>KDSKA KSD ADH</h2>
            <p className="lor-col">
              Lorem ipsum dolor sit amet consadsad asdsadsadas!!
            </p>
          </div>
        </div>
      </div>

      <div className="main-card-box1">
        <div className="txt-cen text-box-style box-shape">
          <h1>
            With LYNC, build on your
            <span className="color-txt"> favorite chain.</span>
          </h1>
        </div>

        <div className="grid-box">
          <div>
            <img src={ethereum} />
          </div>
          <div>
            <img src={polygon} />
          </div>
          <div>
            <img src={aptos} />
          </div>
          <div>
            <img src={zksync} />
          </div>
          <div>
            <img src={shardeum} />
          </div>
          <div>
            <img src={astar} />
          </div>
          <div>
            <img src={saga} />
          </div>
          <div>
            <img src={avalanche} />
          </div>
        </div>
      </div>

      <div className="main-card-box2">
        <div className="txt-cen text-box-style pos-btm">
          <h1>
            From our <span style={{ color: "blue" }}>Blog</span>
          </h1>
          <div className="txt-3d1">
            <p>
              Level Up Your Web3 Gaming Experience: Explore Our Blog for
              Insights, Tips, and Innovations in Gaming SDKs!
            </p>
          </div>
        </div>
        <div className="arrow-btn left">
          <FaChevronLeft />
        </div>
        <div className="arrow-btn right">
          <FaChevronRight />
        </div>
        <div className="card-main-container1">
          <div className="card-shape-box1">
            <img src={img2} alt="Blog Post" />
            <h2>
              LYNC teamed up with Astar Network to effortlessly bring the next
              billion gamers into Web3 🎮
            </h2>
            <p className="lor-col">
              LYNC joins forces with Astar Network to allow game developers and
              studios to launch games in just a few minutes using LYNC’s SDK and
              infrastructure.
            </p>
          </div>
          <div className="card-shape-box1">
            <img src={img2} alt="Blog Post" />
            <h2>
              LYNC teamed up with Astar Network to effortlessly bring the next
              billion gamers into Web3 🎮
            </h2>
            <p className="lor-col">
              LYNC joins forces with Astar Network to allow game developers and
              studios to launch games in just a few minutes using LYNC’s SDK and
              infrastructure.
            </p>
          </div>
          <div className="card-shape-box1">
            <img src={img2} alt="Blog Post" />
            <h2>
              LYNC teamed up with Astar Network to effortlessly bring the next
              billion gamers into Web3 🎮
            </h2>
            <p className="lor-col">
              LYNC joins forces with Astar Network to allow game developers and
              studios to launch games in just a few minutes using LYNC’s SDK and
              infrastructure.
            </p>
          </div>
        </div>
      </div>

      <div className="main-card-box3">
        <div className="txt-cen text-box-style pos-btm">
          <h1>
            Valuable<span style={{ color: "blue" }}> Review!</span>
          </h1>
        </div>
        <div className="arrow-btn left1">
          <FaChevronLeft />
        </div>
        <div className="arrow-btn right1">
          <FaChevronRight />
        </div>
        <div className="card-main-container1">
          <div className="card-shape-box2">
            <img src={review} alt="Blog Post" />
            <img src={alex} />
          </div>
          <div className="card-shape-box2">
            <img src={review} alt="Blog Post" />
            <img src={alex} />
          </div>
          <div className="card-shape-box2">
            <img src={review} alt="Blog Post" />
            <img src={alex} />
          </div>
        </div>
      </div>
    </>
  );
};
