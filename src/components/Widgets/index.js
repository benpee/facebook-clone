import React from 'react';
import classes from './Widgets.module.css';

function Widgets() {
    return (
        <div className={classes.widgets}>
            <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2F&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                frameborder="0"
                width="340"
                height="100%"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                allowTransparency="true"
                allow="encrypted-media"
                title="widget"
            ></iframe>
        </div>
    )
}

export default Widgets
