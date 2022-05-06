import React from 'react';
import styled from 'styled-components';
import Footer from '../Layout/Footer';
import Navbar from '../Layout/Navbar';
import About from './About';
import Categories from './Categories/Categories';
import Contact from './Contact';
import Gallery from './Gallery';
import Hero from './Hero';
import Testimonials from './Testimonials';



const  Home :React.FC = () => {


  return (
<Wrapper>
    <div className="grid-container">
        <Navbar/>
          <Hero/>
          <Categories/>
          <Testimonials/>
          <About/>
          <Gallery/>
          <Contact/>
        <Footer/>
    </div>
</Wrapper> 
);
};      

export default Home;


const Wrapper = styled.section`
  width: 100%;
  background-color:var(--clr-background-1);
  color:var(--clr-title-1);

    

  .grid-container{
      display:  grid;
      grid-template-columns: [full-start] 14rem  [col-start] repeat(12, minmax(min-content, 12rem)) 14rem [full-end];
      grid-column-gap: 3rem;


           /* grid-template-columns:[full-start] minmax(6rem, 1fr) [center-start] repeat(12, [col-start] minmax(min-content, 12rem) [col-end])
      [center-end] minmax(6rem, 1fr) [full-end]; //12 col layout  */
  }
 
    
  
  

 
`