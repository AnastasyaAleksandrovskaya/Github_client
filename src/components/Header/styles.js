import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        lineHeight: "initial",
        marginLeft: "20px"
    },
    appBar: {
        background: "#696969",
    },
    avatar: {
        margin: 10,
    },
    link: {
        margin: theme.spacing(1),
    },
    navigationButton: {
        color: "white",
        textDecoration: "none"
    },
    header: {
        display: "flex",
        justifyContent: "space-between"
    }
}));

export default useStyles;
