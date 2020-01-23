import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    card: {
        display: 'flex',
        margin: 16,
        boxSizing: "border-box",
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        width: 150
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

export default useStyles;
