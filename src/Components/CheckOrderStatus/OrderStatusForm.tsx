import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import {getRandomNumberBetween, oderIdSchema} from '../../util/helpers';
import { AiFillCloseCircle } from "react-icons/ai";
import { useHotburgerContext } from '../../context/hotburger/HotburgerContext';
import { ActionTypes } from '../../context/Constants';


type UserSubmitForm  = { 
  orderId:string,
  question:string,
}


const value1 =getRandomNumberBetween(1,5)
const value2 =getRandomNumberBetween(1,5)
const total = value1 + value2

const  OrderStatusForm :React.FC = () => {
    const [errorMessage,setErrorMessage] = useState("");
    const {dispatch} = useHotburgerContext()

    const {
        register,
        handleSubmit,
        reset,
        getFieldState,
        getValues,
        setError,
        watch,
        formState: { errors }
      } = useForm<UserSubmitForm>({
        resolver: yupResolver(oderIdSchema)
      });
      
      
      const onSubmit = (formData: UserSubmitForm) => {
        if (+formData.question != total) {
          setErrorMessage("Answer is incorrect, please try again")
          return;
        }

       const {orderId} = formData
        const fetchOrder = async()=>{
          
            const request = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                orderId
              })
            }
              try {

                const res = await fetch("https://hotburger-app.herokuapp.com/api/check-order-status",request)
                const data = await res.json();
              
                if (data) {
                 
                    if (data.data === null) {
                        setErrorMessage("No order data found, please try again.")
                        return;
                    }
                  // console.log(data)

                  dispatch({type:ActionTypes.FETCH_ORDER ,payload:data})

                  
                }


                
              } catch (err:any) {
                
                  setErrorMessage(err.message)
              }    
        
    }
    fetchOrder()

      }

     let displayError = (
        <div className="error-container">
            <AiFillCloseCircle className="icon-error" />
            <p className="error-message">{errorMessage}</p>
        </div>
     )


  return (
<Wrapper>
    {errorMessage && displayError}
   <form onSubmit={handleSubmit(onSubmit)} className="form">
            {/* {response.success && displaySuccess } */}
           <label htmlFor="Order Id">Order ID*</label>
           <input type="text"  {...register('orderId')}  className={`form-control ${errors.orderId ? 'is-invalid' : ''}`}  />
           {errors.orderId  ? <p className="error-text">{errors.orderId.message}</p>   :  <p className="error-ghost">No Error</p>}  

           <label htmlFor="question">What is {value1} + {value2}?*</label>
           <input  type="text"  {...register('question')}  className={`form-control ${errors.question ? 'is-invalid' : ''}`}/>
            {errors.question  ? <p className="error-text">{errors.question.message}</p>   : errorMessage  ? <p className="error-text">{errorMessage}</p>  : <p className="error-ghost">No Error</p>}
            

            <button className="btn-cta" type="submit">Find order</button>
        </form>
</Wrapper>
);
};

export default OrderStatusForm;


const Wrapper = styled.div`
  width: 100%;
label{
      display: block;
    font-family: var(--ff-primary-2);
    font-weight: 500;
    font-size: 1.8rem;
    margin-bottom:0.5rem;
    }
    
    input{
      height: 3.5rem;
      margin: 0.3rem 0;
      /* width: 20rem; */
      width: 100%;
    }

    .form{
      position: absolute;
     top: 50%;
    left: 50%;
    transform: translate( -50%, -50%);
    width: 60%;
    /* padding-top: 10rem; */
    }

    button{
      width: 100%;
    }

    .error-text{
    font-size: 1.7rem;
    font-weight: bold;
    color:#ff1616;
    margin-bottom: 0.5rem;
  }

  .error-ghost{
    font-size: 1.7rem;
    margin-bottom: 0.5rem;
    opacity: 0;
  
  }

  .icon-error{
    margin-top: 4rem;
    font-size: 8rem;
    color: var( --clr-error-1);
  }

  .error-container{
    text-align: center;
  

  }
.error-message{
    font-size: 1.7rem;
}

    /* 480px -  320px  */
    @media only screen and (max-width:30em) {
      .error-message{
    font-size: 1.5rem;
    }
    .form{
        
        padding-top: 6rem;
        width: 80%;
        /* padding-top: 10rem; */
        }

        .icon-error{
        margin-top: 2rem;
        font-size: 6rem;
        
      }
    }

`