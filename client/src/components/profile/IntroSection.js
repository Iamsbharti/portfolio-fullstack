import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../css/Profile.css";
import NavBar from "./NavBar";
import ContactMeSection from "./ContactMeSection";
import {
  nameIntro,
  intro,
  jobTitleIntro,
  jobDetailsIntro,
  storyIntro,
  contactIntro,
  contactInfoIntro,
  emailIntro,
  quote1Intro,
  quote2Intro,
  detailsIntro,
  hoverLink,
  hoverExit,
  staggerLinks,
  sliderIntro,
  sliderDivIntro,
  hideIntroDiv,
  nameUlScale,
} from "../Animation";

const IntroSection = () => {
  /**name header */
  let fname = useRef(null);
  let ulDiv = useRef(null);

  /**job details section */
  let intoduction = useRef(null);
  let jobTitle = useRef(null);
  let jobDetails = useRef(null);
  let story = useRef(null);

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

  let link1 = useRef(null);
  let link2 = useRef(null);

  /**slider intro */
  let sliderText1 = useRef(null);
  let sliderText2 = useRef(null);
  let sliderText3 = useRef(null);

  /**slider */
  let sliderDiv = useRef(null);
  let introDiv = useRef(null);

  useEffect(() => {
    sliderDivIntro(sliderDiv);
    hideIntroDiv(introDiv);

    nameIntro(fname);
    nameUlScale(ulDiv);

    intro(intoduction);
    jobTitleIntro(jobTitle);
    jobDetailsIntro(jobDetails);
    storyIntro(story);

    sliderIntro(sliderText1, sliderText2, sliderText3);
  }, []);
  return (
    <div>
      <main>
        <section className="profile__section">
          {/**nav bar */}
          <NavBar />
          <div className="header_introduction">
            <div
              className="intro_name"
              ref={(el) => {
                fname = el;
              }}
            >
              <p className="responsive_name">Saurabh Bharti.</p>
              <p className="fname">Saurabh </p>
              <p className="lname">
                Bharti<span>.</span>
              </p>
              <div
                className="intro_name_ul"
                ref={(ele) => {
                  ulDiv = ele;
                }}
              ></div>
            </div>
            <div className="intro_details">
              <p
                className="intro_text"
                ref={(ele) => {
                  intoduction = ele;
                }}
              >
                - Introduction
              </p>
              <div>
                <p
                  className="intro_job_title"
                  ref={(ele) => {
                    jobTitle = ele;
                  }}
                >
                  Consultant and Full Stack Developer ,Based In India
                </p>
              </div>
              <p
                className="intro_job_details"
                ref={(ele) => {
                  jobDetails = ele;
                }}
              >
                Security Consultant, building FullStack applications
              </p>
              <p
                className="intro_story"
                ref={(ele) => {
                  story = ele;
                }}
              >
                <Link
                  to="/story"
                  onMouseEnter={(e) => hoverLink(e)}
                  onMouseLeave={(e) => hoverExit(e)}
                  ref={(ele) => {
                    link1 = ele;
                  }}
                >
                  My Story
                </Link>
              </p>
            </div>
          </div>
        </section>
        {/**contact section */}
        <ContactMeSection />
        <section className="sec2">projects</section>
        <section className="sec2">Blogs</section>
        <section className="sec2">contacts</section>
      </main>
      <div
        className="intro"
        ref={(ele) => {
          introDiv = ele;
        }}
      >
        <div className="intro-text">
          <h1 className="hide">
            <span
              className="text"
              ref={(ele) => {
                sliderText1 = ele;
              }}
            >
              I am Saurabh Bharti
            </span>
          </h1>
          <h1 className="hide">
            <span
              className="text"
              ref={(ele) => {
                sliderText2 = ele;
              }}
            >
              Implementing
            </span>
          </h1>
          <h1 className="hide">
            <span
              className="text"
              ref={(ele) => {
                sliderText3 = ele;
              }}
            >
              Ideas.
            </span>
          </h1>
        </div>
      </div>
      <div
        className="slider"
        ref={(ele) => {
          sliderDiv = ele;
        }}
      ></div>
      {/**mobile version */}
      {/**burger menu */}
    </div>
  );
};

export default IntroSection;
