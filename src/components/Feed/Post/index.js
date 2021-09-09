import { Avatar } from '@material-ui/core';
import { ThumbUp, ChatBubbleOutline, NearMe, ExpandMoreOutlined, AccountCircle } from '@material-ui/icons';
import React from 'react';
import classes from './Post.module.css';

function Post({ profilePic, image, username, timestamp, message }) {
    return (
        <div className={classes.post}>
            <div className={classes.post__top}>
                <Avatar src={profilePic} alt={username} />
                <div className={classes.post__top}>
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>

                <div className={classes.post__bottom}>
                    <p>{message}</p>
                </div>

                <div className={classes.post__image}>
                    <img src={image} alt={username} />
                </div>

                <div className={classes.post__options}>
                    <div className={classes.post_option}>
                        <ThumbUp />
                        <p>Like</p>
                    </div>
                    <div className={classes.post_option}>
                        <ChatBubbleOutline />
                        <p>Comment</p>
                    </div>
                    <div className={classes.post_option}>
                        <NearMe />
                        <p>Share</p>
                    </div>
                    <div className={classes.post_option}>
                        <AccountCircle />
                        <ExpandMoreOutlined />
                        <p>Like</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
