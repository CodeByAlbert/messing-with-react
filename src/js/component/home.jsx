import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Cards from "./cards";
import cardData from "./cardData";
import Footer from "./footer";
import ColorBox from "./colorBox";
import WebcamBox from "./webcamBox";

const Home = () => {
  return (
    <div className="text-center">
      <Navbar />
      <Jumbotron />

      <div className="container-fluid">
        <div className="row justify-content-center">
          {Array.isArray(cardData) &&
            cardData.map((card, index) => (
              <div className="col-auto" key={index}>
                <Cards
                  title={card.title}
                  image={card.image}
                  text={card.text}
                  link={card.link}
                />
              </div>
            ))}
        </div>
      </div>
      <div className="container mt-5">
        <ColorBox />
      </div>
      <div className="m-5">
        <WebcamBox />
      </div>
      <Footer />
    </div>
  );
};
//just a comment
export default Home;
