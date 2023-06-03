import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Rocket = () => {
  const [rocketActive, setRocketActive] = useState(false);

  const handleClick = () => {
    setRocketActive(true);
    setTimeout(() => {
      setRocketActive(false);
    }, 7000);
  };

  return (
    <div className="rocket-box">
      <Link to="navbar" smooth={true} duration={1500} spy={true} exact="true">
        <div
          className={`rocket-container ${rocketActive ? "active" : ""}`}
          onClick={handleClick}
        >
          <div className="rockett">
            <img src="../images/rocket.png" alt="rocket" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Rocket;
