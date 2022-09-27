import { useEffect, useState } from "react";
import Image from "next/image";
import Video from "./gallery/video";
import Exterior from "./gallery/exterior";
import Interior from "./gallery/interior";
import PoolAndGym from "./gallery/pool&gym";
import Sauna from "./gallery/sauna";
import Spa from "./gallery/spa";
import Restaurant from "./gallery/restuarant";
import Cigar from "./gallery/cigar";
import Lobby from "./gallery/lobby";
import styles from "../styles/Home.module.css";
import scrollBlack from "./menu_navbar/scrollBlack";
import { useRouter } from "next/router";

export default function Gallery() {
  const [tab, setTab] = useState("tab1");

  useEffect(() => {
    {
      scrollBlack();
    }

    document.querySelector(".Comps_logo_white__IYx_N").style.display = "none";
    if (router.query.tab) {
      setTab(router.query.tab);
    }
  }, []);

  const router = useRouter();
  console.log(router.query);

  // const [tab, setTab] = useState("tab1");

  console.log(tab);

  function onTabClick(tab) {
    setTab(tab);
  }

  let content = "";
  const title = (
    <>
      <section className="contentrow-1280px max-1280px">
        <div className="content-row">
          <a
            onClick={() => onTabClick("tab1")}
            className={tab == "tab1" ? "All abc" : "All"}
            href="#"
          >
            All
          </a>

          <a
            onClick={() => onTabClick("tab2")}
            className={tab == "tab2" ? "Videos abc" : "Videos"}
            href="#"
          >
            Videos
          </a>
          <a
            onClick={() => onTabClick("tab3")}
            className={tab == "tab3" ? "Exterior abc" : "Exterior"}
            href="#"
          >
            Exterior
          </a>
          <a
            onClick={() => onTabClick("tab4")}
            className={tab === "tab4" ? "Interior abc" : "Interior"}
            href="#"
          >
            Interior
          </a>
          <a onClick={() => onTabClick("tab5")} className="Facilities" href="#">
            Facilities
          </a>
        </div>
      </section>
    </>
  );

  const titleFacilities = (
    <>
      <section className="section-facilities contentrow-facilities">
        <div className={styles.row_line_gallery}></div>
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
              onClick={() => onTabClick("tab5")}
              className={tab == "tab5" ? "Pool abc" : "Pool"}
              href="#Pool"
            >
              Pool & Gym
            </a>

            <a
              onClick={() => onTabClick("tab5_2")}
              className={tab == "tab5_2" ? "Steam abc" : "Steam"}
              href="#Sauna"
            >
              Steam & Sauna
            </a>
            <a
              onClick={() => onTabClick("tab5_3")}
              className={tab == "tab5_3" ? "Spa abc" : "Spa"}
              href="#"
            >
              Souphattra Spa
            </a>
            <a
              onClick={() => onTabClick("tab5_4")}
              className={tab === "tab5_4" ? "Restaurant abc" : "Restaurant"}
              href="#"
            >
              Souphattra Restaurant
            </a>
            <a
              onClick={() => onTabClick("tab5_5")}
              className={tab === "tab5_5" ? "Cigar abc" : "Cigar"}
              href="#"
            >
              Cigar Bar
            </a>

            <a
              onClick={() => onTabClick("tab5_6")}
              className={tab === "tab5_6" ? "Lobby abc" : "Lobby"}
              href="#"
            >
              Lobby Bar
            </a>
          </div>
        </section>
        <section className="img-content">
          <div>
            <div className="container-image">{content}</div>
          </div>
        </section>
      </section>
    </>
  );

  let titleGallery = "";
  let contentFacilities = "";

  if (tab === "tab1") {
    titleGallery = title;
    content = (
      <>
        <Video />
        <Exterior />
        <Interior />
        <PoolAndGym />
        <Sauna />
        <Spa />
        <Restaurant />
        <Cigar />
        <Lobby />
      </>
    );
  } else if (tab === "tab2") {
    titleGallery = title;
    content = <Video />;
  } else if (tab === "tab3") {
    titleGallery = title;
    content = <Exterior />;
  } else if (tab === "tab4") {
    titleGallery = title;
    content = <Interior />;
  } else if (tab === "tab5") {
    titleGallery = titleFacilities;
    contentFacilities = <PoolAndGym />;
  } else if (tab === "tab5_2") {
    titleGallery = titleFacilities;
    contentFacilities = <Sauna />;
  } else if (tab === "tab5_3") {
    titleGallery = titleFacilities;
    contentFacilities = <Spa />;
  } else if (tab === "tab5_4") {
    titleGallery = titleFacilities;
    contentFacilities = <Restaurant />;
  } else if (tab === "tab5_5") {
    titleGallery = titleFacilities;
    contentFacilities = <Cigar />;
  } else if (tab === "tab5_6") {
    titleGallery = titleFacilities;
    contentFacilities = <Lobby />;
  }

  return (
    <>
      <div className="content">
        <div className="Text-Title">
          <h1>Gallery</h1>
        </div>

        {titleGallery}

        <section className="img-content">
          <div className="img-col max-1280px">
            <div className="container-image">{content}</div>
          </div>
        </section>

        <section className="img-content">
          <div className="img-col max-facilities">
            <div className="container-image-facilities">
              {contentFacilities}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
