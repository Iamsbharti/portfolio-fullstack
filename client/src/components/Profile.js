import React from "react";

const Profile = () => {
  return (
    <div>
      <main>
        <section>
          <nav>
            <img src={} alt="" className="header_icon" />
            <ul>
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
