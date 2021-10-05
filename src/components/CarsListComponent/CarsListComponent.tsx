import React, { useContext } from "react";
import { StateContext } from "../../state";
import CarItemComponent from "../CarItemComponent/CarItemComponent";
import useStyles from "./CarListComponent.styles";

export default function CarsListComponent() {
  const { getAppState }: any = useContext(StateContext);
  const { cars } = getAppState();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>All Cars ({cars.length})</div>
      <div>
        {cars.map((car: any, index: number) => {
          return <CarItemComponent car={car} key={index} />;
        })}
      </div>
    </div>
  );
}
