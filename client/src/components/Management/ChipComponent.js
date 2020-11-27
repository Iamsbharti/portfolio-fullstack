import React from "react";
import { InputLabel, Paper, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
const ChipComponent = ({ chips, type }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      listStyle: "none",
      padding: theme.spacing(0.5),
      margin: 0,
    },
    chip: {
      margin: theme.spacing(0.5),
      backgroundColor: "white",
      color: "black",
    },
  }));
  const chipClasses = useStyles();
  const handleDelete = (filter) => {
    console.log("Delete:", filter);
  };
  return (
    <>
      <InputLabel htmlFor={type}>{type}</InputLabel>
      <Paper component="ul" className={chipClasses.root}>
        {chips.map((filter, index) => {
          return (
            <li key={index}>
              <Chip
                label={filter.name}
                onDelete={() => handleDelete(filter)}
                className={chipClasses.chip}
              />
            </li>
          );
        })}
      </Paper>
    </>
  );
};
export default ChipComponent;
