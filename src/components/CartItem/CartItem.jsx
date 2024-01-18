import React, { useContext } from 'react';
import './CartItem.css';
import { BsCartDashFill } from 'react-icons/bs';
import formatCurrency from '../../utils/formatCurrency';
import propTypes from 'prop-types';
import AppContext from '../../context/AppContext';

function CartItem({data}) {

  
  const { id, title, thumbnail, price} = data;
  const { cartItems, setCartItems} = useContext(AppContext);
  
  const removeItemCart = () => {
    const removeItemCart = cartItems.filter(item => item.id != id);
    setCartItems(removeItemCart);
  };

  return (
    <section className="cart-item">
      <img src={thumbnail} alt="Imagem do Produto"
        className="cart-item-image"></img>
      
      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price)}</h3>
        <button
          type="button"
          className="button__remove-item"
          onClick={removeItemCart}
        ><BsCartDashFill /></button>
      </div>
    </section>
  );
}

export default CartItem;

CartItem.propTypes = {
  data: propTypes.object
}.isRequired;
