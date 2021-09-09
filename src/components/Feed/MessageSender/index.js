import { Avatar } from '@material-ui/core';
import { VideoCam, PhotoLibrary, InsertEmoticon } from '@material-ui/icons';
import React, { useRef } from 'react';
import useAuthValue from '../../../context/auth-context';
import classes from './MessageSender.module.css';
import firebase from 'firebase';
import db from '../../../firebase';

function MessageSender() {
    const [{ user },] = useAuthValue();
    const inputTextRef = useRef("");
    const imageInputRef = useRef("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const input = inputTextRef.current.value;
        const imageUrl = imageInputRef.current.value

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.fieldValue.serverTimestamp(),
            username: user.displayName,
            profilePic: user.photoURL,
            image: imageUrl,
        })

        imageInputRef.current.value = inputTextRef.current.value = "";
    }
    return (
        <div className={classes.messageSender}>
            <div className={classes.messageSender__top}>
                <Avatar src={user.photoURL} alt={user.displayName} />
                <form onSubmit={handleSubmit}>
                    <input
                        ref={inputTextRef}
                        placeholder={`What's on your mind, ${user.displayName}?`}
                        className={classes.messageSender__input}
                    />
                    <input ref={imageInputRef} placeholder="image URL (Optional)" />
                    <button type="submit">Hidden submit</button>
                </form>
            </div>
            <div className={classes.messageSender__bottom}>
                <div className={classes.messageSender__option}>
                    <VideoCam style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>
                <div className={classes.messageSender__option}>
                    <PhotoLibrary style={{ color: 'red' }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className={classes.messageSender__option}>
                    <InsertEmoticon style={{ color: 'orange' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
