import React, { useRef, useEffect } from "react";
import "../css/Cert.css";
import { animateDivOnScrollIntro } from "./Animation";
import ContactMeSection from "./ContactMeSection";
const BlogSection = () => {
  /**Ref init */
  let certcontent = useRef(null);
  let cert = useRef(null);

  useEffect(() => {
    animateDivOnScrollIntro(cert, certcontent, "left");
  });

  return (
    <>
      <div
        className="cert__section"
        ref={(ele) => {
          cert = ele;
        }}
      >
        <div className="cert__section__content">
          <div
            className="cert__section__left"
            ref={(ele) => {
              certcontent = ele;
            }}
          >
            <p className="cert_text">- Certifications</p>
            <a
              href="https://www.youracclaim.com/badges/94d84920-80df-4ca8-864f-5bf4669c74e4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={
                  process.env.PUBLIC_URL + "/SecurityPlus Logo Certified CE.png"
                }
                alt="ComptiA Security+"
                className="cert__img__icon"
                title="ComptiA Security+ Certificate"
              />
            </a>
          </div>
        </div>
      </div>
      <ContactMeSection />
    </>
  );
};
export default BlogSection;
