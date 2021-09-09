import { Button } from '@material-ui/core';
import React from 'react';
import useAuthValue from '../../context/auth-context';
import { actionType } from '../../context/reducer';
import { auth, provider } from '../../firebase';
import classes from './Login.module.css';

function Login() {
    const [{ }, dispatch] = useAuthValue()
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => dispatch({
                type: actionType.SET_USER,
                user: result.user
            }))
            .catch(error => alert(error.message))
    }
    return (
        <div className={classes.login}>
            <div className={classes.login__logo}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
                    alt=""
                />
                <img
                    src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                    alt=""
                />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
