import React from 'react';
import {IconButton, Link} from '@material-ui/core';
import {Stars, Star, StarBorder, Visibility} from "@material-ui/icons";
import useStyles from "./styles";
import styled from "styled-components";

const RepoCard = ({repo, addStar, removeStar}) => {
    const classes = useStyles();
    return (
    <FollowersCard className={classes.card}>
        <FollowersContainer>
            <FollowersImage src={repo.owner.avatarUrl} />

            <div className={classes.details}>

            <FollowersInfoContainer>
                <FollowersName component="h3" variant="h3">
                    <Link href={repo.url} target="_blank"> {repo.name} </Link>
                    <FollowerLogin>{ repo.owner.login }</FollowerLogin>
                    {/*<FollowerLogin>*/}
                        {/*<Star/>{ repo.stargazers.totalCount }*/}
                    {/*</FollowerLogin>*/}
                </FollowersName>
                <FollowerBio>{repo.owner.login && repo.primaryLanguage && repo.primaryLanguage.name} </FollowerBio>
            </ FollowersInfoContainer>
            <div className={classes.controls}>
                { repo.stargazers.totalCount }
                {!repo.viewerHasStarred ?
                    <IconButton aria-label="previous" onClick={() => (addStar({variables: {id: repo.id}}))}>
                        <StarBorder/>
                    </IconButton> :
                    <IconButton aria-label="previous" onClick={() => (removeStar({variables: {id: repo.id}}))}>
                        <Stars/>
                    </IconButton>
                }
                <FollowerLogin>
                    {/*<Visibility/>{repo.forkCount}*/}
                    <Icon className="fa fa-code-fork" aria-hidden="true" />{repo.forkCount}
                </FollowerLogin>
            </div>
            {/*<FollowerLogin>*/}
                {/*<Visibility/>{repo.forkCount}*/}
                {/*<Icon className="fa fa-code-fork" aria-hidden="true" />{repo.forkCount}*/}
            {/*</FollowerLogin>*/}

            </div>
        </FollowersContainer>
    </FollowersCard>
    );
};
const Icon = styled.i`
  font-size: 18px;
  margin-left: 4px;
`

const FollowersContainer = styled.div`
  display: flex;
`

const FollowersInfoContainer = styled.div`
  font-size: 12px;
`

const FollowersName = styled.div`
  align-items: flex-end;
  margin-bottom: 4px;
`

const FollowersImage = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 3px;
  margin-right: 5px;
`

const FollowersCard = styled.div`
  border-bottom: 1px #d1d5da solid;
  padding: 16px;
  margin-bottom: 16px;
`

const FollowerName = styled.p`
  font-size: 16px;
  color: #24292e;
  padding-left: 4px;
  margin-bottom: 0;
`

const FollowerLogin = styled.p`
  font-size: 14px;
  margin-bottom: 0;
  color: #586069;
  padding-left: 4px;
  position: relative;
  top: -1px;
`

const FollowerLocation = styled.p`
  font-size: 14px;
  color: #586069;
  padding-left: 4px;
  display: inline-block;
  margin-bottom: 4px;
`

const FollowerBio = styled.p`
  font-size: 14px;
  color: #586069;
  padding-left: 4px;
  margin-bottom: 4px;
`

export default RepoCard;
