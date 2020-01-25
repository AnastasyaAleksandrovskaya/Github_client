import React from "react";
import FullTabs from "../FullTabs/FullTabs";
import useStyles from "./styles";

const MainPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainSection}>
            <div className={classes.content}>
                <FullTabs/>
            </div>
        </div>
)
};

export default MainPage;
