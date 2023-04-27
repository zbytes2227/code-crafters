import React from 'react'
import Header from '../components/Header';
import Signup from '../components/Signup';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import About from '../components/About';

function Home() {
    return (
        <>
            <Header />
            <About />
            <Signup />
            <Contact />
            <Footer />
        </>
    )
}

export default Home