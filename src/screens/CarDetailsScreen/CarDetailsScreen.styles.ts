import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    banner: {
      maxWidth: "100%",
      marginTop:"48px"
    },
    image:{
        width:"50%",
        marginTop:"18px"
    }
  })
);

export default useStyles;
