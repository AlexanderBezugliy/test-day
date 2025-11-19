import React from 'react'
import Navbar from './components/Navbar'
import HeroSlider from './components/HeroSlider'
import HeroSection from './components/HeroSection'

const App = () => {
    return (
        <>
            <Navbar />

            <div>
                {/* <HeroSlider /> */}
                <HeroSection />
            </div>
        </>
    )
}

export default App
