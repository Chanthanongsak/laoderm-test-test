import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Comps.module.css";
import map from "../images/map-ed.png";
import logo from "../images/white-logo.png";
import fb from "../images/fb-removebg-preview (2).png";
import ig from "../images/ig.png";
import sms from "../images/message-removebg-preview.png";
import tel from "../images/tel-removebg-preview.png";
import brand from "../images/sh-logo-black-removebg-preview.png";
import lune from "../images/bg-lune.png";

function Footer() {
  const [book, setBook] = useState("book");

  function onBookClick(book) {
    setBook(book);
  }

  if (book === "book1") {
    document.querySelector(".content-book").style.display = "block";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
  }

  if (book === "close-book") {
    document.querySelector(".content-book").style.display = "none";
    document.getElementsByTagName("body")[0].style.overflow = "visible";
  }

  return (
    <>
      <div className="content-book">
        <div className="container-content-enquires">
          <a
            // href="#"
            onClick={() => onBookClick("close-book")}
            className="btn-close "
          >
            <Image src="/close.png" alt="" height="100" width="100" />
          </a>

          <div className="checkbox">
            <p>I would like to view:</p>
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
            <div className="contact">
              <p>You can also contact our Sales directly:</p>
              <div className="contact-Email">
                <Image alt="" src="/Asset 1.png" width="30" height="20" />
                <p>Dosmlaos@souphattra.com</p>
              </div>
              <div className="contact-tel">
                <Image
                  alt=""
                  src="/Asset 2.png"
                  // style={{ width: 20 }}
                  width="20"
                  height="20"
                />
                <p> 856 20 2222 7735</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.create_space}></div>
      <div className={[styles.containerContact].join(" ")}>
        <div className={styles.contact_us}>
          <h3>Contact With Us</h3>
          <div className={styles.flex_contact}>
            <div>
              <div className={styles.flex}>
                <Image alt="/" src={sms} width="30" height="30" />
                <p>sme@souphattra.com</p>
              </div>
              <div className={styles.flex}>
                <Image alt="/" src={tel} width="30" height="30" />
                <p>021 31 8111 | 31 8112</p>
              </div>
            </div>
            <div
              className={[styles.row_line, styles.line_brown].join(" ")}
            ></div>
            <div>
              <button
                onClick={() => onBookClick("book1")}
                className={styles.btnContact}
              >
                BOOK NOW
              </button>
            </div>
          </div>
        </div>

        <div
          className={[styles.textCenter, styles.mg50, styles.pdBottom0].join(
            " "
          )}
        >
          <h1>Partners</h1>
          <div
            className={[styles.flex, styles.pdBottom0, styles.footer_lg].join(
              " "
            )}
          >
            <div className={styles.lune}>
              <Image alt="/" src={lune} width="1000" height="883" />
              {/* <p className={styles.underlune}>VIENTIANE</p> */}
            </div>
            <div className={styles.lune}>
              <Image alt="/" src={lune} width="1000" height="883" />
              {/* <p className={styles.underlune}>VIENTIANE</p> */}
            </div>
            <div className={styles.lune}>
              <Image alt="/" src={lune} width="1000" height="883" />
              {/* <p className={styles.underlune}>VIENTIANE</p> */}
            </div>
            <div className={styles.lune}>
              <Image alt="/" src={lune} width="1000" height="883" />
              {/* <p className={styles.underlune}>VIENTIANE</p> */}
            </div>
            <div>
              <Image alt="/" src={brand} width="1000" height="883" />
            </div>
            <div>
              <Image alt="/" src={brand} width="1000" height="883" />
            </div>
            <div>
              <Image alt="/" src={brand} width="1000" height="883" />
            </div>
            <div>
              <Image alt="/" src={brand} width="1000" height="883" />
            </div>
            <div>
              <Image alt="/" src={brand} width="1000" height="883" />
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div>
          <div className={styles.flex}>
            <div className={styles.map}>
              <div className={styles.squre}></div>
              <Image alt="map" src={map} width={60} height={50} />
            </div>
            <div className={styles.address}>
              <div className={styles.logo_footer}>
                <Image alt="logo" src={logo} width={40} height={40} />
                <p>
                  Souphattra <br></br> Serviced Apartment <br></br> Vientiane
                </p>
              </div>
              <div className={styles.footer_ad}>
                <p>
                  Thaphalanxay Village, Sisattanak District, Vientiane, Lao PDR
                </p>
              </div>
              <div className={styles.social}>
                <p>FOLLOW US</p>
                <div>
                  <Image alt="" src={fb} width={20} height={20} />
                </div>
                <div>
                  <Image alt="" src={ig} width={20} height={20} />
                </div>
              </div>
            </div>
            <div className={styles.input}>
              <input placeholder="ROOMS" />
              <input placeholder="SERVICES" />
              <input placeholder="GALLERY" />
              <input placeholder="CONTACT" />
              <input placeholder="CAREERS" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
