import React from "react";

const About = () => {
  return (
    <div className="about_container">
      <section className="about_section">
        <h1>HOW IT WORKS?</h1>
        <p>
          Tronstep is a decentralized investment platform powered by TRON smart
          contract technology. A smart contract guarantes 100 % safety and
          transparency of work.
        </p>
        <p>
          Accrual and payment of dividends occurs automatically. Tronstep is a
          great opportunity to multiply your assets in just a few days.
        </p>
        <h2>4 ACTIONS WILL LEAD YOU TO SUCCESS</h2>
        <div className="action_parts">
          <div className="action_div">
            <div className="action_div_head">
              <div className="action_color"></div>
              <h3>REGISTER YOUR TRON ​​WALLET</h3>
              <p>
                To get started, you need to register a wallet that works with
                the TRON (TRX) cryptocurrency. We recommend using TronLink or
                TronWallet wallets to work with the Web site. In case you are
                using a smartphone, the TronWallet app will be the best
                solution!
              </p>
              <h2>1</h2>
            </div>
          </div>
          <div className="action_div">
            <div className="action_div_head">
              <div className="action_color"></div>
              <h3>INVEST IN TRONSTEP</h3>
              <p>
              Smart contract Tronstep generates 20% of the investment amount every day and guarantees 200 % income in 14 days.
              </p>
              <h2>2</h2>
            </div>
          </div>
          <div className="action_div">
            <div className="action_div_head">
              <div className="action_color"></div>
              <h3>RETURN ON INVESTMENT</h3>
              <p>
              Profit (dividends) is credited to your account immediately after making an investment. You can withdraw dividends at any time.
              </p>
              <h2>3</h2>
            </div>
          </div>
          <div className="action_div">
            <div className="action_div_head">
              <div className="action_color"></div>
              <h3>PROFIT FROM REFERRALS</h3>
              <p>
              Earn additional income by referring new users. A two-level referral program allows you to earn 10 % + 3 % + 2 % of the investment amount of invited investors.
              </p>
              <h2>4</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
