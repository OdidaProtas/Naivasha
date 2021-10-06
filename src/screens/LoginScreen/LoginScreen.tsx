import { Container, Grid, Typography } from "@mui/material";
import React, { Suspense, useContext, useEffect } from "react";
import { FormComponent, LogoComponent } from "../../components";
import { StateContext } from "../../state";
import useStyles from "./LoginScreen.styles";
import * as Yup from "yup";
import { useHistory } from "react-router";
import { useAxios } from "../../constants";
import useSnackBar from "../../hooks/useSnackBar";

import { client_secret, client_id } from "../../constants/authKeys";

const fields = [
  { name: "username", type: "text", label: "Username" },
  { name: "password", type: "password", label: "Password" },
];

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const initialState = {
  username: "",
  password: "",
};

const requestOptions: any = {
  endpoint: "/authentication/token/",
  method: "post",
};

export default function LoginScreen() {
  const classes = useStyles();
  const history = useHistory();
  const { signIn }: any = useContext(StateContext);
  const { open, toggle, msg, setMsg, severity, setSeverity } = useSnackBar();
  const { processRequest, loading, data }: any = useAxios();
  const handleSuccess = () => {};
  const handleError = () => {
    setMsg("An error occured");
    setSeverity("error");
    toggle();
  };
  const handleSubmit = (values: any) => {
    const payload = { ...values, client_secret, client_id };
    localStorage.setItem("username", values.username);
    processRequest({
      ...requestOptions,
      payload: payload,
      errorHandler: handleError,
      successHandler: handleSuccess,
    });
  };

  useEffect(() => {
    if (data) {
      if (data.access_token) {
        signIn(data.access_token);
        setSeverity("success");
        setMsg("Login successful");
        toggle();
        history.push("/");
      } else {
        handleError();
      }
    }
  }, [data]);

  return (
    <Container>
      <Grid container>
        <Grid item xs></Grid>
        <Grid item xs>
          <div className={classes.logoContainer}>
            <Suspense fallback={<div></div>}>
              <LogoComponent />
            </Suspense>
          </div>
          <Typography className={classes.title} variant="h6">
            Sign In
          </Typography>
          <div className={classes.loginContainer}>
            <Suspense fallback={<div></div>}>
              <FormComponent
                fields={fields}
                handleSubmit={handleSubmit}
                validationShema={validationSchema}
                initialState={initialState}
                loading={loading}
                snackBarOptions={{
                  open: open,
                  handleClose: toggle,
                  message: msg,
                  severity: severity,
                }}
              />
            </Suspense>
            <div className={classes.footer}>
              <Typography
                onClick={() => history.push("/signup")}
                className={classes.footerText}
              >
                Dont have an account? Register
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </Container>
  );
}
