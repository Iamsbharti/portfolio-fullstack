import React from "react";
import "../css/Blogs.css";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";

const Blogs = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(0.5),
      },
    },
  }));
  const classes = useStyles();
  return (
    <>
      <div className="blog__page">
        <p>Blogs...</p>
        <div className="blogs">
          <div className="blog__card">
            <div className="blog__content">
              <div className="blog__content__topic">
                <p>ML</p>
              </div>
              <div className="blog__content__title">
                <p>Demistifying Pi Value</p>
              </div>
              <div className="blog__content__desc">
                <p>
                  Lfhsdjfyuer djhfgsdjhgfgeyr dhfgsdyufyuwetu jhdfgsdjhfysd
                  sdgfte dfsdfgsjhd
                </p>
              </div>
              <div className="blog__content__footer">
                <div className="date">26 April 1995</div>
                <div className={classes.root}>
                  <Chip color="primary" label="ML" size="small" />
                </div>
              </div>
            </div>
            <div className="blog__img">
              <img src={process.env.PUBLIC_URL + "/blog1.jpg"} alt="blogs" />
            </div>
          </div>
          <div className="blog__card">
            <div className="blog__content">
              <div className="blog__content__topic">
                <p>ML</p>
              </div>
              <div className="blog__content__title">
                <p>Demistifying Pi Value</p>
              </div>
              <div className="blog__content__desc">
                <p>
                  Lfhsdjfyuer djhfgsdjhgfgeyr dhfgsdyufyuwetu jhdfgsdjhfysd
                  sdgfte dfsdfgsjhd
                </p>
              </div>
              <div className="blog__content__footer">
                <div className="date">26 April 1995</div>
                <div className={classes.root}>
                  <Chip color="primary" label="ML" size="small" />
                </div>
              </div>
            </div>
            <div className="blog__img">
              <img src={process.env.PUBLIC_URL + "/blog1.jpg"} alt="blogs" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Blogs;
