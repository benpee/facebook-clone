import React from 'react';
import classes from './Sidebar.module.css';
import SidebarRow from './SidebarRow';
import { EmojiFlags, People, Chat, StoreFront, VideoLibrary, ExpandMoreOutlined } from '@material-ui/icons';
import useAuthValue from '../../context/auth-context';

function Sidebar() {
    const [{ user }] = useAuthValue();
    return (
        <div className={classes.sidebar}>
            <SidebarRow
                src={user.photoURL}
                // src="https://avatars.githubusercontent.com/u/74276700?s=400&u=4d47ce92a3b603e5a08185a292c42f7db0ae5106&v=4"
                title={user.displayName}
            />
            <SidebarRow Icon={EmojiFlags} title="Pages" />
            <SidebarRow Icon={People} title="Friends" />
            <SidebarRow Icon={Chat} title="Messenger" />
            <SidebarRow Icon={StoreFront} title="MarketPlace" />
            <SidebarRow Icon={VideoLibrary} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlined} title="MarketPlace" />
            <SidebarRow />
            <SidebarRow />
        </div>
    )
}

export default Sidebar
