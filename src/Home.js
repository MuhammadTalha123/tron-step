import React from "react";
import home_img from "./home_img.png" ;

const Home = () => {
  return (
    <div className="home_container">
      <section className="home_section">
        <span>INVESTORS:0</span>
        <span>TOTAL INVESTED:0 TRX</span>
        <div className="home_section_left_right">
          <div className="home_section_left">
            <h3>100 % verified smart contract</h3>
            <div className="home_percent">
              <div className="percent_left">
                <h2>210 %</h2>
                <p>
                  IN JUST<b>14 DAYS</b>
                </p>
              </div>
              <div className="percent_right">
                <h1>15%</h1>
                <h3>
                  Daily
                  <br /> ROI
                </h3>
              </div>
            </div>
            <p>GET 15% REFERRAL REWARDS</p>
            <p>8% + 5% + 2%</p>
            <div><button>CONTRACT</button><i className="fal fa-angle-right"></i></div>
          </div>
          <div className="home_section_right"><img src={home_img} alt="homeimg" width="550" /></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
