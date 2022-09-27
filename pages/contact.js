import React, { useEffect } from "react";
import scrollBlack from "./menu_navbar/scrollBlack";

export default function Contact() {
  useEffect(() => {
    {
      scrollBlack();
    }

    document.querySelector(".Comps_logo_white__IYx_N").style.display = "none";
  }, []);
  return <div></div>;
}
