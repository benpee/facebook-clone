import React from 'react';
import Story from './Story';
import classes from './StoryReel.module.css';
import clem from '../../../img/Clem.jpg'
import bayo from '../../../img/Bayo.png'
import pelumi from '../../../img/Pelumi.png'
import sis from '../../../img/Sis.jpg'
import room from '../../../img/room.jpg'
import biz from '../../../img/biz.jpg'

function StoryReel() {
    return (
        <div className={classes.storyReel}>
            <Story
                image={biz}
                profileImg={clem}
                title="Clement"
            />
            <Story
                image={room}
                profileImg={pelumi}
                title="Pelumi"
            />
            <Story
                image={room}
                profileImg={sis}
                title="Dammy"
            />
            <Story
                image={biz}
                profileImg={bayo}
                title="Bayo"
            />
        </div>
    )
}

export default StoryReel
