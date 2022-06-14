import React from "react";

import eventImage from "../images/ui_event.png";
import PrimaryButton from "../../components/PrimaryButton";

// import css styles
import "./styles/uidesigns.scss";

// functional component
function UiDesigns() {
  // renders the page
  return (
    <div classname="UiDesigns">
      <div classname="container">
        <div className="hero">
          <img src={eventImage} alt="" className="hero__img" />
          <div className="hero__desc">
            <p>
              A collection of tool and resources gathered from our 2022 UI & UX
              Design event.
            </p>
            <br />
            <div className="hero__btn">
              <PrimaryButton
                onClick={() => navigate("/")}
                text="View Event Details"
                color="purple"
              />
              <PrimaryButton
                onClick={() => navigate("/")}
                text="Watch Video"
                color="purple"
                id="btn__secondary"
              />
            </div>
          </div>
        </div>
        <div className="showcase">
          <ul className="showcase__list">
            <li className="list__item">
              <Link>All</Link>
            </li>
            <li className="list__item">
              <Link>Mockup tools</Link>
            </li>
            <li className="list__item">
              <Link>Free images</Link>
            </li>
            <li className="list__item">
              <Link>Style Guides</Link>
            </li>
            <li className="list__item">
              <Link>Learn &amp; Practice</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
