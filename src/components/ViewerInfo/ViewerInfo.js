import React from "react";
import GET_VIEWER_INFO from "../../models/queries/viewer";
import {Query} from "@apollo/react-components";
import LinearProgress from "@material-ui/core/LinearProgress";
import UserCard from "../UserCard/UserCard";

const ViewerInfo = () => (
    <Query query={GET_VIEWER_INFO}>
        {({data: viewer, loading}) => {
            if (loading || !viewer) {
                // return <LinearProgress/>;
                return "";
            }
            return (
                <UserCard data={viewer} entity={"viewer"}/>
            )
        }}
    </Query>
);

export default ViewerInfo;
