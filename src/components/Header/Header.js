import React from 'react';
import classes from './Header.module.css';

const header = (props) => {
    return (
        <div className={classes.MainBg}>
            <div className={classes.covering}>
                <h1>Alex Forest</h1>
                <h4>Software Developer</h4>
                <button onClick={props.click}>See Projects</button>
            </div>
        </div>
    )
}

export default header;