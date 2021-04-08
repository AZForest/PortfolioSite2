import React from 'react';
import classes from './Description.module.css';
import jsImage from '../../assets/javascript_round.png';
import nodeImage from '../../assets/node.png';
import reactImage from '../../assets/react.png';
import reduxImage from '../../assets/redux.png';

const description = () => {
    return (
        <div className={classes.Description}>
            <h1>FRONT END FOCUSED WITH FULL STACK EXPERIENCE</h1>
            <div className={classes.skillsContainer}>
                <div className={classes.skillsDesc}>
                    <p>I am a primarily self-taught developer who specializes in JavaScript and React. Additional skills include Node JS, Express JS, Redux, and MongoDB.</p>
                    <p>Trained for Geographic Information Systems in school, I encountered both Java (CS courses) and Python (GIS courses) as my first languages.</p>
                </div>
                <div className={classes.imagesContainer}>
                    <img src={jsImage} height={100} width={100} alt="#"/>
                    <img src={nodeImage} height={125} width={150} alt="#"/>
                    <img src={reactImage} height={100} width={120} alt="#"/>
                    <img src={reduxImage} height={100} width={100} alt="#"/>
                </div>
            </div>
        </div>
    )
}

export default description;