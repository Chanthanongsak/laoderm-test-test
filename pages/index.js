import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import mainBG from "../images/bg-main.png";
import mainBG2 from "../images/bg-main2.jpg";
import mainBG3 from "../images/bg-main3.jpg";
import logo from "../images/white-logo.png";
import blackLogo from "../images/logo.png";
import main from "../images/main.jpg";
import main2 from "../images/main-2.jpg";
import main3 from "../images/main-3.jpg";
import bedroom from "../images/bedroom.jpg";
import bedroom2 from "../images/bedroom-2.jpg";
import bedroom3 from "../images/bedroom-3.jpg";
import bar from "../images/bar.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import scrollWhile from "./menu_navbar/scrollWhite";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Home() {
  useEffect(() => {
    const scrollWhite = () => {
      document.querySelector(".Comps_fix__8yk6q").style.top = "0";
      document.querySelector(".Comps_fix__8yk6q").style.color = "white";
      document.querySelector(".Comps_fix__8yk6q").style.backgroundColor =
        "unset";
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
    {
      scrollWhite();
    }

    document.querySelector(".Comps_logo_black__PFiee").style.display = "none";
    document.querySelector(".Comps_logo_white__IYx_N").style.display = "flex";

    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  useEffect(() => {
    const container = document.querySelector(".Home_containerMain__wLP1Y");
    const header = document.querySelector(".Comps_fix__8yk6q");

    // console.log(container);
    document.addEventListener("scroll", () => {
      container.style.transform = `translateY(${window.scrollY * 0.7}px)`;
    });
  });

  const homeSlide = [mainBG, mainBG2, mainBG3];

  return (
    <>
      <div className={styles.bg}>
        <div className="main-cover">
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showArrows={false}
            showStatus={false}
          >
            {homeSlide.map((s) => {
              return (
                <>
                  <div className={styles.bgImg}>
                    <Image alt="/" src={s} width="1000" height="1000" />
                  </div>
                </>
              );
            })}
          </Carousel>
        </div>

        <div className={styles.blur}>
          <div className={styles.containerMain}>
            <div className={styles.bg_main}>
              <div className={styles.content_main}>
                <div className={styles.logo_in_bg}>
                  <Image alt="Logo" src={logo} />
                  <p>
                    Souphattra <br></br>Serviced Apartments <br></br>Vientiane
                  </p>
                </div>
                <div className={styles.adj}>
                  Elegant & Luxurious Accommodation in Vientiane
                </div>
                <div className={styles.row_line}></div>
                <div className={styles.scroll}>
                  <p>SCROLL TO EXPLORE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wave">
          <Image
            alt=""
            src="/bg-wave.png"
            layout="fill"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.create_space}></div>
        <div
          // data-aos="fade-up"
          // data-aos-duration="1000"
          className={[
            styles.flexend,
            styles.mg50,
            styles.wd100,
            styles.luxury,
          ].join(" ")}
        >
          <div
            className={[styles.leftFlex, styles.wd50, styles.leftFlexLux].join(
              " "
            )}
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className={[styles.fontInLux]}>
              <h1 className={styles.fontGold}>
                Luxury living in the heart of Vientiane’s Embassy district
              </h1>
              <p className={styles.mg}>
                Souphattra Serviced Apartments feature all the elegant design
                motifs for which the Souphattra brand is famous, with spacious
                rooms, luxurious fixtures and fittings, as well as superior
                inroom amenities and facilities, all in one desirable location
                in central Vientiane.
              </p>
            </div>
            <div className={[styles.bg, styles.spanUnset].join(" ")}>
              <Image
                alt="Lux"
                src={main}
                // src="/main.jpg"
                width="1000"
                height="650"
              />
            </div>
          </div>
          <div
            className={[
              styles.rightFlex,
              styles.wd50,
              styles.bg,
              styles.spanUnset,
            ].join(" ")}
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <Image alt="chair" src={main3} width="666" height="1000" />
          </div>
        </div>
        <div className={styles.create_space}></div>
        <div
          className={styles.textCenter}
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h1 className={styles.fontGold}>Souphattra Serviced Apartments</h1>
          <p className={styles.mg}>
            Feature all the elegant design motifs for which the Souphattra brand
            is famous, with spacious rooms, luxurious fixtures, and fittings, as
            well as superior in-room amenities and facilities, all in one
            desirable location in central Vientiane. With 38 luxurious rooms in
            1,2 and 3-bedroom configurationsSouphattra Serviced Apartments are
            ideal for business travelers, ex-pats, and those looking for
            exceptional long-term accommodation in Vientiane.
          </p>
          <div className={[styles.bg, styles.spanUnset].join(" ")}>
            <Image alt="pool" src={main2} width="1000" height="580" />
          </div>
        </div>

        <div className={styles.create_space}></div>

        <div className={[styles.textCenter, styles.mg50].join(" ")}>
          <h1
            data-aos="fade-down"
            data-aos-duration="1000"
            className={styles.fontGold}
          >
            Discover The Apartments
          </h1>
          <div
            className={[styles.flexend, styles.mg50, styles.wd100].join(" ")}
          >
            <div
              className={[styles.bg, styles.bgImg, styles.discoverLeft].join(
                " "
              )}
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <Image
                alt="bedroom"
                className={styles.unpos}
                src={bedroom}
                width={1000}
                height={800}
              />
              <div className={styles.hover}>
                <div>
                  <h1>One Bedroom Suite</h1>
                  <p>Size: 82 sqm</p>
                  <Link href="/rooms/oneBedRooms">
                    <button className={styles.btn_in_hover}>
                      VIEW DETAILS
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.discoverRight}>
              <div
                className={[
                  styles.bg,
                  styles.bgImg,
                  styles.discoverRightImg,
                ].join(" ")}
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <Image
                  className={styles.unpos}
                  alt="bedroom"
                  src={bedroom2}
                  width={1000}
                  height={400}
                />
                <div className={styles.hover}>
                  <div>
                    <h1>Two Bedroom Suite</h1>
                    <p>Size: 114 sqm</p>
                    <Link href="/rooms/twoBedRooms">
                      <button className={styles.btn_in_hover}>
                        VIEW DETAILS
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className={[
                  styles.bg,
                  styles.bgImg,
                  styles.discoverRightTop,
                  styles.discoverRightImg,
                ].join(" ")}
                data-aos="fade-left"
                data-aos-duration="2500"
              >
                <Image alt="/" src={bedroom3} height={400} width={1000} />
                <div className={styles.hover}>
                  <div>
                    <h1>Three Bedroom Suite</h1>
                    <p>Size: 147 sqm</p>
                    <Link href="/rooms/threeBedRooms">
                      <button className={styles.btn_in_hover}>
                        VIEW DETAILS
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.create_space}></div>
        <div
          className={[
            styles.flexend,
            styles.posrelative,
            styles.justifyEnd,
            styles.mg,
          ].join(" ")}
        >
          <div
            className={styles.absoluteBox}
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h1 className={styles.fontGold}>SERVICES AT HOME</h1>
            <p>
              Souphattra Spa, or a cocktail and dinner in our elegantly designed
              bar & restaurant, you can rest assured that relaxation awaits.
            </p>
            <Link href="/services">
              <button className={styles.btn_absolute}>
                EXPLORE OUR SERVICES
              </button>
            </Link>
          </div>

          <div
            className={[
              // styles.inheritImg,
              styles.absolutePic,
              styles.bg,
              styles.spanUnset,
            ].join(" ")}
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <Image alt="/" src={bar} width="1000" height="570" />
          </div>
        </div>
      </div>
    </>
  );
}
