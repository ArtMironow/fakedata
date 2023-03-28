import { Button, InputAdornment, TextField } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  root: {},
  button: {
    marginTop: 8,
    height: 55,
    marginLeft: 2,
  },
}));

const Input = ({ input, setInput, handleInput }) => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <TextField
        label="Enter"
        id="outlined-start-adornment"
        name="number"
        type="number"
        autoComplete="number"
        color="secondary"
        required
        sx={{ m: 1, width: "70%" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">Enter the seed</InputAdornment>
          ),
        }}
        value={input}
        onInput={(e) => setInput(e.target.value)}
      />
      <Button
        onClick={handleInput}
        className={classes.button}
        variant="contained"
        color="secondary"
      >
        Generate
      </Button>
    </div>
  );
};

export default Input;
