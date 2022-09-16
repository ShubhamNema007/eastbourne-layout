import React from 'react'
import Experties from '../../Component/Experties/Experties'
import Footer from '../../Component/Footer/Footer'
import Header from '../../Component/Header/Header'
import Hero from '../../Component/Hero/Hero'
import Planning from '../../Component/Planning/Planning'
import Lookforward from '../../Lookforward/Lookforward'


const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Planning />
            <Experties />
            <Lookforward />
            <Footer />
        </div>
    )
}

export default Home;
