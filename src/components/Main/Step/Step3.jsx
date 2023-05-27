export default function CreditCard() {
    return (
                    <form class="col col-12" data-phase="credit-card">
              <h3 class="form-title">付款資訊</h3>
              <section class="form-body col col-12">
                <div class="col col-12">
                  <div class="input-group input-w-lg-4 input-w-sm-full">
                    <div class="input-label">持卡人姓名</div>
                    <input type="text" placeholder="John Doe" />
                  </div>
                </div>
                <div class="col col-12">
                  <div class="input-group input-w-lg-4 input-w-sm-full">
                    <div class="input-label">卡號</div>
                    <input type="text" placeholder="1111 2222 3333 4444" />
                  </div>
                </div>
                <div class="col col-12">
                  <div class="input-group input-w-lg-3 input-w-sm-s3">
                    <div class="input-label">有效期限</div>
                    <input type="text" placeholder="MM/YY" />
                  </div>
                  <div class="input-group input-w-lg-3 input-w-sm-s3">
                    <div class="input-label">CVC / CCV</div>
                    <input type="text" placeholder="123" />
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