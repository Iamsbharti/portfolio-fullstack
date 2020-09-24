import { TweenMax, Power3, Power4, TimelineLite } from "gsap";
import gsap from "gsap";

//header icon
export const iconIntro = (ele) => {
  gsap.to(ele, {
    xPercent: -20,
    opacity: 3,
    duration: 2,
    scale: 1,
    ease: "power2.inOut",
  });
};
//nav items
export const navIntro = (ele) => {
  gsap.to(ele, {
    opacity: 3,
    x: 30,
    ease: "back",
    duration: 2,
  });
};
//Name header
export const nameIntro = (elem) => {
  gsap.from(elem, {
    xPercent: -20,
    opacity: 0,
    stagger: 0.2,
    duration: 2,
    scale: -1,
    ease: "back",
  });
};

//intoduction
export const intro = (ele) => {
  gsap.fromTo(
    ele,
    {
      opacity: 0,
      xPercent: 30,
    },
    {
      opacity: 3,
      xPercent: 0,
      duration: 0.9,
      ease: "back",
    }
  );
};
//jobTitle,jobdetails
export const jobTitleIntro = (ele) => {
  gsap.fromTo(
    ele,
    {
      opacity: 0,
      xPercent: 30,
      delay: 1,
    },
    {
      opacity: 3,
      xPercent: 0,
      duration: 1.1,
      ease: Power3.easeInOut,
    }
  );
};
export const jobDetailsIntro = (ele) => {
  gsap.fromTo(
    ele,
    {
      opacity: 0,
      xPercent: 30,
      delay: 2,
    },
    {
      opacity: 3,
      xPercent: 0,
      duration: 1.2,
      ease: Power3.easeIn,
    }
  );
};
//story
export const storyIntro = (ele) => {
  gsap.fromTo(
    ele,
    { opacity: 0, xPercent: 35, delay: 3 },
    {
      opacity: 3,
      xPercent: 0,
      duration: 1.3,
      ease: Power3.easeIn,
    }
  );
};
//contact
export const contactIntro = (ele) => {
  gsap.fromTo(
    ele,
    {
      opacity: 0,
      xPercent: 30,
      yPercent: 50,
    },
    {
      opacity: 3,
      xPercent: 0,
      yPercent: 0,
      duration: 0.9,
      ease: "back",
    }
  );
};
//contact_info
export const contactInfoIntro = (ele) => {
  gsap.fromTo(
    ele,
    {
      opacity: 0,
      xPercent: 30,
      delay: 1,
    },
    {
      opacity: 3,
      xPercent: 0,
      duration: 1.1,
      ease: Power3.easeInOut,
    }
  );
};
//email
export const emailIntro = (ele) => {
  gsap.fromTo(
    ele,
    {
      opacity: 0,
      xPercent: 30,
      delay: 2,
    },
    {
      opacity: 3,
      xPercent: 0,
      duration: 1.2,
      ease: Power3.easeInOut,
    }
  );
};
//quote1
export const quote1Intro = (ele) => {
  gsap.fromTo(
    ele,
    {
      opacity: 0,
      xPercent: 30,
    },
    {
      opacity: 3,
      xPercent: 0,
      duration: 1,
      ease: "back",
    }
  );
};
//quote2
export const quote2Intro = (ele) => {
  gsap.fromTo(
    ele,
    { opacity: 0, xPercent: 30, delay: 1 },
    { opacity: 3, xPercent: 0, duration: 1.2, ease: Power3.easeIn }
  );
};
//exp,projects,blogs
export const detailsIntro = (el1, el2, el3) => {
  gsap.fromTo(
    [el1, el2, el3],
    {
      opacity: 0,
      xPercent: -30,
      delay: 2,
    },
    {
      opacity: 3,
      xPercent: 0,
      duration: 1.3,
      ease: Power3.easeIn,
    }
  );
};
