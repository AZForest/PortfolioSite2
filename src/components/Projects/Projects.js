import React, { useState } from 'react';
import classes from './Projects.module.css';
import Project from './Project/Project';
import weatherPic from '../../assets/WeatherFinder.png';
import weatherVid from '../../assets/videos/WeatherFinder.mov';
import flightPic from '../../assets/FlightBookerImg.png';
import flightVid from '../../assets/videos/FlightBooker.mov';
import matchingPic from '../../assets/MatchingGameImg.png';
import matchingVid from '../../assets/videos/MatchingGame.mov';
import storePic from '../../assets/StoreImg.png';
import storeVid from '../../assets/videos/OnlineStore.mov';
import Modal from '../Modal/Modal';

class Projects extends React.Component {
    //const { modalOpen, setModalOpen } = useState(false);
    state = {
        modalOpen: false,
        activeProject: {
            demo: null,
            liveLink: null,
            codeLink: null
        }
    }

    setModalOpen(name, desc, demo, livelink, codelink) {
        this.setState({modalOpen: !this.state.modalOpen})
        this.setState({activeProject: {
            name: name,
            desc: desc,
            demo: demo,
            livelink: livelink,
            codelink: codelink
        }})
        /* if (this.state.modalOpen) {
            this.setState({activeProject: {
                demo: demo,
                livelink: livelink,
                codelink: codelink
            }})
        } else {
            this.setState({activeProject: {
                demo: null,
                liveLink: null,
                codeLink: null
            }})
        } */
    }

    render () {

    let modal = "";
    if (this.state.modalOpen) {
        modal = <Modal click={() => this.setModalOpen()} name={this.state.activeProject.name} desc={this.state.activeProject.desc} demo={this.state.activeProject.demo} livelink={this.state.activeProject.livelink} codelink={this.state.activeProject.codelink}/>;
    }


    let flightDesc = "CSS | JavaScript"; 
    let flightDesc2 = "React | Redux";
    let flightdesc3 = "Express | Node.js";
    let flightDesc4 = "React";
    let flightDesc5 = "MongoDB"
    let weatherDesc = "AJAX";
    let weatherDesc2 = "";

    return (
        <div className={classes.Projects} ref={this.props.reference}>
            {modal}
            <h1>PROJECTS PORTFOLIO</h1>
            <div className={classes.ProjectsContainer}>
                <Project name="Online Store" desc={flightDesc} desc2={flightDesc2} desc3={flightdesc3} desc4={flightDesc5} pic={storePic} click={() => this.setModalOpen("Online Store", "React/Redux, Express/Node.js, MongoDB", storeVid, "https://azforest.github.io/OnlineStore/", "https://github.com/AZForest/OnlineStore/")}/>
                <Project name="Flight Booker" desc={flightDesc} desc2={flightDesc2} desc3={flightdesc3} pic={flightPic} click={() => this.setModalOpen("Flight Booker", "A React application that uses Redux to manage state and a Express/Node.js server", flightVid, "https://azforest.github.io/FlightBooker/", "https://github.com/AZForest/FlightBooker")} />
                <Project name="Weather Finder" desc={flightDesc} desc2={weatherDesc} pic={weatherPic} click={() => this.setModalOpen("Weather Finder", "Vanilla JS application that uses an interactive map and AJAX to connect to the DarkSky.net API", weatherVid, "https://azforest.github.io/WeatherFinder/", "https://github.com/AZForest/WeatherFinder")}/>
                <Project name="Memory Game" desc={flightDesc} desc2={flightDesc4} pic={matchingPic} click={() => this.setModalOpen("Memory Game", "Card matching game built with React", matchingVid, "https://azforest.github.io/MemoryGame/", "https://github.com/AZForest/MemoryGame")} />
            </div>
        </div>
    )
    }
    
}

export default Projects;