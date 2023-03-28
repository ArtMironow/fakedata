import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import { buttons } from "../../constant/buttons";

const Buttons = ({ toggleLanguages }) => {
  return (
    <React.Fragment>
      <ButtonGroup
        sx={{ marginBottom: 2 }}
        variant="contained"
        color="secondary"
        aria-label="outlined primary button group"
      >
        {buttons.map((button, index) => (
          <Button
            onClick={() => toggleLanguages(button.string)}
            key={`${button.name}__${index}`}
          >
            {button.name}
          </Button>
        ))}
      </ButtonGroup>
    </React.Fragment>
  );
};

export default Buttons;
