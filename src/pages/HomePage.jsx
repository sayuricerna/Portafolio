import React from 'react';
import '../components/Hero';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
function HomePage (){
    return (
        <>
        <Hero/>
        <About></About>
        <Projects initialLimit={2} />
        </>
    )
}
export default HomePage;