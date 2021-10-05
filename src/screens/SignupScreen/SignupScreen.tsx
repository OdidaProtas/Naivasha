import { Container, Grid, Typography } from "@mui/material";
import { Suspense, useEffect } from "react";
import { FormComponent, LogoComponent } from "../../components";
import useStyles from "./SignupScreen.styles";
import * as Yup from "yup";
import { useHistory } from "react-router";
import { useAxios } from "../../constants";
import useSnackBar from "../../hooks/useSnackBar";

const fields = [
  { name: "username", type: "text", label: "Username" },
  { name: "password", type: "password", label: "Password" },
  { name: "confirmPassword", type: "password", label: "Confirm Password" },
];

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be a minimum of 8 characters"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password confirmatin is required"),
});

const initialState = {
  username: "",
  password: "",
  confirmPassword: "",
};

const requestOptions: any = {
  endpoint: "/authentication/register/",
  method: "post",
};

export default function SignupScreen() {
  const classes = useStyles();
  const history = useHistory();
  const { loading, processRequest, data }: any = useAxios();
  const { open, toggle, msg, setMsg, severity, setSeverity } = useSnackBar();
  const handleSuccess = () => {};
  const handleError = () => {
    setMsg("An error occured");
    setSeverity("error");
    toggle();
  };
  const handleSubmit = (values: any) => {
    processRequest({
      ...requestOptions,
      payload: values,
      errorHandler: handleError,
      successHandler: handleSuccess,
    });
  };

  useEffect(() => {
    if (data) {
      if (data.username) {
        setMsg("User already exists");
        setSeverity("error");
      } else {
        setSeverity("success");
        setMsg("Registration successful, please login to continue");
      }
      toggle();
      history.push("/login");
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
            Create Account
          </Typography>
          <div className={classes.loginContainer}>
            <Suspense fallback={<div></div>}>
              <FormComponent
                handleSubmit={handleSubmit}
                fields={fields}
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
                onClick={() => history.push("/login")}
                className={classes.footerText}
              >
                Already registered? Sign in
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </Container>
  );
}
