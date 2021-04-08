import React from 'react';
import classes from './Modal.module.css';

const modal = (props) => {
    return (
        <React.Fragment>
                <div className={classes.BackDrop} onClick={props.click}>
                </div>
                <div className={classes.Modal}>
                    <video autoPlay loop>
                        <source src={props.demo} alt="pic"/>
                    </video>
                    <div>
                        <p className={classes.X} onClick={props.click}>x</p>
                        <h2>{props.name}</h2>
                        <p className={classes.desc}>{props.desc}</p>
                        <a href={props.livelink} target="_blank" rel="noopener noreferrer">LIVE VERSION</a>
                        <a href={props.codelink} target="_blank" rel="noopener noreferrer">VIEW CODE</a>
                    </div>
                </div>
            </React.Fragment>
    )
}

export default modal;