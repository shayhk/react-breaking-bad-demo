import React from "react";
import { Paper, Button } from "@mui/material";

function Item({ name, image }) {
  return (
    <Paper>
      <h2>{name}</h2>
      <p>
        <img src={image}></img>
      </p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

export default Item;
