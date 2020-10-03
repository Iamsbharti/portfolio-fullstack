import React from "react";
import IntroSection from "./IntroSection";
import ProjectSection from "./ProjectSection";
import ContactMeSection from "./ContactMeSection";
import TechStackSection from "./TechStackSection";
const Profile = () => {
  return (
    <div>
      <IntroSection />
      <ProjectSection />
      <TechStackSection />
      <ContactMeSection />
    </div>
  );
};
export default Profile;
