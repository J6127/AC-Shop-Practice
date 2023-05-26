import StepProgress from '../StepProgress/StepProgress';
import { useState } from 'react';

export default function Register(){
  const [phase, setPhase] = useState ("address");//修改定義phase
  
    return(
            <section
              className="register-container col col-lg-6 col-sm-12"
              data-phase="1"
              data-total-price="0"
            >
              <h2 className="register-title col col-11">結帳</h2>
              <StepProgress phase ={phase} setPhase={setPhase}/>
              <section className="form-container col col-12">
              
              </section>
            </section>
          );
        }
