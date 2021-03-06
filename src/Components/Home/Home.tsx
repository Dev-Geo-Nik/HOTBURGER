import React from 'react';
import styled from 'styled-components';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';
import SEO from '../layout/Seo';
// import Categories from './categories/Categories';
import Gallery from './Gallery';
import Hero from './Hero';
import Testimonials from "./testimonials/Testimonials";



const  Home :React.FC = () => {


  return (
<Wrapper>
   <SEO title="Home" />
    <div className="grid-container">
        <Navbar/>
          <Hero/>
          {/* <Categories/> */}
          <Testimonials/>
          <Gallery/>      
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
      grid-template-columns: [full-start] minmax(14rem ,auto)  [col-start] repeat(12, minmax(min-content, 12rem)) minmax(14rem ,auto) [full-end];
      grid-column-gap: 3rem;


  }
 /* 1400px */
@media only screen and (max-width:87.5em) {
  .grid-container{
      grid-template-columns: [full-start] minmax(4rem ,auto)  [col-start] repeat(12, minmax(min-content, 12rem)) minmax(4rem ,auto) [full-end];
      grid-column-gap: 3rem;
    }

}
    /* 1200px */
  @media only screen and (max-width:75em) {
   
  }

/* 768px */
  @media only screen and (max-width:48em) {
    .grid-container{
      grid-template-columns: [full-start] minmax(1rem ,auto)  [col-start] repeat(12, minmax(min-content, 12rem)) minmax(1rem ,auto) [full-end];
      grid-column-gap: 1rem;
    }
  }



 
`