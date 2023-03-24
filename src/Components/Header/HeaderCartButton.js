import React, {useContext} from 'react';
import CartContext from '../store/CartContext';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const numofCartItems = cartCtx.totalAmount;
    return (
        <button onClick={props.onClick} className={classes.button}>
            <span className={classes.icon}><CartIcon/></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numofCartItems}</span>
        </button>
    )
}

export default HeaderCartButton;