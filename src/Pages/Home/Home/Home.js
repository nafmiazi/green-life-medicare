import React from 'react';
import Articles from '../Articles/Articles';
import Banner from '../Banner/Banner';
import Departments from '../Departments/Departments';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Departments></Departments>
            <Articles></Articles>
        </div>
    );
};

export default Home;