import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

export default function useCart (){
    const { cartItems, setCartItems } = useContext(CartContext);

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
   
    const handleMinusClick = (itemId) => {
      setCartItems((prevItems) =>
        prevItems.map((item) => {
          if (item.id === itemId && item.quantity > 0) { 
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
      );
    };

    const calculateSubtotal = () => {
      return cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    };
  
    return {
        cartItems,
        handlePlusClick,
        handleMinusClick,
        calculateSubtotal,
    };
}
