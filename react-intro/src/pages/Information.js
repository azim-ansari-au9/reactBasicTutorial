import React from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import Footer from '../components/Footer';

const Information = (props) => {
    console.log('Information',props);
    return(
        <React.Fragment>
            <Header title="Information" />
            <Section />
            <Footer />
        </React.Fragment>
    );
};

export default Information;
