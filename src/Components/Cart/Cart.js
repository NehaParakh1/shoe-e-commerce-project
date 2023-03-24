import React, {useContext} from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import CartContext from '../store/CartContext';

const Cart =(props) => {
    const cartCtx = useContext(CartContext);

  const hasItems = cartCtx.cartItems.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.cartItems.map((item) => (
        <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            quantityMedium={item.quantityMedium}
            quantityLarge={item.quantityLarge}
            quantitySmall={item.quantitySmall} 
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            />
      ))}
    </ul>
  );
    return <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Toatl Amount</span>
            <span>{cartCtx.finalPrice}</span>
        </div>
        <div className={classes.actions}>
            <button onClick={props.onClose} className={classes['button--alt']}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
}

export default Cart;