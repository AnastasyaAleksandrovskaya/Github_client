import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    content: {
        width: "100%",
    },
    title: {
        margin: theme.spacing(1, 10, 0),
    },
    elementList: {
        margin: "15px 0",
        minWidth: "50%",
        borderRadius:"10px"
    },
    myRepos: {
        minWidth: "30vw"
    },
    moreButton: {
        marginTop: 8,
        marginRight: 16,
        // backgroundColor:"#696969"
    }
    //85
}));

export default useStyles;
