import { TweenMax, Power3, Power4, TimelineLite } from "gsap";
import gsap from "gsap";
import { text } from "body-parser";

//slider text intro
export const sliderIntro = (el1, el2, el3) => {
  const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
  tl.to([el1, el2, el3], { y: "0%", duration: 1.5, stagger: 0.25 });
};
//slider upward transition
export const sliderDivIntro = (ele) => {
  const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
  tl.to(ele, { y: "-100%", duration: 1.0, delay: 1.6 });
};
//hide the itro text
export const hideIntroDiv = (ele) => {
  const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
  tl.to(ele, { y: "-100%", duration: 1 }, 1.5);
};

//header icon
export const iconIntro = (ele) => {
  gsap.to(ele, {
    xPercent: -20,
    opacity: 3,
    duration: 2,
    scale: 1,
    ease: "power2.inOut",
    delay: 2.5,
  });
};
//nav items
export const navIntro = (ele) => {
  gsap.to(ele, {
    opacity: 3,
    x: 30,
    ease: "back",
    duration: 2,
    delay: 2.8,
  });
};
//Name header
export const nameIntro = (elem) => {
  gsap.from(elem, {
    xPercent: -20,
    yPercent: 20,
    opacity: 0,
    stagger: 0.35,
    duration: 1.5,
    //    scale: -1,
    delay: 3.0,
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
      delay: 3.1,
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
    },
    {
      opacity: 3,
      xPercent: 0,
      duration: 1.1,
      delay: 3.3,
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
    },
    {
      opacity: 3,
      xPercent: 0,
      duration: 1.2,
      delay: 3.4,
      ease: Power3.easeIn,
    }
  );
};
//story
export const storyIntro = (ele) => {
  gsap.fromTo(
    ele,
    {
      opacity: 0,
      xPercent: 35,
    },
    {
      opacity: 3,
      xPercent: 0,
      duration: 1.3,
      delay: 3.5,
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
      xPercent: -30,
      yPercent: 20,
    },
    {
      opacity: 3,
      xPercent: 0,
      yPercent: 0,
      duration: 1.0,
      delay: 3.0,
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
      xPercent: -30,
      yPercent: 20,
    },
    {
      opacity: 3,
      xPercent: 0,
      yPercent: 0,
      duration: 1.2,
      delay: 3.2,
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
      xPercent: -30,
      yPercent: 20,
    },
    {
      opacity: 3,
      xPercent: 0,
      yPercent: 0,
      duration: 1.2,
      delay: 3.4,
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
      delay: 3.0,
      ease: "back",
    }
  );
};
//quote2
export const quote2Intro = (ele) => {
  gsap.fromTo(
    ele,
    {
      opacity: 0,
      xPercent: 30,
    },
    {
      opacity: 3,
      xPercent: 0,
      duration: 1.1,
      delay: 3.2,
      ease: Power3.easeIn,
    }
  );
};
//exp,projects,blogs
export const detailsIntro = (el1, el2, el3) => {
  gsap.fromTo(
    [el1, el2, el3],
    {
      opacity: 0,
      xPercent: 30,
    },
    {
      opacity: 3,
      xPercent: 0,
      duration: 1.2,
      delay: 3.5,
      ease: Power3.easeIn,
    }
  );
};
//Stagger links
export const staggerLinks = (elem1, elem2) => {
  gsap.from([elem1, elem2], {
    duration: 0.8,
    y: 100,
    delay: 0.1,
    ease: "power4.inOut",
    stagger: {
      amount: 0.3,
    },
  });
};

// Hover on the link
export const hoverLink = (e) => {
  gsap.to(e.target, {
    duration: 0.8,
    y: 3,
    skewX: 4,
    ease: "power2.inOut",
  });
};

// Hover away from the link
export const hoverExit = (e) => {
  gsap.to(e.target, {
    duration: 0.8,
    y: -3,
    skewX: 0,
    ease: "power2.inOut",
  });
};
