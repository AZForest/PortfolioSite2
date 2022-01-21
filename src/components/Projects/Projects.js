import React from 'react';
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
import RestaurantPic from '../../assets/PeriodicTables.png'
import APIPic from '../../assets/WeLoveMoviesRoutes.png'
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
        console.log(demo);
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
    

    return (
        <div className={classes.Projects} ref={this.props.reference}>
            {modal}
            <h1>PROJECTS PORTFOLIO</h1>
            <div className={classes.ProjectsContainer}>
                <Project name="Restaurant Reservation App" 
                         desc="CSS | Bootstrap" 
                         desc2="React | JavaScript" 
                         desc3="Node | Express" 
                         desc4="PostgreSQL | Knex"
                         pic={RestaurantPic}
                         click={() => this.setModalOpen("Restaurant Reservation App", 
                                                        "React, Node/Express, Knex/PostgresQL", 
                                                        RestaurantPic, 
                                                        "https://restaurant-client-vercel.vercel.app/dashboard", 
                                                        "https://github.com/AZForest/RestaurantReservationApp/")}/>
                <Project name="WeLoveMovies API/Backend" 
                            desc="Node | Express" 
                            desc2="Knex | PostgreSQL"
                            pic={APIPic}
                            click={() => this.setModalOpen("WeLoveMovies API/Backend", 
                                                           "Node, Express, Knex, PostgresQL", 
                                                           APIPic, 
                                                           null, 
                                                           "https://github.com/AZForest/WeLoveMoviesProject/")}/>
                <Project name="Online Store" 
                         desc={flightDesc} 
                         desc2={flightDesc2} 
                         desc3={flightdesc3} 
                         desc4={flightDesc5} 
                         pic={storePic} 
                         click={() => this.setModalOpen("Online Store", 
                                                        "React/Redux, Node/Express, MongoDB", 
                                                        storeVid, 
                                                        "https://azforest.github.io/OnlineStore/", 
                                                        "https://github.com/AZForest/OnlineStore/")}/>
                <Project name="Flight Booker" 
                         desc={flightDesc} 
                         desc2={flightDesc2} 
                         desc3={flightdesc3} 
                         pic={flightPic} 
                         click={() => this.setModalOpen("Flight Booker", 
                                                        "A React application that uses Redux to manage state and an Express/Node server", 
                                                        flightVid, 
                                                        "https://azforest.github.io/FlightBooker/", 
                                                        "https://github.com/AZForest/FlightBooker")} />
                <Project name="Weather Finder" 
                         desc={flightDesc} 
                         desc2={weatherDesc} 
                         pic={weatherPic} 
                         click={() => this.setModalOpen("Weather Finder", "Vanilla JS application that uses an interactive map and AJAX to connect to the DarkSky.net API", weatherVid, "https://azforest.github.io/WeatherFinder/", "https://github.com/AZForest/WeatherFinder")}/>
                <Project name="Memory Game" 
                         desc={flightDesc} 
                         desc2={flightDesc4} 
                         pic={matchingPic} 
                         click={() => this.setModalOpen("Memory Game", "Card matching game built with React", matchingVid, "https://azforest.github.io/MemoryGame/", "https://github.com/AZForest/MemoryGame")} />
            </div>
        </div>
    )
    }
    
}

export default Projects;