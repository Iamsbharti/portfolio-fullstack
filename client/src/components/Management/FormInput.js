import React, { Fragment, useState } from "react";
import { TextField, Button, withStyles } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { connect } from "react-redux";
import { projectFilterCategory } from "../../redux/defaultStore";
import ChipComponent from "./ChipComponent";
import Divider from "@material-ui/core/Divider";
const styles = (theme) => ({
  FormControl: {
    width: 300,
    marginTop: 10,
  },
});

const FormDialog = ({ projectToEdit, mode, classes }) => {
  const {
    title,
    description,
    projectId,
    name,
    type,
    techstack,
    demo,
    code,
    userId,
    image,
  } = projectToEdit;
  return (
    <>
      <div className="input__form">
        <p>Edit/Add Project</p>
        <div className="form__card">
          <div className="form__content__left">
            <TextField
              className={classes.FormControl}
              autoFocus
              name="title"
              placeholder="project title"
              label="Project Title"
              margin="dense"
              value={}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Divider />
            <TextField
              className={classes.FormControl}
              autoFocus
              name="description"
              placeholder="description"
              label="Description"
              margin="dense"
              value={}
              rowsMax={4}
              onChange={(e) => setDesc(e.target.value)}
            />
            <Divider />
            <div class="upload_cover">
              <label HtmlFor="file-upload" class="custom-file-upload">
                <CloudUploadIcon title="Upload Attachment" />
              </label>
              <input id="file-upload" type="file" name="attachment" />
            </div>
          </div>
          <div className="form__content__right">
            <div className="techstack__chips">
              <ChipComponent chips={projectFilterCategory} type="Techstack" />
            </div>
            <Divider />
            <div className="type__chips">
              <ChipComponent chips={projectFilterCategory} type="ProjectType" />
            </div>
            <Divider />
            <TextField
              className={classes.FormControl}
              autoFocus
              name="demo"
              placeholder="demo link"
              label="Project Demo Link"
              margin="dense"
              value={}
              onChange={(e) => setDemo(e.target.value)}
            />
            <Divider />
            <TextField
              className={classes.FormControl}
              autoFocus
              name="code"
              placeholder="Code Repo link"
              label="Project Code Repo Link"
              margin="dense"
              value={}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return state;
};
const mapActionToProps = {};
export default connect(
  mapStateToProps,
  mapActionToProps
)(withStyles(styles)(FormDialog));
