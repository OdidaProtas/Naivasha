import { Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { LogoComponent } from "../../components";
import { useParams } from "react-router";
import { StateContext } from "../../state";
import useStyles from "./CarDetailsScreen.styles";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";

export default function CarDetailsScreen() {
  const { id }: any = useParams();
  const classes = useStyles();
  const { getAppState }: any = useContext(StateContext);
  const { cars, isLoggedIn } = getAppState();
  const car: any = cars.filter((car: any) => car.id === id)[0];
  const {
    make,
    model,
    showroom,
    image_one,
    image_two,
    image_three,
    image_four,
    image_five,
  } = car;

  return (
    <div>
      <NavbarComponent />
      <Grid container>
        <Grid item xs></Grid>
        <Grid item xs>
          <LogoComponent />
          <div>
            <img className={classes.banner} src={image_one} alt="image one" />
            <div>
              <Typography>Make: {make} </Typography>
              <Typography>Model: {model}</Typography>
              {isLoggedIn ? (
                <>
                  <Typography>Showroom : {showroom}</Typography>
                </>
              ) : null}
              <Typography variant={"caption"}>Additional Images</Typography>
              <br />
              <img className={classes.image} src={image_two} alt="" />
              {isLoggedIn ? (
                <>
                  <img className={classes.image} src={image_three} alt="" />
                  <img className={classes.image} src={image_four} alt="" />
                  <img className={classes.image} src={image_five} alt="" />
                </>
              ) : null}
            </div>
          </div>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </div>
  );
}
