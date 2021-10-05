import { Container, Grid, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { FormComponent, LogoComponent } from "../../components";
import useStyles from "./CarFormScreen.styles";
import * as Yup from "yup";
import { urlPattern, useAxios } from "../../constants";
import useSnackBar from "../../hooks/useSnackBar";
import { useHistory } from "react-router-dom";
import { StateContext } from "../../state";

const fields: any = [
  { name: "make", type: "text", label: "Car Make" },
  { name: "model", type: "text", label: "Car Model" },
  { name: "showroom", type: "text", label: "Showroom" },
  { name: "image_one", type: "text", label: "Image one link" },
  { name: "image_two", type: "text", label: "Image two link" },
  { name: "image_three", type: "text", label: "Image three link" },
  { name: "image_four", type: "text", label: "Image four link" },
  { name: "image_five", type: "text", label: "Image five link" },
];

const urlVlalidation = Yup.string()
  .matches(urlPattern, "Enter a valid url")
  .required("Image link is required");

const validationSchema: any = Yup.object().shape({
  make: Yup.string().required("Car Make is required"),
  model: Yup.string().required("Car Model is required"),
  showroom: Yup.string().required("Car Model is required"),
  image_one: urlVlalidation,
  image_two: urlVlalidation,
  image_three: urlVlalidation,
  image_four: urlVlalidation,
  image_five: urlVlalidation,
});

const initialSttate: any = {
  make: "",
  model: "",
  showroom: "",
  image_one: "",
  image_two: "",
  image_three: "",
  image_four: "",
  image_five: "",
};

const requestOptions: any = {
  endpoint: "/vi/car/",
  method: "post",
};

export default function CarFormScreen() {
  const classes = useStyles();
  const history = useHistory();
  const { open, toggle, msg, setMsg, severity, setSeverity } = useSnackBar();
  const { loading, processRequest, data }: any = useAxios();

  const { addCar }: any = useContext(StateContext);

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
      addCar(data);
      history.push(`/car/${data.id}`);
    }
  }, [data]);

  return (
    <Container>
      <div>
        <Grid container>
          <Grid item xs></Grid>
          <Grid item xs>
            <LogoComponent />
            <div className={classes.formContainer}>
              <Typography className={classes.title} variant="h6">
                Add a new entry
              </Typography>
              <div>
                <FormComponent
                  handleSubmit={handleSubmit}
                  fields={fields}
                  validationShema={validationSchema}
                  initialState={initialSttate}
                  snackBarOptions={{
                    open: open,
                    handleClose: toggle,
                    message: msg,
                    severity: severity,
                  }}
                  loading={loading}
                />
              </div>
            </div>
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </div>
    </Container>
  );
}
