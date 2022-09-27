import React, { useState } from "react";

export default function Facilities() {
  const [tab, setTab] = useState("tab1");

  function onTabClick(tab) {
    setTab(tab);
  }

  return (
    <>
      <div className="facTitle">
        <a
          onClick={() => onTabClick("tab1")}
          className={tab == "tab1" ? "All abc" : "All"}
          href="#"
        >
          Facilities
        </a>
      </div>
      <section>
        <div className="content-row-fac">
          <a
            onClick={() => onTabClick("tab5_1")}
            className={tab == "tab5" ? "Pool abc" : "Pool"}
            href="#"
          >
            Pool & Gym
          </a>

          <a
            onClick={() => onTabClick("tab2")}
            className={tab == "tab2" ? "Videos abc" : "Videos"}
            href="#"
          >
            Steam & Sauna
          </a>
          <a
            onClick={() => onTabClick("tab3")}
            className={tab == "tab3" ? "Exterior abc" : "Exterior"}
            href="#"
          >
            Souphattra Spa
          </a>
          <a
            onClick={() => onTabClick("tab4")}
            className={tab === "tab4" ? "Interior abc" : "Interior"}
            href="#"
          >
            Souphattra Restaurant
          </a>
          <a className="Facilities" href="#">
            Cigar Bar
          </a>

          <a className="Facilities" href="#">
            Lobby Bar
          </a>
        </div>
      </section>
    </>
  );
}
