import { Container, Typography } from "@mui/material";
import React from "react";
import useStyles from "./LogoComponent.styles";
import { useHistory } from "react-router";

export default function LogoComponent() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Container>
      <Typography
        onClick={() => history.push("/")}
        className={classes.logo}
        variant="h6"
      >
        Carenthusiastify
      </Typography>
    </Container>
  );
}
