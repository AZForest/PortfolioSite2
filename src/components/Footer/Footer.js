import React from 'react';
import classes from './Footer.module.css';
import resume from '../../assets/AFResume.pdf';

const footer = () => {
    return (
        <div className={classes.Footer}>
            <div className={classes.left}>
                <a href="https://github.com/AZForest" target="_blank" rel="noopener noreferrer">Github</a>
                <a href="https://https://www.linkedin.com/in/alex-forest" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href={resume} download>Resume</a>
            </div>
            <div className={classes.right}>
                <p>Site By ALEX FOREST</p>
            </div>
        </div>
    )
}

export default footer;
