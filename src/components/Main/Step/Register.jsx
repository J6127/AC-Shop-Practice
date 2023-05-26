import Address from './Step1';
import Shipping from './Step2';
import CreditCard from './Step3';
import StepProgress from '../StepProgress/StepProgress';

export default function Register(){
    return(
            <section
              className="register-container col col-lg-6 col-sm-12"
              data-phase="1"
              data-total-price="0"
            >
              <h2 className="register-title col col-11">結帳</h2>
              <StepProgress />
              <section className="form-container col col-12">
                <Address />
                <Shipping />
                <CreditCard />
              </section>
            </section>
          );
        }
