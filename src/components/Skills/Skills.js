import React from 'react';
import classes from './Skills.module.css';

const skills = () => {
    return (
        <div className={classes.Skills}>
            <div className={classes.skillsSection}>
                <h3>JAVASCRIPT</h3>
                <p>ES6</p>
                <p>AJAX</p>
                <p>DOM Manipulation</p>
                <p>Node.js / Express</p>
                {/* <p>Functional Programming</p> */}
            </div>
            <div className={classes.skillsSection}>
                <h3>REACT</h3>
                <p>React Hooks</p>
                <p>Class-based Components</p>
                <p>React Router</p>
                <p>Lifecycle Methods</p>
                {/* <p>Authentication</p> */}
            </div>
            <div className={classes.skillsSection}>
                <h3>REDUX</h3>
                <p>Redux Store</p>
                <p>Dispatching</p>
                <p>Reducers</p>
                <p>Action Creators</p>
                {/* <p>Redux Thunk</p> */}
            </div>
            <div className={classes.skillsSection}>
                <h3>SERVER/BACKEND</h3>
                <p>Express JS</p>
                <p>Node.js</p>
                <p>MongoDB</p>
                {/* <p>MySql</p> */}
                <p>Git / GitHub</p>
            </div>
        </div>
    )
}

export default skills;