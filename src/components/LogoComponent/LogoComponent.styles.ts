import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      fontFamily: "Ephesis",
      textAlign:"center"
    },
    inputContainer:{
      marginBottom: "12px"
    },
    textInput:{
    
    }
  })
);

export default useStyles;
