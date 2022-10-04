import React, { useEffect } from "react";
// import scrollBlack from "./menu_navbar/scrollBlack";

export default function Contact() {
  useEffect(() => {
    const scrollBlack = () => {
      document.querySelector(".Comps_fix__8yk6q").style.color = "#42413F";
      document.querySelector(".Comps_fix__8yk6q").style.backgroundColor =
        "white";
      document.querySelector(".Comps_enquires__n7_FT").style.backgroundColor =
        "#CBB67E";
      document.querySelector(".Comps_logoNav__YiO1I").style.backgroundColor =
        "rgb(66, 65, 63)";
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
  }, []);
  return <div></div>;
}
