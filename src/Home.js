import React from "react";
import home_img from "./home_img.png";
import home_percent from "./home_procent.png";

const Home = () => {
  return (
    <div className="home_container">
      <section className="home_section">
        <div className="home_main_span">
          <span>INVESTORS:0</span>
          <span>TOTAL INVESTED:0 TRX</span>
        </div>
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
                <h1>
                  <b>15%</b>
                </h1>
                <h2>
                  Daily
                  <br /> ROI
                </h2>
              </div>
            </div>
            <div className="home_p">
              <p>GET 15% REFERRAL REWARDS</p>
              <p>8% + 5% + 2%</p>
            </div>
            <div className="cotract_btn">
              <a
                href="https://tronscan.org/#/contract/TSXsR1ECTaGiMkJTAHSZ5yjz8Qx8FsLz7K/code"
                target="_blank"
              >
                <button>CONTRACT</button>
              </a>
              <i className="fal fa-angle-right"></i>
            </div>
          </div>
          <div className="home_section_right">
            <img src={home_img} alt="homeimg" width="550" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
