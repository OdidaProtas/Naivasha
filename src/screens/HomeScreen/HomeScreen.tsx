import { Grid } from "@mui/material";
import { useContext, useEffect } from "react";
import { LogoComponent } from "../../components";
import CarsListComponent from "../../components/CarsListComponent/CarsListComponent";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import { useAxios } from "../../constants";
import { StateContext } from "../../state";
import { useHistory } from "react-router";

export default function Home() {
  const history = useHistory();
  const { getAppState }: any = useContext(StateContext);
  const { cars, loading } = getAppState();
  const carsAvailable = cars.length > 0;

  return (
    <div>
      <NavbarComponent />
      <Grid container>
        <Grid item xs></Grid>
        <Grid item xs>
          <LogoComponent />
          {loading ? (
            <p>Fetching cars...</p>
          ) : (
            <div>
              {carsAvailable ? (
                <CarsListComponent />
              ) : (
                <div>
                  <p>No cars to have been added</p>
                  <button onClick={() => history.push("/new")}>
                    Add new entry
                  </button>
                </div>
              )}
            </div>
          )}
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </div>
  );
}
