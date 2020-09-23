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
      ease: Power3.easeIn,
    }
  );
};
//jobTitle,jobdetails
export const jobInto = (ele) => {};
//story
export const storyIntro = (ele) => {};
