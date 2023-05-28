import { ReactComponent as Minus } from '../../../icons/minus.svg';
import { ReactComponent as Plus } from '../../../icons/plus.svg';
//import { useState } from 'react';
//import {useContext } from 'react';
//import { CartContext } from '../../Context/CartContext';
import useCart from './useCart';

export default function Cart (){
  const {cartItems, handleMinusClick,handlePlusClick, calculateSubtotal}= useCart();
  //const [cartItems,setCartItems] = useState (cartData);
  //const {cartItems,setCartItems} = useContext(CartContext);

  
return (
  <section className="cart-container col col-lg-5 col-sm-12">
  <h3 className="cart-title">購物籃</h3>
  <section className="product-list col col-12" data-total-price={calculateSubtotal()}>
    {
      cartItems.map ((item)=>(
        <div 
          className="product-container col col-12" 
          data-count={item.quantity} 
          data-price={item.price}
          id={item.id}
          key={item.id}
        >
          <img className="img-container" src={item.img} alt="" />
          <div className="product-info">
            <div className="product-name">{item.name}</div>
            <div className="product-control-container">
              <div className="product-control">
                <Minus className="product-action minus" onClick={() => handleMinusClick(item.id)} />
                <span className="product-count">{item.quantity}</span>
                <Plus className="product-action plus" onClick={() => handlePlusClick(item.id)} />
              </div>
            </div>
            <div className="price">${item.price * item.quantity}</div>
          </div>
        </div>
      ))
    }
  </section>
  <section className="cart-info shipping col col-12">
    <div className="text">運費</div>
    <div className="price">免費</div>
  </section>
  <section className="cart-info total col col-12">
    <div className="text">小計</div>
    <div className="price">${calculateSubtotal()}</div>
  </section>
</section>
)
}