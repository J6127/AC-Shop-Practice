import { createContext, useState } from "react";
import {cartItems} from './Main/Cart/CartContext';

// Default paymentInfo state
const initialPaymentInfo = {
    cardHolderName: '',
    cardNumber: '',
    expiryDate: '',
    ccv: '',
  };
  
  const initialCartContext = {
    cartItems,
    total: 0,
    paymentInfo: initialPaymentInfo,
    setPaymentInfo: () => {},
  };
  export const CartContext = createContext(initialCartContext);
  
  export const CartProvider = ({ children }) => {
    const [paymentInfo, setPaymentInfo] = useState(initialPaymentInfo);
    const [cartItems, setCartItems] = useState(cartItems);
  
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
  
    // Compute total value from cart data
    const total = calculateSubtotal();
  
    return (
      <CartContext.Provider 
        value={{ 
          cartItems, 
          total, 
          paymentInfo, 
          setPaymentInfo,
          handlePlusClick,
          handleMinusClick
        }}>
        {children}
      </CartContext.Provider>
    );
  };