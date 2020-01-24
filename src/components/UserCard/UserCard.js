import React, {useState} from "react";
import {Button, CardMedia, CardContent, Typography, Card, Avatar} from "@material-ui/core";
import {useMutation} from "@apollo/react-hooks";
import FOLLOW_USER from "../../models/mutations/follow";
import UNFOLLOW_USER from "../../models/mutations/unfollow";
import GET_USER_INFO from "../../models/queries/user";
import useStyles from "./styles";
import 'font-awesome/css/font-awesome.min.css';
import styled from "styled-components";

const UserCard = ({data, entity}) => {
    const info = data[entity];
    const classes = useStyles();
    const [extended, switchExtended] = useState(false);
    const [follow] = useMutation(FOLLOW_USER,
        {
            refetchQueries: [{query: GET_USER_INFO, variables: {login: info.login}}]
        });
    const [unfollow] = useMutation(UNFOLLOW_USER,
        {
            refetchQueries: [{query: GET_USER_INFO, variables: {login: info.login}}]
        });
    return (
        <Card className={classes.card}>

            <CardMedia
                className={classes.media}
                image={info.avatarUrl}
            />

            <CardContent className={classes.description}>
                <Typography gutterBottom variant="h5" component="h2">
                    {info.name}
                </Typography>
                <a href={info.url}>
                    <Typography gutterBottom variant="subtitle1" component="h3">
                        {info.login}
                    </Typography>
                </a>
                {extended &&
                <>
                    <Typography variant="body2" component="p">
                        <Icon  className="fa fa-user-circle" aria-hidden="true" />{info.bio}
                    </Typography>
                    {/*<Typography variant="body2" component="p">*/}
                        {/*{info.description}*/}
                    {/*</Typography>*/}
                    <Typography variant="subtitle2" component="h4">
                        <Icon  className="fa fa-handshake-o" aria-hidden="true" />{info.company}
                    </Typography>
                    {/*<Typography variant="overline" component="h5">*/}
                        {/*{info.location}*/}
                    {/*</Typography>*/}
                    {/*<Typography variant="caption" color="textSecondary" component="h6">*/}
                        {/*{info.email}*/}
                    {/*</Typography>*/}
                </>}
                <div>
                    <Button className={classes.moreButton} variant="contained" color="default"
                            onClick={() => (switchExtended(!extended))}>
                        {extended ? "меньше" : "больше"}
                    </Button>
                    {entity === "user" &&
                    <Button className={classes.moreButton} variant="contained" color="default"
                            onClick={() => (info.viewerIsFollowing ?
                                unfollow({variables: {userId: info.id}})
                                :
                                follow({variables: {userId: info.id}}))
                            }>
                        {info.viewerIsFollowing ? "Отписаться" : "Подписаться"}
                    </Button>
                    }
                </div>
            </CardContent>
        </Card>
    )
};
const Icon = styled.i`
  margin-left: 16px;
`

export default UserCard;
