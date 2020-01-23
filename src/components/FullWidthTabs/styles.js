import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "#FFE4E1",
        height: "100%",
        padding: "0px",
        minWidth: "30vw"
    },
    panel: {
        display: "flex",
        justifyContent: "center",
        height:"100%"
    },
    wrapper: {
        maxWidth: "fit-content",
        display: "flex",
        justifyContent: "center",
        width: "100vw"
    }
}));

export default useStyles;
