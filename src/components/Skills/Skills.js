import React from 'react';
import classes from './Skills.module.css';

const skills = () => {
    return (
        <div className={classes.Skills}>
            {/*<div className={classes.skillsSection}>
                <h3>JAVASCRIPT</h3>
                {/*<p>ES6</p>
                <p>AJAX</p>
                <p>Data Structures / Algorithms</p>
                <p>ES6 Syntax</p>
                <p>DOM Manipulation</p>
                <p>React / Node / Express</p>
            </div>
            <div className={classes.skillsSection}>
                <h3>REACT</h3>
                <p>React Hooks</p>
                <p>Class-based Components</p>
                <p>React Router</p>
                <p>Lifecycle Methods</p>
            </div>
            <div className={classes.skillsSection}>
                <h3>REDUX</h3>
                <p>Redux Store</p>
                <p>Dispatching</p>
                <p>Reducers</p>
                <p>Action Creators</p>
            </div>
            <div className={classes.skillsSection}>
                <h3>SERVER / BACKEND</h3>
                <p>Node / Express</p>
                <p>Knex / PostgreSQL</p>
                <p>MongoDB / NoSQL </p>
                <p>Git / GitHub</p>
            </div>*/}
            <div className={classes.skillsSection}>
                <h3>FRONT END</h3>
                <p>HTML / CSS</p>
                <p>Bootstrap</p>
                <p>JavaScript</p>
                <p>React / Redux</p>
            </div>
            <div className={classes.skillsSection}>
                <h3>BACK END</h3>
                <p>Node / Express</p>
                <p>Knex</p>
                <p>PostgreSQL / SQL</p>
                <p>MongoDB / NoSQL</p>
            </div>
            <div className={classes.skillsSection}>
                <h3>ADDITIONAL SKILLS</h3>
                <p>Data Structures</p>
                <p>Algorithms</p>
                <p>Heroku / Vercel</p>
                <p>Git / GitHub</p>
            </div>
            <div className={classes.skillsSection}>
                <h3>MODERATE SKILLS</h3>
                <p>Python</p>
                <p>Java</p>
                <p>C# / .NET</p>
                <p>Mocha / Chai</p>
            </div>
        </div>
    )
}

export default skills;