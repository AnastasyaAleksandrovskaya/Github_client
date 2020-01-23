import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    loginDiv: {
        backgroundColor: "#FFE4E1",
        height: "calc(90vh - 64px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw"
    },
    card: {
        backgroundColor: "#FFF5EE",
        display: "flex",
        // flexDirection: "column",
        // alignItems: "center"
    },
    media: {
        margin: 16,
        width: 150,
        height: 150
    },
    cardContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "left"
    }
});

export default useStyles;
