import React from 'react';
import styled from 'styled-components';
import FetchOrderStatus from './FetchOrderStatus';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';
import SEO from '../layout/Seo';

interface Props {
    path: string;
  }
  
const  CheckOrderStatus :React.FC<Props> = () => {
  const description = "In this page the customer can enter the order id to check the order status."
  return (
<Wrapper>
    <SEO title="Order Status" description={description}/>
    <div className="grid-container">
        <Navbar/>
          <FetchOrderStatus/>
        <Footer/>
    </div>
</Wrapper>
);
};

export default CheckOrderStatus;


const Wrapper = styled.section`
    background-color:var(--clr-background-1);
     color:var(--clr-title-1); 
    
     .grid-container{
     
         display:  grid;
         grid-template-columns: [full-start] minmax(14rem ,auto)  [col-start] repeat(12, minmax(min-content, 12rem)) minmax(14rem ,auto) [full-end];
         gap:0 2rem;
       
     }


      
      /* 1200px-1025  */
    @media only screen and (max-width:75em) {
      .grid-container{
        grid-template-columns: [full-start] minmax(4rem ,auto)  [col-start] repeat(12, minmax(min-content, 12rem)) minmax(4rem ,auto) [full-end];
        grid-column-gap: 3rem;
      }
    }
    
      /* 1024px - 769px  */
    @media only screen and (max-width:64em) {
    
    }


  /* 768px  - 481*/
    @media only screen and (max-width:48em) {
      .grid-container{
        grid-template-columns: [full-start] minmax(1rem ,auto)  [col-start] repeat(12, minmax(min-content, 12rem)) minmax(1rem ,auto) [full-end];
        grid-column-gap: 1rem;
      }
    }


    
  

`