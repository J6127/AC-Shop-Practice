import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import StepProgress from '../StepProgress/StepProgress';

export default function Register({step,setStep}){
    return(
            <section
              className="register-container col col-lg-6 col-sm-12"
              data-phase={step}
              data-total-price="0"
            >
              <h2 className="register-title col col-11">結帳</h2>
              <StepProgress step={step}/>
              <section className="form-container col col-12">
                {step === 1 && <Step1  />}
                {step === 2 && <Step2 />}
                {step === 3 &&<Step3 />}
              </section>
            </section>
          );
        }
