import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../css/Profile.css";
import {
  nameIntro,
  iconIntro,
  navIntro,
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
} from "../Animation";

const IntroSection = () => {
  /**nav items */
  let navItems = useRef(null);
  let navIcon = useRef(null);

  /**name header */
  let fname = useRef(null);

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

  useEffect(() => {
    iconIntro(navIcon);
    navIntro(navItems);

    nameIntro(fname);

    intro(intoduction);
    jobTitleIntro(jobTitle);
    jobDetailsIntro(jobDetails);
    storyIntro(story);

    contactIntro(contact);
    contactInfoIntro(contactInfo);
    emailIntro(email);

    quote1Intro(qoute1);
    quote2Intro(quote2);
    detailsIntro(exp, projects, blogs);

    staggerLinks(link1, link2);

    sliderIntro(sliderText1, sliderText2, sliderText3);
  }, []);
  return (
    <div>
      <main>
        <section className="profile__section">
          <nav>
            <img
              src={process.env.PUBLIC_URL + "/header-icon.png"}
              alt=""
              className="header_icon"
              ref={(el) => {
                navIcon = el;
              }}
            />
            <ul
              className="nav__links"
              ref={(el) => {
                navItems = el;
              }}
            >
              <li>Services</li>
              <li>Works</li>
              <li>Blog</li>
              <li>Contact Me</li>
            </ul>
          </nav>
          <div className="header_introduction">
            <div
              className="intro_name"
              ref={(el) => {
                fname = el;
              }}
            >
              <p>Saurabh </p>
              <p>
                Bharti<span>.</span>
              </p>
              <div className="intro_name_ul"></div>
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
                  ref={(ele) => {
                    link2 = ele;
                  }}
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
                  <p
                    ref={(ele) => {
                      exp = ele;
                    }}
                  >
                    <span>3</span> Years of Experience
                  </p>
                </div>
                <div>
                  <p
                    ref={(ele) => {
                      projects = ele;
                    }}
                  >
                    <span>6</span> Projects
                  </p>
                </div>
                <div>
                  <p
                    ref={(ele) => {
                      blogs = ele;
                    }}
                  >
                    <span>6</span> Blogs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="intro">
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
      <div className="slider"></div>
    </div>
  );
};

export default IntroSection;
