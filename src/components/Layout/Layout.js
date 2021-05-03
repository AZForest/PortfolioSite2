import React, { useRef } from 'react';
import classes from './Layout.module.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Description from '../Description/Description';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Layout = (props) => {
    const scrollToDiv = (ref) => window.scrollTo(0, ref.current.offsetTop);
    //const scrollToDiv = (ref) => window.scrollIntoView(ref);
    const el1 = useRef();

    return (
        <React.Fragment>
            <Header click={() => scrollToDiv(el1)} />
            <Description />
            <Skills />
            <Projects reference={el1} />
            <main className={classes.Content}>
                {props.children}
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Layout;