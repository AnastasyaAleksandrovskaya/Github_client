import React from "react";
import {AppBar, Toolbar, Typography, Button, IconButton, Avatar} from '@material-ui/core';
import {Link} from "react-router-dom";
import useStyles from "./styles";

const Header = ({token, logout}) => {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar className={classes.header}>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="logo">
                    <Typography variant="h6" className={classes.title}>
                        GitHub
                    </Typography>
                </IconButton>
                <div>
                    {token ?
                        <Button color="inherit" onClick={() => logout()}>
                            <Avatar></Avatar>
                            Выход
                        </Button>
                         :
                        <Button color="inherit">
                            <Link className={classes.navigationButton}
                                  to={`/login`}></Link>
                            {/*Вход*/}
                        </Button>}
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;

