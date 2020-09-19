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
              <span>Saurabh Bharti</span>
            </div>
            <div className="intro_details">
              <span className="into_text">Introduction</span>
              <span className="into_job_title">Consultant, Based In India</span>
              <span className="into_job_details">
                Security Consultant, building FullStack applications
              </span>
              <span className="into_story">
                <a href="#">My Story</a>
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default Profile;
