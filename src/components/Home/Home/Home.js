import React from 'react';
import Banner from "../Banner/Banner";
import Footer from "../../Shared/Footer/Footer";
import Navigation from '../../Shared/Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Home;