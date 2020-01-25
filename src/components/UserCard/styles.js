import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    card: {
        margin: 40,
        height: "fit-content",
        width: 300,
        borderRadius:"20px"
    },
    media: {
        height: 350,
    },
    card2: {
        margin: 40,
        height: "fit-content",
        width: 270,
        borderRadius:"100%"
    },
    media2: {
        height: 270,
        borderRadius: "100%"
    },
    description: {
        display: "flex",
        flexDirection: "column",
        alignItems: "end",
    },
    moreButton: {
        marginTop: 8,
        marginRight: 16,
        // backgroundColor:"#696969"
    }
});
export default useStyles;
