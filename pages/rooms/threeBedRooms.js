import React, { useEffect } from "react";
import Image from "next/image";
import scrollBlack from "../menu_navbar/scrollBlack";

export default function ThreeBedRooms() {
  useEffect(() => {
    {
      scrollBlack();
    }

    document.querySelector(".Comps_logo_white__IYx_N").style.display = "none";

    if (window.location.pathname === "/rooms/threeBedRooms") {
      document.querySelector(".Room").style.color = "rgb(203, 182, 126)";
    }
  }, []);

  return (
    <div className="content">
      <div className="container-content">
        <div className="pp max-1280">
          <p>
            The 3 bedroom suites are the pinnacle of luxury living in Vientiane.
            At 147 sqm, these rooms feature the finest in Souphattra design,
            with an extensive lounge area, spacious and luxurious master
            bedroom, and two further bedrooms.
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
                  <p>Three Bedroom Suite</p>
                  <p></p>
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
                      <p>2nd floor to 5th floor</p>
                    </div>
                    <div className="room-icon">
                      <Image
                        src="/Asset 11.png"
                        alt="/"
                        width="1000"
                        height="1000"
                      />
                      <p>147 Sqm</p>
                    </div>
                    <div className="room-icon">
                      <Image
                        src="/Asset 10.png"
                        alt="/"
                        width="1000"
                        height="1000"
                      />
                      <p>3 Bedroom</p>
                    </div>
                    <div className="room-icon">
                      <Image
                        src="/Asset 8.png"
                        alt="/"
                        width="1000"
                        height="1000"
                      />
                      <p>3 Bathroom</p>
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
                    <p>One Bedroom Suite</p>
                    <p>SIZE: 62 - 82 sqm</p>
                    <button>
                      <a href="two-bedroom.html">VIEW DETAILS</a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-left-room">
                <div className="left-img">
                  <Image src="/3bed-5.jpg" alt="/" width="1000" height="960" />
                  <div className="view-detail">
                    <p>Two Bedroom Suite</p>
                    <p>SIZE: 114 sqm</p>
                    <button>
                      <a href="three-bedroom.html">VIEW DETAILS</a>
                    </button>
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
