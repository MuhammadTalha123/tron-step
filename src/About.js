import React from "react";

const About = () => {
  return (
    <div className="about_container">
      <section className="about_section">
        <h1 style={{ color: "white", textAlign: "center", fontSize: "40px" }}>
          HOW IT WORKS?
        </h1>
        <p
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "16px",
            marginTop: "25px",
          }}
        >
          Tronstep is a decentralized investment platform powered by TRON smart
          contract technology. A smart contract guarantes 100 % safety and
          transparency of work.
        </p>
        <p
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "16px",
            marginTop: "5px",
          }}
        >
          Accrual and payment of dividends occurs automatically. Tronstep is a
          great opportunity to multiply your assets in just a few days.
        </p>
        <h2
          style={{
            color: "#fcd740",
            textAlign: "center",
            fontSize: "30px",
            marginTop: "50px",
          }}
        >
          4 ACTIONS WILL LEAD YOU TO SUCCESS
        </h2>
        <div className="action_parts">
          <div className="action_div">
            <div className="action_div_head">
              <div className="action_color_1"></div>
              <h4>REGISTER YOUR TRON ​​WALLET</h4>
            </div>
            <p>
              To get started, you need to register a wallet that works with the
              TRON (TRX) cryptocurrency. We recommend using TronLink or
              TronWallet wallets to work with the Web site. In case you are
              using a smartphone, the TronWallet app will be the best solution!
            </p>
            <h2>1</h2>
          </div>
          <div className="action_div">
            <div className="action_div_head">
              <div className="action_color_2"></div>
              <h4>INVEST IN TRONSTEP</h4>
            </div>
            <p>
              Smart contract Tronstep generates 20% of the investment amount
              every day and guarantees 200 % income in 14 days.
            </p>
            <h2>2</h2>
          </div>
          <div className="action_div">
            <div className="action_div_head">
              <div className="action_color_3"></div>
              <h4>RETURN ON INVESTMENT</h4>
            </div>
            <p>
              Profit (dividends) is credited to your account immediately after
              making an investment. You can withdraw dividends at any time.
            </p>
            <h2>3</h2>
          </div>
          <div className="action_div">
            <div className="action_div_head">
              <div className="action_color_4"></div>
              <h4>PROFIT FROM REFERRALS</h4>
            </div>
            <p>
              Earn additional income by referring new users. A two-level
              referral program allows you to earn 10 % + 3 % + 2 % of the
              investment amount of invited investors.
            </p>
            <h2>4</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
