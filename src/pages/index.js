import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import WelcomeScreen from '../components/WelcomeScreen';
import AboutSection from '../components/AboutSection';
import PortfolioSection from '../components/PortfolioSection'
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer'
import { aboutOne } from '../components/AboutSection/Data'
import { contactInfo } from '../components/ContactSection/Data'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <WelcomeScreen />
            <AboutSection {...aboutOne}/> 
            <PortfolioSection />
            <ContactSection {...contactInfo} />
            <Footer />
        </>
    )
}

export default Home