import { Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { useContext, useEffect } from "react";
import { LogoComponent } from "../../components";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import { useAxios } from "../../constants";
import { StateContext } from "../../state";
import { useHistory } from "react-router";

const requestOptions: any = {
  method: "get",
  endpoint: "/users",
};

export default function UsersScreen() {
  const { processRequest, data }: any = useAxios();
  const { getAppState, updateUsers }: any = useContext(StateContext);
  const { users } = getAppState();
  const history = useHistory();
  useEffect(() => {
    processRequest({
      ...requestOptions,
    });
  }, []);

  useEffect(() => {
    if (data) {
      updateUsers(data);
    }
  }, [data]);

  const me = localStorage.getItem("username");

  return (
    <div>
      <NavbarComponent />
      <Grid container>
        <Grid item xs></Grid>
        <Grid item xs>
          <LogoComponent />
          <Box sx={styles["header"]}>Community</Box>
          <button onClick={() => history.push(`/chat`)}>Chat</button>
          {data ? (
            <div>
              {data.map((user: any, idx: number) => {
                return (
                  <Box key={idx} sx={styles["listItem"]}>
                    <p>{user.username}</p>
                    {user.username === me ? (
                      <Typography variant="caption">(me)</Typography>
                    ) : null}
                    <Divider />
                  </Box>
                );
              })}
            </div>
          ) : (
            <p>No users found</p>
          )}
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </div>
  );
}

const styles = {
  header: {
    marginTop: "36px",
  },
  listItem: {
    marinTop: "9px",
    marginBottom: "9px",
    cursor: "pointer",
  },
};
