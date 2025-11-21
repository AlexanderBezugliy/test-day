import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProductCards from './components/ProductCards'
import Authentic from './components/Authentic'
import BottomSlider from './components/BottomSlider'


const App = () => {
    return (
        <>
            <Navbar />
            
            <HeroSection />
            <ProductCards />
            <Authentic />
            <BottomSlider />

        </>
    )
}

export default App
