import React from "react";

const ShoeItem=(props)=>{

return(
    <div>
        <div>{props.name}</div>
        <div>{props.description}</div>
        <div>{props.price}</div>
        <div>
            <button onClick={props.onLargeRemove}>Buy large {props.quantityLarge}</button>
            <button onClick={props.onMediumRemove}>Buy medium {props.quantityMedium}</button>
            <button onClick={props.onSmallRemove}>Buy small{props.quantitySmall}</button>
        </div>
    </div>
)
}

export default ShoeItem;
