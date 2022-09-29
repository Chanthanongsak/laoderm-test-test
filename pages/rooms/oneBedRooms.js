import React, { useEffect } from "react";
import Image from "next/image";
// import scrollBlack from "../menu_navbar/scrollBlack";
import Link from "next/link";

export default function OneBedRooms() {
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
    document.querySelector(".Comps_logo_black__PFiee").style.display = "flex";

    if (window.location.pathname === "/rooms/oneBedRooms") {
      document.querySelector(".Room").style.color = "rgb(203, 182, 126)";
    }
  }, []);

  return (
    <div className="content">
      <div className="container-content">
        <div className="pp max-1280">
          <p>
            The 1 bedroom suites are the perfect business accommodation,
            offering ample space for 1 or 2-person stays with up to 82 sqm. They
            are impeccably well-designed and feature all the desired amenities
            for the modern traveler.
          </p>
        </div>
        <div className="Text-img">
          <div className="crop-image max-1280">
            <div className="image-content">
              <div className="img-first">
                <Image
                  alt="/"
                  src="/1bedroom (5).jpg"
                  className="img-Slide"
                  // width="714"
                  // height="406"
                  width="1000"
                  height="568"
                />
              </div>
              <div className="deatail-room">
                <div className="text-deatil-room">
                  <p>One Bedroom Suite</p>
                  <p>Available for daily stay, weekly and monthly stays.</p>
                </div>
                <div className="col-room-book">
                  <div className="room-col">
                    <div className="room-icon">
                      <Image
                        src="/Asset 6.png"
                        alt="/"
                        width="1000"
                        height="1000"
                      />
                      <p>1st floor to 5th floor</p>
                    </div>
                    <div className="room-icon">
                      <Image
                        src="/Asset 11.png"
                        alt="/"
                        width="1000"
                        height="1000"
                      />
                      <p>82 Sqm</p>
                    </div>
                    <div className="room-icon">
                      <Image
                        src="/Asset 10.png"
                        alt="/"
                        width="1000"
                        height="1000"
                      />
                      <p>1 Bedroom</p>
                    </div>
                    <div className="room-icon">
                      <Image
                        src="/Asset 8.png"
                        alt="/"
                        width="1000"
                        height="1000"
                      />
                      <p>1 Bathroom</p>
                    </div>
                    <div className="room-icon">
                      <Image
                        src="/Car-595b40b75ba036ed117d6eb7 (2).png"
                        alt="/"
                        width="1000"
                        height="1000"
                      />
                      <p>1 Car parking space</p>
                    </div>
                    <div className="room-icon">
                      <Image
                        src="/Asset 3.png"
                        alt="/"
                        width="1000"
                        height="1000"
                      />
                      <a href="#">
                        <p>See flow plan</p>
                      </a>
                    </div>
                  </div>
                  <div className="btn-book">
                    <a href="#">BOOK NOW</a>
                  </div>
                </div>
              </div>
              <div className="div2">
                <div className="icon-right-left">
                  <Image
                    width="1000"
                    height="1000"
                    src="/left-arrow-angle-black-circular-interface-symbol_icon-icons.com_72951.png"
                    alt="/"
                  />
                  <Image
                    width="1000"
                    height="1000"
                    src="/right-arrow-angle-black-circular-interface-symbol_icon-icons.com_72951.png"
                    alt="/"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row-bar">
          <div className="container-row max-1280">
            <div className="room-feature">
              <p>Room Features</p>
              <div className="box-img">
                <Image src="/fac-34.jpg" alt="/" width="1000" height="563" />
                <div className="box-text">
                  <p>High Speed Internet Access</p>
                  <p>Air Conditioning</p>
                  <p>In-Room Safety Box</p>
                  <p>Cable TV</p>
                  <p>Ironing Facilities</p>
                  <p>Smart Cable TV</p>
                  <p>Bathtube</p>
                  <p>Fully Equipped Kitchen</p>
                </div>
              </div>
            </div>
            <div className="room-feature">
              <p>Service and Other Facilities</p>
              <div className="box-img">
                <Image src="/fac-34.jpg" alt="/" width="1000" height="563" />
                <div className="box-text">
                  <p>24 Hours Reception</p>
                  <p>24 Security</p>
                  <p>24 Concierge</p>
                  <p>Shuttle Bus Service</p>
                  <p>Cleaning Service</p>
                  <p>10 - 15% Discount for F&amp;B (Long Stay)</p>
                  <p>Meeting room Access</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="other-room">
          <div className="Text-">
            <p>Also Available</p>
          </div>
          <div className="col-room-more">
            <div className="col-image-room max-1280">
              <div className="col-left-room">
                <div className="left-img">
                  <Image src="/3bed-1.jpg" alt="/" width="1000" height="960" />
                  <div className="view-detail">
                    <p>Two Bedroom Suite</p>
                    <p>SIZE: 114 sqm</p>
                    <Link href="/rooms/twoBedRooms">
                      <button>
                        <a>VIEW DETAILS</a>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-left-room">
                <div className="left-img">
                  <Image src="/3bed-5.jpg" alt="/" width="1000" height="960" />
                  <div className="view-detail">
                    <p>Three Bedroom Suite</p>
                    <p>SIZE: 147 sqm</p>
                    <Link href="/rooms/threeBedRooms">
                      <button>
                        <a>VIEW DETAILS</a>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
