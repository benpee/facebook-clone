import { Avatar } from '@material-ui/core';
import React from 'react';
import classes from './SidebarRow.module.css';

function SidebarRow({ src, title, Icon }) {
    return (
        <div className={classes.sidebarRow}>
            {src && <Avatar src={src} />}
            {Icon && <Icon className={classes.sidebarRow__icon} />}
            <p>{title}</p>
        </div>
    )
}

export default SidebarRow
