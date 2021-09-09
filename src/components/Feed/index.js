import React from 'react';
import { useState, useEffect } from 'react';
import db from '../../firebase';
import classes from './Feed.module.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) =>
                setPosts(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            )
    }, [])
    return (
        <div className={classes.feed}>
            <StoryReel />

            <MessageSender />
            {/* <Post
                profilePic="https://avatars.githubusercontent.com/u/74276700?s=400&u=4d47ce92a3b603e5a08185a292c42f7db0ae5106&v=4"
                message="Wow"
                timestamp="12356"
                username="Ajibola Pius"
                image="https://code.org/shared/images/social-media/codeorg2019_social.png"
            />
            <Post
                profilePic="https://avatars.githubusercontent.com/u/74276700?s=400&u=4d47ce92a3b603e5a08185a292c42f7db0ae5106&v=4"
                message="Wow"
                timestamp="12356"
                username="Ajibola Pius"
                image="https://code.org/shared/images/social-media/codeorg2019_social.png"
            /> */}
            {posts.map(({ id, data }) => (
                <Post
                    key={id}
                    profilePic={data.profilePic}
                    message={data.message}
                    timestamp={data.timestamp}
                    username={data.username}
                    image={data.image}
                />
            ))}
        </div>
    )
}

export default Feed
