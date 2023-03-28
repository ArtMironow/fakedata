import { Slider, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    marginLeft: 10,
  },
}));

const Sliders = ({ value, handleChange }) => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Slider
        sx={{ width: "70%" }}
        onChange={handleChange}
        value={value}
        valueLabelDisplay="auto"
        step={0.25}
        marks
        color="secondary"
        min={0}
        max={10}
      />
      <Typography sx={{ marginBottom: 5 }} variant="h5" color="error">
        {value}
      </Typography>
    </div>
  );
};

export default Sliders;
