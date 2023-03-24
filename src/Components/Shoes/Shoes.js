import React, { useContext } from "react";
import CartContext from "../store/CartContext";
import ShoeItem from './ShoesItem'

const Shoes = () => {
    const crtContxt = useContext(CartContext);

    const largeHandler = (item,size) => {
        crtContxt.addToCart(item,size);
    }
    const mediumHandler = (item,size) => {
        crtContxt.addToCart(item,size);
    }
    const smallHandler = (item,size) => {
        crtContxt.addToCart(item,size);
    }
    
    const menuOfShoes = crtContxt.menuItems.map((item) => (
        <ShoeItem
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            quantityLarge={item.quantityLarge}
            quantityMedium={item.quantityMedium}
            quantitySmall={item.quantitySmall}
            onLargeRemove={largeHandler.bind(null, item,"large")}
            onSmallRemove={smallHandler.bind(null, item,"small")}
            onMediumRemove={mediumHandler.bind(null, item,"medium")}/>
    
));

    return (
        <React.Fragment>
            {menuOfShoes}
        </React.Fragment>

    )
}

export default Shoes;
