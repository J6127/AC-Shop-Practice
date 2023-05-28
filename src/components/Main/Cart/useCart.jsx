import { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';

export function useCart (){
    const {cartItems: initialCart } = useContext(CartContext);
    const [cartItems,setCartItems] = useState (initialCart);
  //加
    const handlePlusClick = (itemId) => {
      setCartItems((prevItems) =>
        prevItems.map((item) => {
          if (item.id === itemId) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        })
      );
    };
   //減 
    const handleMinusClick = (itemId) => {
      setCartItems((prevItems) =>
        prevItems.map((item) => {
          if (item.id === itemId && item.quantity > 0) { //要歸零
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
      );
    };
  //總計
    const calculateSubtotal = () => {
      return cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    };
  
    return{
        cartItems,
        handlePlusClick,
        handleMinusClick,
        calculateSubtotal,
    };
    }
export default useCart;