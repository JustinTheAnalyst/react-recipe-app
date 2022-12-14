import React, { useState } from "react";
import "../css/navbarStyles.scss";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div>
      <nav className="navigation">
        <a href="/" className="brand-name">
          MacroSoft
        </a>
        <div className={`navigation-menu ${isNavExpanded ? "expanded" : ""}`}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/recipes">Recipes</a>
            </li>
            <li>
              <a href="/flex2col">2 Columns</a>
            </li>
            <li>
              <a href="/tabs">Tabs</a>
            </li>
          </ul>
        </div>

        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
