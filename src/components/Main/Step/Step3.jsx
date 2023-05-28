import { useContext } from 'react';
import { CreditCardContext} from '../../Context/CreditCardContext';

export default function CreditCard() {
  const { setCardInfo } = useContext (CreditCardContext);
  const handleInputChange = (e)=>{
    const {name,value}= e.target;
    setCardInfo((prevInfo)=>({...prevInfo,[name]:value}));
  };
    return (
                    <form className="col col-12" data-phase="credit-card">
              <h3 className="form-title">付款資訊</h3>
              <section className="form-body col col-12">
                <div className="col col-12">
                  <div className="input-group input-w-lg-4 input-w-sm-full">
                    <div className="input-label">持卡人姓名</div>
                    <input type="text" placeholder="John Doe" name="cardHolder" onChange={handleInputChange}/>
                  </div>
                </div>
                <div className="col col-12">
                  <div className="input-group input-w-lg-4 input-w-sm-full">
                    <div className="input-label">卡號</div>
                    <input type="number" placeholder="1111 2222 3333 4444" name="cardNumber" onChange={handleInputChange}/>
                  </div>
                </div>
                <div className="col col-12">
                  <div className="input-group input-w-lg-3 input-w-sm-s3">
                    <div className="input-label">有效期限</div>
                    <input type="month" placeholder="MM/YY" name="expiryDate" onChange={handleInputChange}/>
                  </div>
                  <div className="input-group input-w-lg-3 input-w-sm-s3">
                    <div className="input-label">CVC / CCV</div>
                    <input type="number" placeholder="123" name="ccv" onChange={handleInputChange} />
                  </div>
                </div>
              </section>
            </form>
    )
}

/*{    
    import { useContext, useState } from "react";
import { CartContext } from "../Cart/CartContext";

export default function CreditCard() {
    //拿資料
    const { paymentInfo, setPaymentInfo} = useContext(CartContext);
    const [formInfo, setFormInfo] = useState(paymentInfo);

    const handleInputChange =({target: {name, value}}) => {
        setFormInfo((prevFormInfo)=> ({...prevFormInfo, [name]:value}));
    }
    const handleFormSubmit = (event) =>{
        event.preventDefault();
       setPaymentInfo(formInfo);
    }; 
    return (    <section className="form-container col col-12">
        <form className="col col-12" data-phase="credit-card"onSubmit ={handleFormSubmit} >
            <h3 className="form-title">付款資訊</h3>
            <section className="form-body col col-12">
                <div className="col col-12">
                    <div className="input-group input-w-lg-4 input-w-sm-full">
                        <Step3Info
                        name="cardHolderName"
                        label="持卡人姓名"
                        placeholder="John Doe"
                        value={formInfo.cardHolderName}
                        onChange={handleInputChange}
                        /> 
                        </div>
                        </div>
                        <div className="col col-12">
                        <div className="input-group input-w-lg-4 input-w-sm-full">
                        <Step3Info
                        name="cardNumber"
                        label="卡號"
                        placeholder="1111 2222 3333 4444"
                        value={formInfo.cardNumber}
                        onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="col col-12">
                    <div className="input-group input-w-lg-3 input-w-sm-s3">
                       <Step3Info
                       name="expiryDate"
                       label="有效期限"
                       placeholder="MM/YY"
                       value={formInfo.expiryDate}
                       onChange={handleInputChange}
                       />
                       </div>
                       </div>
                       <div className="col col-12">
                    <div className="input-group input-w-lg-3 input-w-sm-s3">
                       <Step3Info
                       name="ccv"
                       label ="CVC / CCV"
                       placeholder="123"
                       value={formInfo.ccv}
                       onChange={handleInputChange}
                       />
                </div>
                </div>
            </section>
        </form>
        </section>}*/