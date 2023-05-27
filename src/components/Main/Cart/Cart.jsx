import { ReactComponent as Minus } from '../../../icons/minus.svg';
import { ReactComponent as Plus } from '../../../icons/plus.svg';
import { useState } from 'react';

//test info
const cartData = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]

export default function Cart (){
  const [cartItems,setCartItems] = useState (cartData);

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
        if (item.id === itemId && item.quantity > 0) { //要歸零
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
    <div className="price"></div>
  </section>
  <section className="cart-info total col col-12">
    <div className="text">小計</div>
    <div className="price">${calculateSubtotal()}</div>
  </section>
</section>
)
}