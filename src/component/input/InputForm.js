import React, { useContext } from 'react';
import classes from './InputForm.module.css'
import CartContext from '../store/cart-context';


const InputForm=(props)=>{
  const cartctx=useContext(CartContext);

const addToCartHandler=()=>{
  console.log(itemId)
  console.log(props.details);
}


    return(
       
         <ul className={classes.input}>
        
        {props.details.map((input) => (
            
        <li key={input.id}>
            {input.name} {input.description} ${input.price}  
          <button className={classes.list} onClick={addToCartHandler}>Add sizeL {input.sizeL}</button> 
          <button className={classes.list} onClick={addToCartHandler}>Add sizeM {input.sizeM}</button> 
          <button className={classes.list} onClick={addToCartHandler}>Add sizeS {input.sizeS}</button> 
        </li>
        ))}
  
    </ul>
   
    )
}



export default InputForm;