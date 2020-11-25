import React, { Fragment, useState } from "react";
import { TextField, Button, withStyles } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { connect } from "react-redux";
import { projectFilterCategory } from "../../redux/defaultStore";
import ChipComponent from "./ChipComponent";
import Divider from "@material-ui/core/Divider";
const styles = (theme) => ({
  FormControl: {
    width: 600,
    margin: 20,
  },
});

const FormDialog = ({ projectToEdit, mode, classes }) => {
  const [name, setName] = useState(mode ? projectToEdit.name : "");
  const [description, setDesc] = useState(
    mode ? projectToEdit.description : ""
  );
  const [type, setType] = useState(mode ? projectToEdit.type : "");
  const [techstack, setTechStack] = useState(
    mode ? projectToEdit.techstack : ""
  );
  const [demo, setDemo] = useState(mode ? projectToEdit.demo : "");
  const [code, setCode] = useState(mode ? projectToEdit.code : "");
  const [file, setFile] = useState();

  return (
    <>
      <div className="input__form">
        <p>Edit/Add Project</p>
        <div className="form__card">
          <div className="form__content__left">
            <TextField
              className={classes.FormControl}
              autoFocus
              name="name"
              label="Project Name"
              margin="dense"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <TextField
              className={classes.FormControl}
              autoFocus
              name="description"
              label="Description"
              margin="dense"
              value={description}
              rowsMax={4}
              onChange={(e) => setDesc(e.target.value)}
            />

            <div className="upload_cover">
              <label htmlFor="file-upload" className="custom-file-upload">
                <p>Upload Picture</p>
                <CloudUploadIcon title="Upload Attachment" />
              </label>
              <input id="file-upload" type="file" name="attachment" />
            </div>
            <TextField
              className={classes.FormControl}
              autoFocus
              name="code"
              placeholder="Code Repo link"
              label="Project Code Repo Link"
              margin="dense"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
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
              value={demo}
              onChange={(e) => setDemo(e.target.value)}
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
