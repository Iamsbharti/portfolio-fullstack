import React, { useEffect, useRef } from "react";
import "../../css/Profile.css";
import {
  nameIntro,
  iconIntro,
  navIntro,
  intro,
  jobTitleIntro,
  jobDetailsIntro,
  storyIntro,
} from "../Animation";
const IntroSection = () => {
  let navItems = useRef(null);
  let navIcon = useRef(null);
  let fname = useRef(null);
  let intoduction = useRef(null);
  let jobTitle = useRef(null);
  let jobDetails = useRef(null);
  let story = useRef(null);
  useEffect(() => {
    iconIntro(navIcon);
    navIntro(navItems);
    nameIntro(fname);
    intro(intoduction);
    jobTitleIntro(jobTitle);
    jobDetailsIntro(jobDetails);

    storyIntro(story);
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
                <a href="#">My Story</a>
              </p>
            </div>
          </div>
        </section>
        <section className="profile_contact_section">
          <div className="contact_and_qoute">
            <div className="contact">
              <p className="contact_text">- Contact</p>
              <p className="contact_info">Any Type of Query & Discussion.</p>
              <a href="#" className="contact_email">
                Saurabhbharti9@gmail.com
              </a>
            </div>
            <div className="quote">
              <p className="quote_1">In The End it's You Vs You.</p>
              <p className="quote_2">
                Don't be intimidated by success or failure, Instead get up and
                start fullfilling your dreams again.
              </p>
              <div className="experience_projects_blogs">
                <div>
                  <p>
                    <span>3</span> Years of Experience
                  </p>
                </div>
                <div>
                  <p>
                    <span>6</span> Projects
                  </p>
                </div>
                <div>
                  <p>
                    <span>6</span> Blogs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default IntroSection;
