import React, {useState} from 'react'
import cat from "../../assets/images/cat.svg"
import {TextField, Button, Card, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import {useHistory} from "react-router";
import useStyles from "./styles";
import {useLazyQuery} from "@apollo/react-hooks";
import {AUTH_TOKEN} from "../../constants";
import VALIDATION_QUERY from "../../models/queries/validation";

const Login = ({login}) => {
    let history = useHistory();
    const classes = useStyles();

    const [input, updateInput] = useState("");
    const [error, setError] = useState(false);
    const [getData] = useLazyQuery(VALIDATION_QUERY, {
        onCompleted: () => {
            setError(false);
            login(input);
            history.push(`/home`);
        },
        onError: () => {
            setError(true);
            localStorage.removeItem(AUTH_TOKEN);
        }
    });

    const validation = () => {
        localStorage.setItem(AUTH_TOKEN, input);
        getData();
    };

    return (
        <div className={classes.loginDiv}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={cat}
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h3">
                        Вход
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Введите свой токен
                    </Typography>
                    <TextField value={input} onChange={(e) => (updateInput(e.target.value))} fullWidth={true}
                               id="standard-basic" label=""/>
                    {error && <Typography variant="body2" color="error" component="p">
                        Неверный токен
                    </Typography>}
                </CardContent>
                <CardActions>
                    <Button size="small" color="default" onClick={validation}>
                        Войти
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default Login;
