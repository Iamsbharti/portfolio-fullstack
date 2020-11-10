import React, { useRef, useEffect } from "react";
import "../../css/Profile.css";
import "../../css/Blogs.css";
import { animateDivOnScrollIntro } from "../Animation";
const BlogSection = () => {
  /**Ref init */
  let blogLeft = useRef(null);
  let blogRight = useRef(null);
  let blog = useRef(null);

  useEffect(() => {
    animateDivOnScrollIntro(blog, blogLeft, "left");
    animateDivOnScrollIntro(blog, blogRight, "right");
  });

  return (
    <div
      className="blog__section"
      ref={(ele) => {
        blog = ele;
      }}
    >
      <div className="blog__section__content">
        <div
          className="blog__section__left"
          ref={(ele) => {
            blogLeft = ele;
          }}
        >
          <p className="blog_text">- Blogs</p>
          <p className="blog_info">My Blogs</p>
        </div>
        <div
          className="blog__section__right"
          ref={(ele) => {
            blogRight = ele;
          }}
        >
          <div className="blog__section__right__content">
            <p className="blog__title">How I created a full stack Twitter</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogSection;
