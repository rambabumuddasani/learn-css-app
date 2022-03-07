import logo from "./logo.svg";
import "./App.css";
import STYLE_EXAMPLE from "./components/styles_example";
import { ReactComponent as CloseIcon } from "./styles/close_icon.svg";
import { ReactComponent as FraudIllustration } from "./styles/Fraud_illustration.svg";
import { ReactComponent as Icon1 } from "./styles/1_icon.svg";
import { ReactComponent as Icon2 } from "./styles/2_icon.svg";
import { ReactComponent as ActiveCheckBox } from "./styles/active_checkbox.svg";

import { ReactComponent as ContinueBtn } from "./styles/continue_btn.svg";

const App = () => {
  return (
    
    <div>
        <header className="header_navigation">
        <h3 className="close_btn">
          <CloseIcon />
        </h3>
        <h1 className="scam_label">Scams are raising... </h1>
      </header>

       <div className="fraud_illustration_base">
        <FraudIllustration className="fraud_illustration" />
      </div>
       <div className="main_label">
        <b>
          Check that you did not log in <br /> from a fake dbs page!
        </b>
      </div>
      <div className="check_instruction_outer">
        <div className="check_instruction_1">
          <Icon1 className="frame1_icon" />
          <div className="frame1_content">
            <b>Never log in from links in emails or SMS,</b>
            <br />
            even if they appear to be sent by DBS.
          </div>
        </div>
        <div className="check_instruction_2">
          <Icon2 className="frame1_icon" />
          <div className="frame1_content">
            <b>Check the page link </b>you are now using to <br /> access
            digibank online:
          </div>
        </div>
      </div>
      <div className="ib_link_outer">
        <div className="ib_link_inner">
          <span className="ib_link_header">Only this link is authentic</span>
          <div className="ib_link_active_checkbox_link">
            <ActiveCheckBox className="ib_link_active_checkbox_icon" />
            <b className="ib_link_active_checkbox_text">
              internet-banking.dbs.com.sg
            </b>
          </div>
        </div>
      </div>
      <div>
      <div className="only_continue">
        Only continue if you’re sure the link is correct. <br/>If it looks suspicious, cancel now.
          </div>
          <button className="continue_btn">Continue</button>
          <button className="cancel_btn">Cancel</button>
      </div>
    </div>
  );
}

export default App;
