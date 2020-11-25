import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  Button,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import FormInput from "./FormInput";

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

const DialogComponent = ({ open, onCloseDialog, mode }) => {
  const classes = useStyles();
  const [openValue, setOpenValue] = useState(open);
  const handleClose = () => {
    setOpenValue(false);
    onCloseDialog(false);
  };
  return (
    <>
      <Dialog
        fullScreen
        open={openValue}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {mode} Project
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              {mode === "Create" ? "Create" : "Save"}
            </Button>
          </Toolbar>
        </AppBar>
        <DialogTitle>Create a new Project</DialogTitle>
        <DialogContent>
          <FormInput postCreateClose={handleClose} />
        </DialogContent>
      </Dialog>
    </>
  );
};
export default DialogComponent;
