import React, {useState} from 'react';
import SwipeableViews from 'react-swipeable-views';
import {useTheme, AppBar, Tabs, Tab, Typography, Box} from '@material-ui/core';
import SearchUser from "../SearchUser/SearchUser";
import MyProfile from "../MyProfile/MyProfile";
import Followers from "../Followers/Followers";
import Following from "../Followers/Following";
import RepositorySearch from "../RepositorySearch/RepositorySearch";
import useStyles from "./styles";
import GET_USER_INFO from "../../models/queries/user";

const TabPanel = ({children, value, index, ...other}) => (
    <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
    >
        <Box p={5}>{children}</Box>
    </Typography>
);


const a11yProps = (index) => {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
};

export default function FullTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [position, setPosition]  = useState(0);

    const handleChange = (event, newValue) => {
        setPosition(newValue);
    };

    const handleChangeIndex = index => {
        setPosition(index);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={position}
                    onChange={handleChange}
                    indicatorColor=""
                    textColor="inherit"
                    variant="fullWidth"
                    // orientation="vertical"
                    // ScrollButtonComponent="elementType"
                    // elementType="off"
                >
                    <Tab label="Мой профиль" {...a11yProps(0)} />
                    <Tab label="Подписки" {...a11yProps(1)} />
                    <Tab label="Подписчики" {...a11yProps(2)} />
                    <Tab label="Поиск репозитория" {...a11yProps(3)} />
                    <Tab label="Поиск юзера" {...a11yProps(4)} />
                </Tabs>

            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={position}
                onChangeIndex={handleChangeIndex}
                className={classes.wrapper}
            >
                <TabPanel value={position} index={0} dir={theme.direction} className={classes.panel}>
                    <MyProfile/>
                </TabPanel>
                <TabPanel value={position} index={1} dir={theme.direction} className={classes.panel}>
                    <Following/>
                </TabPanel>
                <TabPanel value={position} index={2} dir={theme.direction} className={classes.panel}>
                    <Followers/>
                </TabPanel>
                <TabPanel value={position} index={3} dir={theme.direction} className={classes.panel}>
                    <RepositorySearch/>
                </TabPanel>
                <TabPanel value={position} index={4} dir={theme.direction} className={classes.panel}>
                    <SearchUser query={GET_USER_INFO} title={"Поиск юзера"} entityName={"user"}/>
                </TabPanel>
            </SwipeableViews>
        </div>
    );
};



