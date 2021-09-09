import React from 'react';
import classes from './Header.module.css';
import { Search, Home, Flag, SubscriptionsOutlined, StorefrontOutlined, SupervisedUserCircle, Add, Forum, NotificationsActive, ExpandMore } from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';
import useAuthValue from '../../context/auth-context';

function Header() {
    const [{ user }] = useAuthValue();
    return (
        <div className={classes.header}>
            <div className={classes.header__left}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%162019.svg.png"
                    alt="Facebook logo"
                />
                <div className={classes.header__input}>
                    <Search />
                    <input type="text" />
                </div>
            </div>
            <div className={classes.header__center}>
                <div className={`${classes.header__option} ${classes['header__option--active']}`}>
                    <Home fontSize="large" className={classes.header__centerIcon} />
                </div>
                <div className={classes.header__option}>
                    <Flag fontSize="large" className={classes.header__centerIcon} />
                </div>
                <div className={classes.header__option}>
                    <SubscriptionsOutlined fontSize="large" className={classes.header__centerIcon} />
                </div>
                <div className={classes.header__option}>
                    <StorefrontOutlined fontSize="large" className={classes.header__centerIcon} />
                </div>
                <div className={classes.header__option}>
                    <SupervisedUserCircle fontSize="large" className={classes.header__centerIcon} />
                </div>
            </div>
            <div className={classes.header__right}>
                <div className={classes.header__info}>
                    <Avatar src={user.photoURl} />
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <Add />
                </IconButton>
                <IconButton>
                    <Forum />
                </IconButton>
                <IconButton>
                    <NotificationsActive />
                </IconButton>
                <IconButton>
                    <ExpandMore />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
