import React from "react";
import "../css/Profile.css";
const Profile = () => {
  return (
    <div>
      <main>
        <section className="profile__section">
          <nav>
            <img
              src={process.env.PUBLIC_URL + "/header-icon.png"}
              alt=""
              className="header_icon"
            />
            <ul className="nav__links">
              <li>Services</li>
              <li>Works</li>
              <li>Blog</li>
              <li>Contact Me</li>
            </ul>
          </nav>
          <div className="header_introduction">
            <div className="intro_name">
              <p>Saurabh </p>
              <p>
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
            <div className="quote">In The End it's You Vs You</div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default Profile;
