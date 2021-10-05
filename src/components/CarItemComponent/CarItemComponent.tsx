import { Divider, Typography } from "@mui/material";
import React from "react";
import useStyles from "./CarItemComponent.styles";
import { useHistory } from "react-router-dom";

interface CarItemComponentInterface {
  car: any;
}

export default function CarItemComponent({ car }: CarItemComponentInterface) {
  const { image_one, make, model, id } = car;
  const classes = useStyles();
  const history = useHistory();
  return (
    <div onClick={() => history.push(`/car/${id}`)} className={classes.root}>
      <img className={classes.image} src={image_one} alt={`${make}-${model}`} />
      <div className={classes.footer}>
        <Typography>Make : {make}</Typography>
        <Typography>Model {model}</Typography>
        <button className={classes.button}>View Car</button>
        <Divider />
      </div>
    </div>
  );
}
