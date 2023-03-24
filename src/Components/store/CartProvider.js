import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
    const [shoes, setShoes] = useState([]);
    const [cartItemArray, setCartItemArray] = useState([]);
    const [totalQuant,setTotalQuantity]=useState(0);
    const [finalPrice,setFinalPrice]=useState(0);

    const addItemHandler = (item) => {
        setShoes((prev) => {

            return [...prev, item]
        });

    };

const addToCartHandler=(item,size)=>{
    setFinalPrice((prev) => prev+item.price);
    const remIndex=cartItemArray.findIndex((ele)=> ele.id===item.id);
    const remIndexItem=cartItemArray[remIndex];
    const mIndexItem=shoes[remIndex];
    const shoeIndexItem = shoes.findIndex((ele)=> ele.id === item.id);
    const reqShoe = shoes[shoeIndexItem];
    console.log(reqShoe)
    if(remIndexItem){
        if(size==="large" && item.quantityLarge>0){
            setCartItemArray((prev)=>{
                prev[remIndex]={...remIndexItem,
                           quantityLarge: remIndexItem.quantityLarge+1,
                        }
                        return [...prev];
            });
            setShoes((prev)=>{
                prev[remIndex]={...mIndexItem,
                    quantityLarge:mIndexItem.quantityLarge-1,
                 }
                 return [...prev];
            });
            setTotalQuantity(totalQuant+1);
            
        }
        
        if(size==="small" && item.quantitySmall>0){
            setCartItemArray((prev)=>{
                prev[remIndex]={...remIndexItem,
                           quantitySmall: remIndexItem.quantitySmall+1,
                        }
                        return [...prev];
            });
            setShoes((prev)=>{
                prev[remIndex]={...mIndexItem,
                    quantitySmall: mIndexItem.quantitySmall-1
                 }
                 return [...prev];
            });
            setTotalQuantity(totalQuant+1);
        }
      
        
        if(size==="medium" && item.quantityMedium>0){
            setCartItemArray((prev)=>{
                prev[remIndex]={...remIndexItem,
                           quantityMedium: remIndexItem.quantityMedium+1,
                        }
                        return [...prev];
            });
            setShoes((prev)=>{
                prev[remIndex]={...mIndexItem,
                    quantityMedium: mIndexItem.quantityMedium-1,
                 }
                 
                 return [...prev];
            });

            setTotalQuantity(totalQuant+1);
        }
        else if(size==="large" && item.quantityLarge===0){
            alert('Out of stock')
        }
        else if(size==="medium" && item.quantityMedium===0){
            alert('Out of stock')
        }
        else if(size==="small" && item.quantitySmall===0){
            alert('Out of stock')
        }
        
    }
    else{
        
if(size==="large" && item.quantityLarge>0){
    const inTheCart={...item,quantityLarge:1,quantityMedium:0,quantitySmall:0}
    setCartItemArray((prev)=>{
        return [...prev,inTheCart]
    });
    setShoes((prev)=>{
        prev[shoeIndexItem]={...reqShoe,
            quantityLarge: reqShoe.quantityLarge-1,
         }
         return [...prev];
    });
    setTotalQuantity(totalQuant+1);
}

if(size==="small" && item.quantitySmall>0){
    const inTheCart={...item,quantityLarge:0,quantityMedium:0,quantitySmall:1}
    setCartItemArray((prev)=>{
        return [...prev,inTheCart]
    });
    setShoes((prev)=>{
        prev[shoeIndexItem]={...reqShoe,
            quantitySmall: reqShoe.quantitySmall-1,
         }
         return [...prev];
    });
    setTotalQuantity(totalQuant+1);
}

if(size==="medium" && item.quantityMedium>0){
    const inTheCart={...item,quantityLarge:0,quantityMedium:1,quantitySmall:0}
    setCartItemArray((prev)=>{
        return [...prev,inTheCart]
    });
    setShoes((prev)=>{
        prev[shoeIndexItem]={...reqShoe,
            quantityMedium: reqShoe.quantityMedium-1,
         }
         return [...prev];
    });
    setTotalQuantity(totalQuant+1);
}
    }
}

const removeItemHandler = (id) => {
    const findCartItem = cartItemArray.find((ele)=> ele.id===id);
    const findShoeItem = shoes.find((ele)=> ele.id === id);
    console.log(findCartItem, findShoeItem)
    findShoeItem.quantityLarge += findCartItem.quantityLarge;
    findShoeItem.quantitySmall += findCartItem.quantitySmall;
    findShoeItem.quantityMedium += findCartItem.quantityMedium;
    setTotalQuantity((prev)=> {return prev - (findCartItem.quantityLarge+findCartItem.quantitySmall+findCartItem.quantityMedium)})
    setFinalPrice((prev) => prev - findCartItem.price*(findCartItem.quantityLarge+findCartItem.quantitySmall+findCartItem.quantityMedium))
    const copyItems = cartItemArray.filter(item=>item.id!==id);
    setCartItemArray([...copyItems]);
}
    const cartContext = {
        menuItems : shoes,
        cartItems : cartItemArray,
        totalAmount : totalQuant,
        finalPrice :  finalPrice,
        addItem : addItemHandler,
        addToCart : addToCartHandler,
        removeItem: removeItemHandler
    }
    
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;