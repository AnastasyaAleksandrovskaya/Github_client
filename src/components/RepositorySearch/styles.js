import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
    },
    cards: {
        display: "flex",
        maxWidth: "fix-content",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    content: {
        width: "100%"
    },
    title: {
        margin: theme.spacing(1, 0, 2),
    },
    elementList: {
        margin: "10px 0",
        width: "100%"
    },
    searchButton: {
        margin: theme.spacing(1, 14, 2),
        // backgroundColor: "#696969"
    }
}));

export default useStyles;
