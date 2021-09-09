import { Avatar } from '@material-ui/core';
import React from 'react';
import classes from './Story.module.css';

function Story({ image, profileImg, title }) {
    return (
        <div style={{ backgroundImage: `url(${image})` }} className={classes.story}>
            <Avatar src={profileImg} alt={title} className={classes.story__avatar} />
            <h4>{title}</h4>
        </div>
    )
}

export default Story
