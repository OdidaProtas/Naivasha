import { Container, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { StateContext } from "../../state";
import useStyles from "./LoginScreen.styles";

export default function LoginScreen() {
  const classes = useStyles();
  const { signIn }: any = useContext(StateContext);
  return (
    <Container>
      <Grid container>
        <Grid item xs={3}></Grid>
        <Grid item xs>
          <Typography className={classes.title} variant="h6">
            Create Account
          </Typography>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </Container>
  );
}
