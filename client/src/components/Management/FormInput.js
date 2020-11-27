import React, { useState } from "react";
import {
  TextField,
  withStyles,
  Dialog,
  DialogTitle,
  DialogContent,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  Button,
  makeStyles,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
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
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const FormDialog = ({ open, onCloseDialog, mode, projectToEdit, classes }) => {
  const diaLogClasses = useStyles();
  const [openValue, setOpenValue] = useState(open);
  const handleClose = () => {
    setOpenValue(false);
    onCloseDialog(false);
  };
  const [name, setName] = useState(mode ? projectToEdit.name : "");
  const [description, setDesc] = useState(
    mode ? projectToEdit.description : ""
  );
  const [type, setType] = useState(
    mode ? projectToEdit.type : projectFilterCategory
  );
  const [techstack, setTechStack] = useState(
    mode ? projectToEdit.techstack : projectFilterCategory
  );
  const [demo, setDemo] = useState(mode ? projectToEdit.demo : "");
  const [code, setCode] = useState(mode ? projectToEdit.code : "");
  const [file, setFile] = useState();

  return (
    <>
      <Dialog
        fullScreen
        open={openValue}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={diaLogClasses.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={diaLogClasses.title}>
              {mode} Project
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              {mode ? "Save" : "Create"}
            </Button>
          </Toolbar>
        </AppBar>
        <DialogTitle>Create a new Project</DialogTitle>
        <DialogContent>
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
              <div className="form__content__right">
                <div className="techstack__chips">
                  <ChipComponent
                    chips={projectFilterCategory}
                    type="Techstack"
                  />
                </div>
                <Divider />
                <div className="type__chips">
                  <ChipComponent
                    chips={projectFilterCategory}
                    type="ProjectType"
                  />
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
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
