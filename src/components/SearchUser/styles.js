import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: "100%",
        display: "flex"
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
    },
    search: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
}));

export default useStyles;
