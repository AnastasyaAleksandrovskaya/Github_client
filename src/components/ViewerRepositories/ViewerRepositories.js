import React, {useState} from 'react';
import {
    List, ListItem, ListItemText, FormGroup, FormControlLabel, Grid, Typography,
    // LinearProgress,
    Card, Button, Link, CardContent
} from '@material-ui/core';
import GET_VIEWER_INFO from "../../models/queries/viewer";
import {Query} from "@apollo/react-components";
import useStyles from "./styles";
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';


const ViewerRepositories = () => {
    const classes = useStyles();
    const [secondary, setSecondary] = useState(false);
    // false
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} className={classes.myRepos}>
                    <Typography variant="h3" className={classes.title}>
                        {/*Мой профиль*/}
                    </Typography>
                    <List>
                        <Query query={GET_VIEWER_INFO}>
                            {({data: viewer, loading}) => {
                                if (loading || !viewer) {
                                    return "";
                                    // return <LinearProgress/>;
                                }
                                return (
                                    <>
                                        {viewer.viewer.repositories.edges.map((repo) => (

                                            <Card className={classes.elementList} key={repo.node.id}>
                                                <Link href={repo.node.url} target="_blank">
                                                    <ListItem>
                                                        <ListItemText
                                                            primary={repo.node.name}
                                                            secondary={secondary ? repo.node.description: null}
                                                        />
                                                        {/*<Link href={repo.node.url} target="_blank"> {repo.node.name} </Link>*/}
                                                    </ListItem>
                                                </Link>
                                                <RepoInfoContainer>
                                                    <Circle />
                                                    <RepoDetails>{ repo.node.languages.edges && repo.node.languages.edges[0] && repo.node.languages.edges[0].node.name && repo.node.languages.edges[0].node.name }
                                                        <Icon  className="fa fa-star" aria-hidden="true" /> { repo.node.stargazers.totalCount }
                                                        <Icon className="fa fa-code-fork" aria-hidden="true" /> { repo.node.forkCount }
                                                    </RepoDetails>
                                                </RepoInfoContainer>
                                            </Card>
                                        ))}
                                    </>
                                )
                            }}
                        </Query>
                    </List>
                    <FormGroup row>
                        <Button className={classes.moreButton} variant="contained" color="default"
                                onClick={() => (setSecondary(!secondary))}>
                            {secondary ? "меньше" : "больше"}
                        </Button>
                    </FormGroup>
                </Grid>
            </Grid>
        </div>
    );
};
const Icon = styled.i`
  margin-left: 16px;
`
const RepoDetails = styled.p`
  color: #586069;
  font-size: 12px;
  margin: 0;
`
const RepoCards = styled.div`
  border: 1px #d1d5da solid;
  padding: 16px;
  width: 362px;
  margin-bottom: 16px;
`
const Circle = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background: #f1e05a;
  margin-right: 5px;
  top: 2px;
  position: relative;
`
const RepoInfoContainer = styled.div`
  display: flex;
`

export default ViewerRepositories;
