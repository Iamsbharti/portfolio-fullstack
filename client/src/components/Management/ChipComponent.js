import React, { useEffect, useState } from "react";
import { InputLabel, Paper, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ChipInput from "material-ui-chip-input";
const ChipComponent = ({ chips, type, updateChipContent }) => {
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

  const updateChip = () => {
    updateChipContent();
  };
  const [chipValues, setChipValues] = useState();

  useEffect(() => {
    setChipValues(chips.map((chip) => chip.name));
  }, [chips]);
  return (
    <>
      <InputLabel htmlFor={type}>{type}</InputLabel>
      <paper className={chipClasses.root}>
        <ChipInput
          value={chipValues}
          onAdd={(chip) => updateChip(chip, "add")}
          onDelete={(chip, index) => updateChip(chip, "delete")}
          placeholder="Type a name  hit enter"
        />
      </paper>
    </>
  );
};
export default ChipComponent;
