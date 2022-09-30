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
// import scrollBlack from "./menu_navbar/scrollBlack";
import { useRouter } from "next/router";
import All from "./gallery/All";

export default function Gallery() {
  const [tab, setTab] = useState("tab1");

  useEffect(() => {
    const scrollBlack = () => {
      document.querySelector(".Comps_fix__8yk6q").style.color = "black";
      document.querySelector(".Comps_fix__8yk6q").style.backgroundColor =
        "white";
      document.querySelector(".Comps_enquires__n7_FT").style.backgroundColor =
        "#CBB67E";
      document.querySelector(".Comps_logoNav__YiO1I").style.backgroundColor =
        "black";
      document.querySelector(".Comps_nav_end__mBM5e").style.color = "white";

      document.querySelector('img[alt="Lao Derm logo"]').src =
        "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.94a59534.png&w=64&q=75";

      document.querySelector('img[alt="Lao Derm logo"]').srcset =
        "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.94a59534.png&w=32&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.94a59534.png&w=64&q=75 2x";

      // document.querySelector(".Comps_enquires__n7_FT a:hover").style.color =
      //   "white";

      document
        .querySelector(".Comps_enquires__n7_FT")
        .classList.remove("enquiresGold");

      document
        .querySelector(".Comps_enquires__n7_FT")
        .classList.add("eqOverZero");
    };

    {
      scrollBlack();
    }

    document.querySelector(".Comps_logo_white__IYx_N").style.display = "none";
    if (router.query.tab) {
      setTab(router.query.tab);
      document.querySelector(".Comps_logo_white__IYx_N").style.display = "flex";
    }
  }, []);

  const router = useRouter();

  // const [tab, setTab] = useState("tab1");

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
        <div className="facTitle ">
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

  const videoSrcAll = [
    "/pic1.jpg",
    "/pic1.jpg",
    "/pic1.jpg",
    "/pic1.jpg",
    "/pic1.jpg",
    "/pic1.jpg",
    "/pic1.jpg",
  ];

  const exteriorSrc = ["/main.jpg", "/main.jpg", "/main.jpg", "/main.jpg"];

  const interiorSrc = [
    "/bg-main.jpg",
    "/bg-main.jpg",
    "/bg-main.jpg",
    "/bg-main.jpg",
    "/bg-main.jpg",
  ];

  const poolImage = [
    "/pool.jpg",
    "/pool.jpg",
    "/pool.jpg",
    "/pool.jpg",
    "/pool.jpg",
    "/pool.jpg",
  ];

  const saunaImage = ["/sauna.jpg", "/sauna.jpg", "/sauna.jpg", "/sauna.jpg"];

  const spaImage = [
    "/spa.jpg",
    "/spa.jpg",
    "/spa.jpg",
    "/spa.jpg",
    "/spa.jpg",
    "/spa.jpg",
    "/spa.jpg",
    "/spa.jpg",
  ];

  const restuarantImage = [
    "/Souphattra Restaurant.jpg",
    "/Souphattra Restaurant.jpg",
    "/Souphattra Restaurant.jpg",
    "/Souphattra Restaurant.jpg",
    "/Souphattra Restaurant.jpg",
    "/Souphattra Restaurant.jpg",
    "/Souphattra Restaurant.jpg",
    "/Souphattra Restaurant.jpg",
  ];

  const cigarImage = ["/cigar bar.jpg", "/cigar bar.jpg"];

  const lobbyImage = ["/lobby bar.jpg"];

  if (tab === "tab1") {
    titleGallery = title;
    content = (
      <>
        <All
          videoList={videoSrcAll}
          exteriorList={exteriorSrc}
          interiorList={interiorSrc}
          poolList={poolImage}
          saunaList={saunaImage}
          spaList={spaImage}
          restuarantList={restuarantImage}
          cigarList={cigarImage}
          lobbyList={lobbyImage}
        />
      </>
    );
  } else if (tab === "tab2") {
    titleGallery = title;
    content = <Video imgList={videoSrcAll} />;
  } else if (tab === "tab3") {
    titleGallery = title;
    content = <Exterior imgList={exteriorSrc} />;
  } else if (tab === "tab4") {
    titleGallery = title;
    content = <Interior imgList={interiorSrc} />;
  } else if (tab === "tab5") {
    titleGallery = titleFacilities;
    contentFacilities = <PoolAndGym imgList={poolImage} />;
  } else if (tab === "tab5_2") {
    titleGallery = titleFacilities;
    contentFacilities = <Sauna imgList={saunaImage} />;
  } else if (tab === "tab5_3") {
    titleGallery = titleFacilities;
    contentFacilities = <Spa imgList={spaImage} />;
  } else if (tab === "tab5_4") {
    titleGallery = titleFacilities;
    contentFacilities = <Restaurant imgList={restuarantImage} />;
  } else if (tab === "tab5_5") {
    titleGallery = titleFacilities;
    contentFacilities = <Cigar imgList={cigarImage} />;
  } else if (tab === "tab5_6") {
    titleGallery = titleFacilities;
    contentFacilities = <Lobby imgList={lobbyImage} />;
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
