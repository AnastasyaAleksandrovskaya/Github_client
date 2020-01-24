import React, {useState} from "react";
import {Button, TextField, Typography} from "@material-ui/core";
import RepoCard from "../RepoCard/RepoCard";
import {useLazyQuery, useMutation} from "@apollo/react-hooks";
import REPOS_QUERY from "../../models/queries/repos";
import ADD_STAR from "../../models/mutations/addStar";
import REMOVE_STAR from "../../models/mutations/removeStar";
import useStyles from "./styles";

const RepositorySearch = () => {
    const classes = useStyles();
    const [input, setInput] = useState("");
    const [getData, {loading, error, data}] = useLazyQuery(REPOS_QUERY);

    const [addStar] = useMutation(ADD_STAR,
        {
            refetchQueries: [{query: REPOS_QUERY, variables: {title: input}}]
        });
    const [removeStar] = useMutation(REMOVE_STAR,
        {
            refetchQueries: [{query: REPOS_QUERY, variables: {title: input}}]
        });

    return (
        <div className={classes.root}>
            <div>
                <TextField label="Поиск репозитория" variant="outlined" color="default" value={input} onChange={(e) => (setInput(e.target.value))}/>
                <br></br>
                <Button variant="contained" color="default" className={classes.searchButton}
                        onClick={() => (getData({variables: {title: input}}))}>
                    Поиск
                </Button>
            </div>
            {error && (
                <h5>Не найдено</h5>
            )}
            {data && (
                <div className={classes.cards}>
                    {data.search.nodes.map((node) => (
                        <RepoCard repo={node} key={node.id} addStar={addStar} removeStar={removeStar}/>
                    ))}
                </div>
            )}
        </div>

    )
};

export default RepositorySearch;
