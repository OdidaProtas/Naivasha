import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    header: {
      textAlign: "center",
      marginTop: "36px",
      marginBottom: "18px",
    },
  })
);

export default useStyles;
