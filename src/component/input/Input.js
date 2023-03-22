import React, { useState } from 'react'
import classes from './Input.module.css'



const Input=(props)=>{
const[shoename, setShoename]=useState('');
  const[description, setDescription]=useState('');
  const[price, setPrice]=useState('');
  const[sizeL, setSizeL]=useState('');
  const[sizeM, setSizeM]=useState('');
  const[sizeS, setSizeS]=useState('');

const addItemHandler=(e)=>{
    e.preventDefault();

    const inputData={
        id:Math.random().toString(),
            shoename: shoename,
            description: description,
            price: price,
            sizeL: sizeL,
            sizeM: sizeM,
            sizeS: sizeS    
        }
        props.onAddInput(inputData)

console.log(inputData);

setShoename('');
setDescription('');
setPrice('');
setSizeL('');
setSizeM('');
setSizeS('');

}

const shoeChangeHandler=(e)=>{
    setShoename(e.target.value)
}
const descriptionChangeHandler=(e)=>{
    setDescription(e.target.value)
}
const priceChangeHandler=(e)=>{
    setPrice(e.target.value)
}
const sizeLChangeHandler=(e)=>{
    setSizeL(e.target.value)
}
const sizeMChangeHandler=(e)=>{
    setSizeM(e.target.value)
}
const sizeSChangeHandler=(e)=>{
    setSizeS(e.target.value)
}


return(
  <>
  <form onSubmit={addItemHandler}>
  <div className={classes.relative}>
    
        <label>Shoe Name:</label>
        <input onChange={shoeChangeHandler} id="text1" value={shoename} type="text" required />
        <label>Description:</label>
        <input onChange={descriptionChangeHandler} id="text2" value={description} type="text" required  />
        <label>Price:</label>
        
        <input onChange={priceChangeHandler} id="text3" value={price} type="number" required />
        
        <label>Quantity Available: </label>
        <label>L</label>
        <input onChange={sizeLChangeHandler} id="text4" value={sizeL} type="number" min='0' max='999' required />
        <label>M</label>
        <input onChange={sizeMChangeHandler} id="text5" value={sizeM} type="number" min='0' max='999' required />
        <label>S</label>
        <input onChange={sizeSChangeHandler} id="text6" value={sizeS} type="number" min='0' max='999' required />
        

        <button className={classes.gap} type="submit"> Add Product</button>
       
        </div> 
        </form>
        
    
 </>
)
}

export default Input;