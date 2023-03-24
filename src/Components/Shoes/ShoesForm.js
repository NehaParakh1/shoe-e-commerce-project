import React, { useContext, useState } from "react";
import CartContext from "../store/CartContext";

const ShoeForm = () => {
    const crtContxt = useContext(CartContext);
    const[shoename, setShoename]=useState('');
  const[shoeDescr, setDescription]=useState('');
  const[shoePrice, setPrice]=useState('');
  const[sizeL, setSizeL]=useState('');
  const[sizeM, setSizeM]=useState('');
  const[sizeS, setSizeS]=useState('');

    const submitFormHandler = (event) => {
        event.preventDefault();

        const tobeAddProduct = {
            id: Math.random().toString(),
            name: shoename,
            description: shoeDescr,
            price: Number(shoePrice),
            quantityLarge: Number(sizeL),
            quantityMedium: Number(sizeM),
            quantitySmall: Number(sizeS),
        }
        crtContxt.addItem(tobeAddProduct);

            setShoename('');
            setDescription('');
            setPrice('');
            setSizeL('');
            setSizeM('');
            setSizeS('');
    };

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

    return (
        <form onSubmit={submitFormHandler} style={{ display: "flex", marginTop:'120px' }}>
            <div>
                <label>Shoe name</label>
                <input onChange={shoeChangeHandler} id="shoeName" type="text"></input>
            </div>

            <div>
                <label>Description</label>
                <input onChange={descriptionChangeHandler} id="shoeDescr" type="text"></input>
            </div>
            <div>
                <label>price</label>
                <input onChange={priceChangeHandler} id="shoePrice" type="number"></input>
            </div>
            <div>
                <label>Size L</label>
                <input onChange={sizeLChangeHandler} id="shoeL" type="number"></input>
            </div>
            <div>
                <label>Size M</label>
                <input onChange={sizeMChangeHandler} id="shoeM" type="number"></input>
            </div>
            <div>
                <label >Size S</label>
                <input onChange={sizeSChangeHandler} id="shoeS" type="number"></input>
            </div>

            <button type="submit">Add Product</button>
        </form>
    )
};
export default ShoeForm;
