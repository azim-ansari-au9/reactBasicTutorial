import React from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import Footer from '../components/Footer';

const Home = (props) => {
    console.log('Home',props);
    return(
        <React.Fragment>
            <Header title="Home" />
            <Section />
            <Footer />
        </React.Fragment>
    );
};

export default Home;
