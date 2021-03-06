import React from 'react';
import styled from 'styled-components';
import { ActionTypes, MenuProductCategory } from '../../../../context/Constants';
import { useHotburgerContext } from '../../../../context/hotburger/HotburgerContext';
import MeatBurgerModal from '../BeefBurgersMenu/MeatBurgerModal';
import ProductPageModal from '../ProductPageModal';



const  Modal :React.FC = () => {
    const {state:{menuCategory ,cart},dispatch} = useHotburgerContext()

    // console.log(cart)


    const resetClickedItem = () => {
      const isBrowser = typeof window !== "undefined"
       if (isBrowser) {
         
         document.body.style.overflow = 'auto';
       }
      dispatch({type:ActionTypes.RESET_CURRENT_ITEM_CLICKED,payload:{
        menuCategory:"",
        currentItemClicked:{
            title:"",
            description:"",
            imageUrl:"",
            menuCategory:"",
            price:0
        
        }
    }})
    }

    // console.log(menuCategory)
  return (
<Wrapper>

    {menuCategory.toUpperCase() === MenuProductCategory.BEEF_BURGER &&  <MeatBurgerModal   resetClickedItem ={resetClickedItem} />}
    {menuCategory.toUpperCase() === MenuProductCategory.CHICKEN_BURGER &&  <ProductPageModal   resetClickedItem ={resetClickedItem} />}
    {menuCategory.toUpperCase() === MenuProductCategory.BEAN_BURGER &&  <ProductPageModal   resetClickedItem ={resetClickedItem} />}
    {menuCategory.toUpperCase() === MenuProductCategory.BEVERAGES &&  <ProductPageModal   resetClickedItem ={resetClickedItem} />}
    {menuCategory.toUpperCase() === MenuProductCategory.DESSERT &&  <ProductPageModal   resetClickedItem ={resetClickedItem} />}
    {menuCategory.toUpperCase() === MenuProductCategory.FRIES &&  <ProductPageModal   resetClickedItem ={resetClickedItem} />}
    {menuCategory.toUpperCase() === MenuProductCategory.KID_MENU &&  <ProductPageModal   resetClickedItem ={resetClickedItem} />}
    {menuCategory.toUpperCase() === MenuProductCategory.SALAD &&  <ProductPageModal   resetClickedItem ={resetClickedItem} />}
    {menuCategory.toUpperCase() === MenuProductCategory.TURKEY_BURGER &&  <ProductPageModal   resetClickedItem ={resetClickedItem} />}
   
</Wrapper>
);
};

export default Modal;


const Wrapper = styled.div`


.modal-popup{
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color:rgba(0,0,0,0.5);
      z-index:3;     
    }

    .model-container{
    
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50%);
    width: 40%;
    height: 90vh;
    color:var( --clr-text-1);
    background-color:#fff;
    z-index: 4;
    padding:4rem;
    overflow-y: scroll;
    /* display: flex;
    flex-direction: column;
     justify-content:space-around; */

   
  }

/* 1400px */
  @media only screen and (max-width:87.5em) {
        .model-container{
      width: 60%;
    }
  }


      /* 1200px - 1025px */
      @media only screen and (max-width:75em) {
   
  }


  /* 1024px - 769px  */
  @media only screen and (max-width:64em) {
    .model-container{
      width: 80%;
    }

  }

 /*768px - 481px */
 @media only screen and (max-width:48em) {
  .model-container{
    width: 90%;
    }
 }
`