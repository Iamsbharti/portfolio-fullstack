import React, { useEffect, useRef } from "react";
import "../../css/Tech.css";
import { animateWidgetIntro, animateTechnologyIntro } from "../Animation";
const TechStackSection = () => {
  /**widget div */
  let widgetRef = useRef(null);
  let techStackRef = useRef(null);
  let iconsRef = useRef(null);
  useEffect(() => {
    animateWidgetIntro(techStackRef, widgetRef);
    animateTechnologyIntro(techStackRef, iconsRef);
  });
  return (
    <>
      <div
        className="techstack"
        ref={(ele) => {
          techStackRef = ele;
        }}
      >
        <code className="code_tech">- TechStack</code>
        <div
          className="widget__div"
          ref={(ele) => {
            widgetRef = ele;
          }}
        >
          <codersrank-widget
            username="iamsbharti"
            class="my-widget"
            badges="3"
            style={{ width: "440px", marginRight: "23px" }}
          ></codersrank-widget>
        </div>
        <div
          className="technologies"
          ref={(ele) => {
            iconsRef = ele;
          }}
        >
          <div className="techstack__technologies_1">
            <p>
              <img
                src={process.env.PUBLIC_URL + "/icons8-html-5-96.png"}
                className="icon_img_tech"
                title="HTML"
                alt="HTML"
              />
            </p>
            <p>
              <img
                src={process.env.PUBLIC_URL + "/icons8-css3-96.png"}
                className="icon_img_tech"
                title="CSS"
                alt="css"
              />
            </p>
            <p>
              <img
                src={process.env.PUBLIC_URL + "/icons8-javascript-96.png"}
                className="icon_img_tech"
                title="JavaScript"
                alt="js"
              />
            </p>
            <p>
              <img
                src={process.env.PUBLIC_URL + "/icons8-typescript-96.png"}
                className="icon_img_tech"
                title="TypeScript"
                alt="ts"
              />
            </p>
            <p>
              <img
                src={process.env.PUBLIC_URL + "/icons8-node-js-96.png"}
                className="icon_img_tech"
                title="NodeJs"
                alt="node"
              />
            </p>
          </div>
          <div className="techstack__technologies_2">
            <p>
              <img
                src={process.env.PUBLIC_URL + "/reactjs.svg"}
                className="icon_img_tech"
                title="ReactJs"
                alt="react"
              />
            </p>
            <br />
            <p>
              <img
                src={process.env.PUBLIC_URL + "/icons8-angularjs-96.png"}
                className="icon_img_tech"
                title="Angular"
                alt="angular"
              />
            </p>
            <p>
              <img
                src={process.env.PUBLIC_URL + "/icons8-mongodb-96.png"}
                className="icon_img_tech"
                title="MongoDB"
                alt="mongodb"
              />
            </p>
            <p>
              <img
                src={`${process.env.PUBLIC_URL}/Socket-io.svg`}
                className="icon_img_tech"
                title="Socket.io"
                alt="socketio"
              />
            </p>
            <p>
              <img
                src={process.env.PUBLIC_URL + "/redux.svg"}
                className="icon_img_tech"
                title="Redux"
                alt="redux"
              />
            </p>
          </div>
          <div className="techstack__technologies_3">
            <p>
              <img
                src={process.env.PUBLIC_URL + "/webpack.svg"}
                className="icon_img_tech"
                title="Webpack"
                alt="webpack"
              />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default TechStackSection;
