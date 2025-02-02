// Loader.js
import React from 'react';
import './Loader.css'; // We'll define the styles here
import logo from "../../Assests/image.png"

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        {/* The logo will be displayed inside the spinning loader */}
        <img src={logo} alt="Logo" className="loader-logo" />
      </div>
    </div>
  );
};

export default Loader;
