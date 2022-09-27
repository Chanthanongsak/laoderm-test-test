import React, { useEffect } from "react";
import Image from "next/image";
import scrollBlack from "./menu_navbar/scrollBlack";

export default function Careers() {
  useEffect(() => {
    document.body.classList.add("bg-careers");
    {
      scrollBlack();
    }

    document.querySelector(".Comps_logo_white__IYx_N").style.display = "none";
    document.querySelector(".Room").style.color = "black";
  }, []);
  return (
    <>
      <div className="content">
        <div className="container-content-careers">
          <a className="btn-close" href="#">
            <Image src="/close.png" alt="" height="100" width="100" />
          </a>
          <div className="Text-Title">
            <h2>INTERESTED IN WORKING WITH US?</h2>
            <p>
              We are always looking for talented and enthusiastic people to join
              our rapidly growing team. If you’d like to join us, then please
              fill out your details below along with your CV.
            </p>
          </div>
          <div className="Text_Input">
            <div className="input-data" style={{ width: "20%" }}>
              <div className="select-box">
                <select onChange=" this.dataset.chosen = this.value;">
                  <option value={1} hidden />
                  <option value={2}>Mr.</option>
                  <option value={3}>Mrs.</option>
                  <option value={4}>Miss.</option>
                </select>
                <div className="underline" style={{ width: "50%" }} />
                <label htmlFor>Title</label>
              </div>
            </div>
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
          <div className="CV-Upload">
            <p>
              CV Upload<span> *</span>
            </p>
            <input type="file" className="input-file" />
          </div>
          <div className="Text-Message">
            <p>Cover Letter / Message</p>
            <textarea
              name
              id
              cols={30}
              rows={7}
              placeholder="Message"
              defaultValue={""}
            />
          </div>
          <div className="btn-detail">
            <button>Send Details</button>
          </div>
        </div>
      </div>
    </>
  );
}
