import React from 'react';
import classes from './Project.module.css';

const project = (props) => {
    return (
        <div className={classes.Project} onClick={props.click}>
            <h4>{props.name}</h4>
            <div className={classes.container}>
                <img src={props.pic} height={100} width={150} alt="#"/>
                <div className={classes.descContainer}>
                    <p>{props.desc}</p>
                    <p>{props.desc2}</p>
                    <p>{props.desc3}</p>
                    <p>{props.desc4}</p>
                </div>
            </div>
        </div>
    )
}

export default project;