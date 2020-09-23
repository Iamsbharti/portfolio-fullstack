import React, { useEffect, useRef } from "react";
import "../../css/Profile.css";
import { TweenMax, Power3, Power4 } from "gsap";
const IntroSection = () => {
  let navItems = useRef(null);
  let navIcon = useRef(null);
  let fname = useRef(null);
  let lname = useRef(null);
  useEffect(() => {
    TweenMax.to(navItems, 0.9, {
      opacity: 3,
      x: 30,
      ease: Power4.easeInOut,
    });
    TweenMax.to(navIcon, 0.9, {
      opacity: 3,
      y: -7,
      x: 3,
      ease: Power4.easeInOut,
      duration: 6,
    });
    TweenMax.to(fname, 0.9, {
      opacity: 3,
      // y: -30,
      ease: Power4.easeInOut,
    });
    TweenMax.to(lname, 0.9, {
      opacity: 3,
      // y: -30,
      ease: lname.easeInOut,
    });
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
            <div className="intro_name">
              <p
                className="f_name"
                ref={(el) => {
                  fname = el;
                }}
              >
                Saurabh{" "}
              </p>
              <p
                className="l_name"
                ref={(el) => {
                  lname = el;
                }}
              >
                Bharti<span>.</span>
              </p>
              <div className="intro_name_ul"></div>
            </div>
            <div className="intro_details">
              <p className="intro_text">- Introduction</p>
              <div>
                <span className="intro_job_title">
                  Consultant and Full Stack Developer ,Based In India
                </span>
              </div>
              <p className="intro_job_details">
                Security Consultant, building FullStack applications
              </p>
              <p className="intro_story">
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
