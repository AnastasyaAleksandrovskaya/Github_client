import React, {useState} from 'react';
import {Grid, Typography, TextField, Button} from '@material-ui/core';
import {useLazyQuery} from "@apollo/react-hooks";
import UserCard from "../UserCard/UserCard";
import useStyles from "./styles";

const SearchUser = ({query, title, entityName}) => {
    const classes = useStyles();
    const [getData, {error, data}] = useLazyQuery(query);
    const [input, setInput] = useState("");

    return (
        <div className={classes.root}>
            <Grid item xs={12} md={12} className={classes.search}>
                <div>
                    {/*<Typography variant="h5" className={classes.title}>*/}
                        {/*Поиск юзера*/}
                    {/*</Typography>*/}
                    <TextField label="Поиск юзера" variant="outlined"  value={input} onChange={(e) => (setInput(e.target.value))}/>
                    <br></br>
                    <Button variant="contained" color="default" className={classes.searchButton}
                            onClick={() => (getData({variables: {login: input}}))}>
                        Поиск
                    </Button>
                </div>
                {error && (
                    <h5>Не найдено</h5>
                )}

                {data && (
                    <UserCard data={data} entity={entityName}/>
                )}

            </Grid>
        </div>
    );
};

export default SearchUser;
