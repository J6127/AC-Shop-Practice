import  {ReactComponent as RightArrow } from '../../../icons/right-arrow.svg';
import { ReactComponent as LeftArrow } from '../../../icons/left-arrow.svg';
// 這邊要用ReactComponent 不要直接引入
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { CreditCardContext } from '../../Context/CreditCardContext';

const NextStepChange = ({handleNextClick}) => {
  return (
    <button className="next cursor-point" onClick={handleNextClick}>
      下一步
      <RightArrow />
    </button>
  )
}

const PreStepChange = ({handlePreClick}) => {
  return (
    <button className="prev cursor-point" onClick={handlePreClick}>
      <LeftArrow />
      上一步
    </button>
  )
}
export default function ProgressControl({step, handleNextClick,handlePreClick}) {
const {cartItems} =useContext(CartContext);
const {cardHolder, cardNumber, expiryDate, ccv} =useContext(CreditCardContext);
const handleOrderConfirmation =()=>{
  console.log('Card Holder',cardHolder);
  console.log('Card Number',cardNumber);
  console.log('Expiry Date',expiryDate);
  console.log('CCV',ccv);
  const cartTotal= cartItems.reduce(
    (total, item) => total+item.price* item.quantity,0);
    console.log('Cart Total',cartTotal);
};

  return(
    <section className="progress-control-container col col-lg-6 col-sm-12">
    {step === 1 && (
      <section className="button-group col col-12" data-phase={step}>
        <NextStepChange handleNextClick={handleNextClick} />
      </section>
    )}
    
    {step  === 2 && (
      <section className="button-group col col-12" data-phase={step}>
        <PreStepChange handlePreClick={handlePreClick} />
        <NextStepChange handleNextClick={handleNextClick} />
      </section>
    )}

    {step === 3 && (
      <section className="button-group col col-12" data-phase={step}>
        <PreStepChange handlePreClick={handlePreClick} />
        <button className="next cursor-point" onClick={handleOrderConfirmation}>
          確認下單
        </button>
      </section>
    )}
  </section>
  
  )
}
  



        {/* <section className="button-group col col-12" data-phase="shipping">
          <button className="prev">
            <svg className="cursor-point">
              <use xlinkHref="#svg-icon-left-arrow"></use>
            </svg>
            上一步
          </button>
          <button className="next">
            下一步
            <svg className="cursor-point">
              <use xlinkHref="#svg-icon-right-arrow"></use>
            </svg>
          </button>
        </section> */}
        {/* <section className="button-group col col-12" data-phase="credit-card">
          <button className="prev">
            <svg className="cursor-point">
              <use xlinkHref="#svg-icon-left-arrow"></use>
            </svg>
            上一步
          </button>
          <button className="next">
            確認下單
          </button>
        </section> */}
     
    
