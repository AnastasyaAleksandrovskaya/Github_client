import React from "react";
import ViewerInfo from "../ViewerInfo/ViewerInfo";
import ViewerRepositories from "../ViewerRepositories/ViewerRepositories";
import useStyles from "./styles";

const MyProfile = () => {
    const classes = useStyles();
    return (
        <div className={classes.panel}>
            <ViewerRepositories/>
            <ViewerInfo className={classes.userInfo}/>
        </div>
    )
};

export default MyProfile;
