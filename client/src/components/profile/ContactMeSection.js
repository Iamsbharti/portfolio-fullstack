import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../css/Profile.css";

import {
  contactIntro,
  contactInfoIntro,
  emailIntro,
  quote1Intro,
  quote2Intro,
  detailsIntro,
  hoverLink,
  hoverExit,
} from "../Animation";

const ContactMeSection = () => {
  /**contact section */
  let contact = useRef(null);
  let contactInfo = useRef(null);
  let email = useRef(null);

  /**quoteSection */
  let qoute1 = useRef(null);
  let quote2 = useRef(null);
  let exp = useRef(null);
  let projects = useRef(null);
  let blogs = useRef(null);

  useEffect(() => {
    contactIntro(contact);
    contactInfoIntro(contactInfo);
    emailIntro(email);

    quote1Intro(qoute1);
    quote2Intro(quote2);
    detailsIntro(exp, projects, blogs);
  });
  return (
    <div>
      <section className="profile_contact_section">
        <div className="contact_and_qoute">
          <div className="contact">
            <p
              className="contact_text"
              ref={(ele) => {
                contact = ele;
              }}
            >
              - Contact
            </p>
            <p
              className="contact_info"
              ref={(ele) => {
                contactInfo = ele;
              }}
            >
              Any Type of Query & Discussion.
            </p>
            <p
              ref={(ele) => {
                email = ele;
              }}
            >
              <Link
                to="/email"
                className="contact_email"
                onMouseEnter={(e) => hoverLink(e)}
                onMouseLeave={(e) => hoverExit(e)}
              >
                Saurabhbharti9@gmail.com
              </Link>
            </p>
          </div>
          <div className="quote">
            <p
              className="quote_1"
              ref={(ele) => {
                qoute1 = ele;
              }}
            >
              In The End it's You Vs You.
            </p>
            <p
              className="quote_2"
              ref={(ele) => {
                quote2 = ele;
              }}
            >
              Don't be intimidated by success or failure, Instead get up and
              start fullfilling your dreams again.
            </p>
            <div className="experience_projects_blogs">
              <div>
                <div
                  className="large_font_div"
                  ref={(ele) => {
                    exp = ele;
                  }}
                >
                  <span className="exp_number1">3</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="exp_word1">Years of Experience</span>
                </div>
              </div>
              <div>
                <div
                  className="large_font_div"
                  ref={(ele) => {
                    projects = ele;
                  }}
                >
                  <span className="exp_number">3</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="exp_word">Projects</span>
                </div>
              </div>
              <div>
                <div
                  className="large_font_div"
                  ref={(ele) => {
                    blogs = ele;
                  }}
                >
                  <span className="exp_number">3</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="exp_word">Blogs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll_down_arrow">
          <img src={process.env.PUBLIC_URL + "/double-down-96.png"} alt="" />
        </div>
      </section>
    </div>
  );
};
export default ContactMeSection;
