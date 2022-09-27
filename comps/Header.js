import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../images/logo.png";
import styles from "../styles/Comps.module.css";
import Link from "next/link";
import whiteLogo from "../images/white-logo.png";
import blackLogo from "../images/logo.png";
import youtube from "../images/yt.png";
import facebook from "../images/fb.png";
import ig from "../images/ig-logo.png";
// import scrollBlack from "../pages/menu_navbar/scrollBlack";
// import scrollWhite from "../pages/menu_navbar/scrollWhite";
import { useRouter } from "next/router";

function Header() {
  const [title, setTitle] = useState("title1");
  const router = useRouter();
  const currentRoute = router.pathname;

  function onTitleClick(title) {
    setTitle(title);
  }

  // console.log(title);

  const whiteNavLogo = (
    <>
      <Link href="/">
        <Image
          id="logoNavbar"
          src={whiteLogo}
          alt="Lao Derm logo"
          width={30}
          height={30}
        />
      </Link>
    </>
  );

  const scrollBlack = () => {
    document.querySelector(".Comps_fix__8yk6q").style.color = "black";
    document.querySelector(".Comps_fix__8yk6q").style.backgroundColor = "white";
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

  const scrollWhite = () => {
    document.querySelector(".Comps_fix__8yk6q").style.top = "0";
    document.querySelector(".Comps_fix__8yk6q").style.color = "white";
    document.querySelector(".Comps_fix__8yk6q").style.backgroundColor = "unset";
    document.querySelector(".Comps_enquires__n7_FT").style.backgroundColor =
      "inherit";
    document.querySelector(".Comps_logoNav__YiO1I").style.backgroundColor =
      "inherit";
    document.querySelector('img[alt="Lao Derm logo"]').src =
      "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhite-logo.0021d839.png&w=64&q=75";
    document.querySelector('img[alt="Lao Derm logo"]').srcset =
      "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhite-logo.0021d839.png&w=32&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhite-logo.0021d839.png&w=64&q=75 2x";

    document
      .querySelector(".Comps_enquires__n7_FT")
      .classList.add("enquiresGold");

    document
      .querySelector(".Comps_enquires__n7_FT")
      .classList.remove("eqOverZero");
  };

  let logoNav = "";

  const logoBlackNav = (
    <>
      <Link href="/">
        <Image
          className={styles.blackLogo}
          id="logoNavbar"
          src={blackLogo}
          alt="Lao Derm logo Black"
          width={30}
          height={30}
        />
      </Link>
    </>
  );

  if (title === "title4") {
  }

  if (title === "title2" || title === "title3" || title === "title1_1") {
    document.querySelector(".Comps_logo_white__IYx_N").style.display = "flex";
    if (
      window.location.pathname === "/rooms/oneBedRooms" ||
      window.location.pathname === "/rooms/twoBedRooms" ||
      window.location.pathname === "/rooms/threeBedRooms"
    ) {
      document.querySelector(".Comps_logo_black__PFiee").style.display = "flex";
      document.querySelector(".Comps_logo_white__IYx_N").style.display = "none";
    }
  }

  useEffect(() => {
    if (window.location.pathname === "/rooms/oneBedRooms") {
      document.querySelector(".Comps_logo_black__PFiee").style.display = "flex";
    }

    // console.log(document.querySelector(".Comps_enquires__n7_FT"));
  }, []);

  if (title === "title4" || title === "title5" || title === "title6") {
    document.querySelector(".Comps_logo_black__PFiee").style.display = "flex";
  }

  if (
    title === "title2" ||
    title === "title3" ||
    title === "title4" ||
    title === "title5" ||
    title === "title1_1"
  ) {
    document.body.style.background = "unset";
  }

  if (title === "title3" || title === "title4" || title === "title5") {
    document.querySelector(".Room").style.color = "unset";
  }

  if (title === "title1_1") {
    document.querySelector(".Room").style.color = "unset";
  }

  if (title === "title6") {
    document.body.style.backgroundImage = "url('/bg2.png')";
  }

  if (title === "title7") {
    document.querySelector(".content-enquires").style.display = "block";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
  }

  if (title === "close-enquires") {
    document.querySelector(".content-enquires").style.display = "none";
    document.getElementsByTagName("body")[0].style.overflow = "visible";
  }

  if (title === "title2_1") {
    document.querySelector(".Room a").classList.add("active-nav");
  }

  useEffect(() => {
    const enquires = document.querySelector(".content-enquires");
    enquires.classList.add("d-none");
    document.querySelector(".content-book").classList.add("d-none");

    if (currentRoute === "/rooms") {
      document.body.classList.add("unbg");
    }
    const menu = document.querySelector(".Comps_flex__lzjh7");
    const black = document.querySelector('img[alt="Lao Derm logo"]');

    const header = document.querySelector(".Comps_fix__8yk6q");
    (function () {
      var doc = document.documentElement;
      var w = window;

      var curScroll;
      var prevScroll = w.scrollY || doc.scrollTop;
      var curDirection = 0;
      var prevDirection = 0;

      var header = document.querySelector(".Comps_fix__8yk6q");
      var toggled;
      var threshold = 70;

      var checkScroll = function () {
        curScroll = w.scrollY || doc.scrollTop;
        if (curScroll > prevScroll) {
          // scrolled down
          curDirection = 2;
        } else {
          //scrolled up
          curDirection = 1;
        }

        if (curDirection !== prevDirection) {
          toggled = toggleHeader();
        }

        prevScroll = curScroll;
        if (toggled) {
          prevDirection = curDirection;
        }

        if (document.documentElement.scrollTop === 0) {
          {
            scrollWhite();
          }
        } else if (document.documentElement.scrollTop > 0) {
          {
            scrollBlack();
          }
        }

        if (
          window.location.pathname === "/gallery" ||
          window.location.pathname === "/careers" ||
          window.location.pathname === "/contact" ||
          window.location.pathname === "/rooms/oneBedRooms" ||
          window.location.pathname === "/rooms/twoBedRooms" ||
          window.location.pathname === "/rooms/threeBedRooms"
        ) {
          if (document.documentElement.scrollTop === 0) {
            {
              scrollBlack();
            }
          }
        }
      };

      var toggleHeader = function () {
        toggled = true;
        if (curDirection === 2 && curScroll > threshold) {
          header.style.top = "-56px";
          header.style.color = "white";
          header.style.backgroundColor = "unset";
          black.src =
            "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhite-logo.0021d839.png&w=64&q=75";
          black.srcset =
            "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhite-logo.0021d839.png&w=32&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhite-logo.0021d839.png&w=64&q=75 2x";
        } else if (curDirection === 1) {
          // console.log(document.documentElement.scrollTop);
          header.style.top = "0";
          header.style.color = "black";
          header.style.backgroundColor = "white";
          black.src =
            "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.94a59534.png&w=64&q=75";
          black.srcset =
            "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.94a59534.png&w=32&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.94a59534.png&w=64&q=75 2x";
        } else {
          toggled = false;
        }
        return toggled;
      };

      window.addEventListener("scroll", checkScroll);
    })();
  }, []);

  if (title === "title1_1") {
  }

  return (
    <>
      <div className={[styles.fix].join(" ")}>
        <div className={[styles.flex, styles.container_nav].join(" ")}>
          <div className={styles.any_flex}>
            <div className={styles.allLogoLD}>
              <div
                className={[
                  styles.logoLD,
                  styles.pointer,
                  styles.logo_white,
                ].join(" ")}
                onClick={() => onTitleClick("title1_1")}
              >
                {whiteNavLogo}
              </div>

              <div
                className={[
                  styles.logoLD,
                  styles.pointer,
                  styles.logo_black,
                ].join(" ")}
                onClick={() => onTitleClick("title1_1")}
              >
                {logoBlackNav}
              </div>
            </div>

            <div className={styles.menu}>
              {/* <div> */}
              <div
                onClick={() => onTitleClick("title2")}
                className={
                  currentRoute === "/rooms" ? "Room active-nav" : "Room "
                }
              >
                <Link href="/rooms">ROOMS</Link>
                <div className="dropdown-content">
                  <Link href="/rooms/oneBedRooms">
                    <a
                      onClick={() => onTitleClick("title2")}
                      className={
                        currentRoute === "/rooms/oneBedRooms"
                          ? "oneBedRooms active-nav"
                          : "oneBedRooms "
                      }
                    >
                      ONE BEDROOM SUITES
                    </a>
                  </Link>
                  <Link href="/rooms/twoBedRooms">
                    <a
                      onClick={() => onTitleClick("title2")}
                      className={
                        currentRoute === "/rooms/twoBedRooms"
                          ? "twoBedRooms active-nav"
                          : "twoBedRooms "
                      }
                    >
                      TWO BEDROOM SUITES
                    </a>
                  </Link>
                  <Link href="/rooms/threeBedRooms">
                    <a
                      className={
                        currentRoute === "/rooms/threeBedRooms"
                          ? "threeBedRooms active-nav"
                          : "threeBedRooms "
                      }
                    >
                      THREE BEDROOM SUITES
                    </a>
                  </Link>
                </div>
              </div>
              {/* </div> */}

              <span></span>
              <Link href="/services">
                <a
                  onClick={() => onTitleClick("title3")}
                  className={
                    currentRoute === "/services"
                      ? "Service active-nav"
                      : "Service "
                  }
                >
                  SERVICES
                </a>
              </Link>
              <span></span>
              <Link href="/gallery">
                <a
                  onClick={() => onTitleClick("title4")}
                  className={
                    currentRoute === "/gallery"
                      ? "Gallery active-nav"
                      : "Gallery "
                  }
                >
                  GALLERY
                </a>
              </Link>
              <span></span>
              <Link href="/contact">
                <a
                  onClick={() => onTitleClick("title5")}
                  className={
                    currentRoute === "/contact"
                      ? "Contact active-nav"
                      : "Contact "
                  }
                >
                  CONTACT
                </a>
              </Link>
              <span></span>
              <Link href="/careers">
                <a
                  onClick={() => onTitleClick("title6")}
                  className={
                    currentRoute === "/careers"
                      ? "Careers active-nav"
                      : "Careers "
                  }
                >
                  CAREERS
                </a>
              </Link>
            </div>
          </div>
          <div className={[styles.nav_end, styles.flex].join(" ")}>
            <div className={[styles.logoNav]}>
              <Image alt="" src={youtube} />
              <Image alt="" src={ig} />
              <Image alt="" src={facebook} />
            </div>
            <div className={styles.enquires}>
              <a
                onClick={() => onTitleClick("title7")}
                className={
                  title === "/title7" ? "Enquires active-nav" : "Enquires "
                }
              >
                ENQUIRES
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="content-enquires">
        <div className="container-content-enquires">
          <a
            // href="#"
            onClick={() => onTitleClick("close-enquires")}
            className="btn-close "
          >
            <Image src="/close.png" alt="" height="100" width="100" />
          </a>
          <div className="Text-Title">
            <h2>ENQUIRIES</h2>
            <p>
              Your interest in Souphattra Serviced Apartments is greatly
              appreciated.
            </p>
            <p>
              Please provide the requested information, and a representative
              will contact you shortly.
            </p>
          </div>
          <div className="Text_Input">
            <div className="input-data" style={{ width: "20%" }}>
              {/* <input class="form__field" type="text" required style="width: 50%;"> */}
              <div className="select-box">
                <select onChange=" this.dataset.chosen = this.value;">
                  <option value={1} hidden />
                  <option value={2}>Mr</option>
                  <option value={3}>Mrs</option>
                  <option value={4}>Miss</option>
                </select>
                <div className="underline" style={{ width: "50%" }} />
                <label htmlFor>Title</label>
              </div>
            </div>{" "}
            <div className="input-data">
              <input className="form__field" type="text" required />
              <div className="underline" />
              <label htmlFor>First Name</label>
            </div>
            <div className="input-data">
              <input className="form__field" type="text" required />
              <div className="underline" />
              <label htmlFor>Last Name</label>
            </div>
          </div>
          <div className="Text_Input-Email">
            <div className="input-data">
              <input className="form__field" type="text" required />
              <div className="underline" />
              <label htmlFor>Email</label>
            </div>
            <div className="input-data">
              <input className="form__field" type="tel" required />
              <div className="underline" />
              <label htmlFor>Phone Number</label>
            </div>
          </div>
          <div className="checkbox">
            <p>I would like to view:</p>
            <div className="col-checkbox">
              <div className="col-input">
                <input id="checkbox1" type="checkbox" />
                <label htmlFor="checkbox1">
                  <div className="col-text">
                    <p>One-Bedroom Suite</p>
                    <p>(82 sqm)</p>
                  </div>
                </label>
              </div>
              <div className="col-input">
                <input id="checkbox2" type="checkbox" />
                <label htmlFor="checkbox2">
                  <div className="col-text">
                    <p>Two-Bedroom Suite</p>
                    <p>(114 sqm)</p>
                  </div>
                </label>
              </div>
              <div className="col-input">
                <input id="checkbox3" type="checkbox" />
                <label htmlFor="checkbox3">
                  <div className="col-text">
                    <p>Three-Bedroom Suite</p>
                    <p>(147 sqm)</p>
                  </div>
                </label>
              </div>
            </div>
            <div className="date">
              <div className="Text_Input-date">
                <div className="col-date">
                  <p>Date of visit</p>
                  <input placeholder="Day / Month / Year " type="text" />
                </div>
                <div className="col-date">
                  <p>My price range is</p>
                  <input placeholder="less 1,800 $" type="text" />
                </div>
              </div>
              <div className="Text_Input-">
                <input
                  placeholder="Please specify your enquiry hear"
                  type="text"
                />
              </div>
              <div className="Text-bottom">
                <p>
                  Please verify that your email address and phone number are
                  accurate. We will contact you shortly.
                </p>
                <p>
                  Please note that showcase units are only accessible by
                  appointment
                </p>
              </div>
            </div>
            <div className="btn-submit">
              <button>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
