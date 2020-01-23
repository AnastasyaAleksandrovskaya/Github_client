import React from "react";
import FullWidthTabs from "../FullWidthTabs/FullWidthTabs";
import useStyles from "./styles";

const MainPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainSection}>
            <div className={classes.content}>
                <FullWidthTabs/>
            </div>
        </div>
)
};

export default MainPage;
