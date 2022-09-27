import { useEffect } from "react";

const scrollWhile = () => {
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

export default scrollWhile;
