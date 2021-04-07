import React from "react";
import "../Styles/Appreciation.css";

const Appreciation = ({ onClose }) => {
  return (
    <div id="page">
      <div className="main-card">
        <img src="images/icon-check.svg" className="check" />
        <h2>Thank you for your support</h2>
        <p>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed{" "}
        </p>
        <button className="btn-major" onClick={onClose}>
          Got it!
        </button>
      </div>
    </div>
  );
};

export default Appreciation;
