import React from "react";
import "../../css/Tech.css";
const TechStackSection = () => {
  return (
    <>
      <div className="techstack">
        <code className="code_tech">- TechStack</code>
        <div className="widget__div">
          <codersrank-widget
            username="iamsbharti"
            class="my-widget"
            badges="4"
            style={{ width: "440px", marginRight: "23px" }}
          ></codersrank-widget>
        </div>
        <div className="technologies">
          <div className="techstack__technologies_1">
            <p>
              <img
                src={process.env.PUBLIC_URL + "/icons8-html-5-96.png"}
                className="icon_img_tech"
                title="HTML"
              />
            </p>
            <p>
              <img
                src={process.env.PUBLIC_URL + "/icons8-css3-96.png"}
                className="icon_img_tech"
                title="CSS"
              />
            </p>
            <p>
              <img
                src={process.env.PUBLIC_URL + "/icons8-javascript-96.png"}
                className="icon_img_tech"
                title="JavaScript"
              />
            </p>
            <p>
              <img
                src={process.env.PUBLIC_URL + "/icons8-typescript-96.png"}
                className="icon_img_tech"
                title="TypeScript"
              />
            </p>
            <p>
              <img
                src={process.env.PUBLIC_URL + "/icons8-node-js-96.png"}
                className="icon_img_tech"
                title="NodeJs"
              />
            </p>
          </div>
          <div className="techstack__technologies_2">
            <p>
              <img
                src={process.env.PUBLIC_URL + "/reactjs.svg"}
                className="icon_img_tech"
                title="ReactJs"
              />
            </p>
            <br />
            <p>
              <img
                src={process.env.PUBLIC_URL + "/icons8-angularjs-96.png"}
                className="icon_img_tech"
                title="Angular"
              />
            </p>
            <p>
              <img
                src={process.env.PUBLIC_URL + "/icons8-mongodb-96.png"}
                className="icon_img_tech"
                title="MongoDB"
              />
            </p>
            <p>
              <img
                src={`${process.env.PUBLIC_URL}/Socket-io.svg`}
                className="icon_img_tech"
                title="Socket.io"
              />
            </p>
            <p>
              <img
                src={process.env.PUBLIC_URL + "/redux.svg"}
                className="icon_img_tech"
                title="Redux"
              />
            </p>
          </div>
          <div className="techstack__technologies_3">
            <p>
              <img
                src={process.env.PUBLIC_URL + "/webpack.svg"}
                className="icon_img_tech"
                title="Webpack"
              />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default TechStackSection;
