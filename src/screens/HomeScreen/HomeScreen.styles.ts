import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      textAlign: "center",
    },
    logoContainer: {
      padding: "23px",
      display: "flex",
      justifyContent: "center",
      marginTop: "36px",
    },
    loginContainer: {
      marginTop: "36px",
    },
    footer: {
      textAlign: "center",
      margin: "14px",
    },
    footerText: {
      cursor: "pointer",
    },
  })
);

export default useStyles;
