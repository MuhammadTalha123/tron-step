import React from "react";

const Invetement = () => {
  return (
    <div className="invest_container">
      <section className="invest_section">
        <div className="invest_heading">
          <h2>INVESTMENTS</h2>
          <span>
            Investment : <b>0</b>
          </span>
        </div>
        <div className="invest_state">
          <span>
            total invested: <b>0 TRX</b>
          </span>
          <span>
            total paid: <b>0 TRX</b>
          </span>
          <span>
            Wallet Bal: <b>0 TRX</b>
          </span>
        </div>
        <div className="invest_detail">
          <div className="invest_detail_left">
            <div className="invest_detail_left_head">
              <p>INVEST AND EARN</p>
              <h3>15% PER DAY</h3>
            </div>
            <p>ENTER THE INVESTMENT AMOUNT :</p>
            <div className="input_div">
              <i className="fal fa-gem"></i>
              <input type="text" placeholder="MIN 100" />
              <span>TRX</span>
            </div>
            <div className="min_max_num">
              <span>MIN: 100 TRX</span>
              <span>MAX: 1000000 TRX</span>
            </div>
            <div className="invest_detail_left_btn">
              <a>
                <button>INVEST NOW</button>
              </a>
              <i className="fal fa-angle-right"></i>
            </div>
          </div>
          <div className="invest_detail_right">
            <div className="invest_detail_right_head">
              <p>Invested: 0TRX</p>
              <p>total paid: 0 TRX</p>
            </div>
            <p>AVAILABLE DIVIDENDS</p>
            <h3>0</h3>

            <div className="invest_detail_left_btn">
              <a>
                <button>WITHDRAW</button>
              </a>
              <i className="fal fa-angle-right"></i>
            </div>
            <p>On Withdraw 20% will Auto-Reinvest</p>
            <div className="invest_detail_left_btn">
              <a>
                <button>REINVEST</button>
              </a>
              <i className="fal fa-angle-right"></i>
            </div>
          </div>
        </div>
        <h2>REFERRALS</h2>
        <div className="referal_detail">
          <div className="referal_detail_left">
            <div className="referal_detail_left_head">
              <p>REFER AND EARN</p>
              <h3>15% REFERRAL</h3>
            </div>
            <p>AVALIABLE REFERRAL TO WITHDRAW:</p>
            <div className="referal_input_div">
              <i className="fal fa-gem"></i>
              <span>
                <b>0</b>TRX
              </span>
            </div>
            <div className="referal_num">
              <span>LEVEL :8% + 5% + 2%</span>
            </div>
            <div className="referal_detail_left_btn">
              <a>
                <button>WITHDRAW</button>
              </a>
              <i className="fal fa-angle-right"></i>
            </div>
          </div>
          <div className="invest_detail_right">
            <div className="invest_detail_right_head">
              <p>YOUR REFERRAL LINK:</p>
              <p>...</p>
            </div>
            <div className="copy_link_btn">
              <button>COPY LINK</button>
            </div>
            <div><span>LEVEL1(8%):</span><b>0</b></div>
            <div><span>LEVEL2(5%):</span><b>0</b></div>
            <div><span>LEVEL3(2%):</span><b>0</b></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Invetement;