import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      maxWidth: "100%",
    },
    footer: {
      padding: "12px",
    },
    root: {
      cursor: "pointer",
      marginBottom: "18px",
    },
    button: {
      marginTop: "12px",
      marginBottom: "16px",
    },
  })
);

export default useStyles;
