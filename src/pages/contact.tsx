import React from 'react';
import styled from 'styled-components';
import Contact from '../components/Contact';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';

const  contact :React.FC = () => {

  return (
<Wrapper>
  <div className="grid-container">
     <Navbar/>
      <Contact/>
      <Footer/>
    </div>
</Wrapper>
);
};

export default contact;


const Wrapper = styled.section`
  background-color:var(--clr-background-1);
  color:var(--clr-title-1);


     .grid-container{
      display:  grid;
      grid-template-columns: [full-start] minmax(14rem ,auto)  [col-start] repeat(12, minmax(min-content, 12rem)) minmax(14rem ,auto) [full-end];
      grid-column-gap: 3rem;
     }
      

              /* 1200px */
  @media only screen and (max-width:75em) {
    .grid-container{
      grid-template-columns: [full-start] minmax(4rem ,auto)  [col-start] repeat(12, minmax(min-content, 12rem)) minmax(4rem ,auto) [full-end];
      grid-column-gap: 3rem;
    }
  }

/* 768px */
  @media only screen and (max-width:48em) {
    .grid-container{
      grid-template-columns: [full-start] minmax(1rem ,auto)  [col-start] repeat(12, minmax(min-content, 12rem)) minmax(1rem ,auto) [full-end];
      grid-column-gap: 1rem;
    }
  }


`