import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProductCards from './components/ProductCards'


const App = () => {
    return (
        <>
            <Navbar />

            <div>
                <HeroSection />
                <ProductCards />

                
            </div>
        </>
    )
}

export default App
