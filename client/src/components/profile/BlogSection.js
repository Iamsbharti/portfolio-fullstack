import React, { useRef, useEffect } from "react";
import "../../css/Profile.css";
import "../../css/Blogs.css";
import { animateDivOnScrollIntro } from "../Animation";
const BlogSection = ({ scrollTrigger }) => {
  /**Ref init */
  let blog = useRef(null);
  let blogInfo = useRef(null);

  useEffect(() => {
    animateDivOnScrollIntro(scrollTrigger, blog);
    animateDivOnScrollIntro(scrollTrigger, blogInfo);
  });

  return (
    <div className="blog__section">
      <div className="blog__section__content">
        <div className="blog__section__left">
          <p
            className="blog_text"
            ref={(ele) => {
              blog = ele;
            }}
          >
            - Blogs
          </p>
          <p
            className="blog_info"
            ref={(ele) => {
              blogInfo = ele;
            }}
          >
            My Blogs
          </p>
        </div>
        <div className="blog__section__right">
          <div className="blog__section__right__content">
            <p className="blog__title">How I created a full stack Twitter</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogSection;
