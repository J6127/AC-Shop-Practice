import { ReactComponent as RightArrow } from '../../../icons/right-arrow.svg';
import { ReactComponent as LeftArrow } from '../../../icons/left-arrow.svg';
import { useState } from 'react';
import Address from '../Step/Step1';
import Shipping from '../Step/Step2';
import CreditCard from '../Step/Step3';
// 這邊要用ReactComponent 不要直接引入會失效


export default function ProgressControl(){

const [phase, setPhase] =useState("address"); //預設值
function handleClickNext() {
if (phase === "address") setPhase ("shipping") 
else if (phase === "shipping") setPhase ("creditCard")   
};
function handleClickPrev(){
  if (phase === "shipping") setPhase ("address") 
  else if (phase ==="creditCard") setPhase ("shipping")   
  };

     return(
    <section className="progress-control-container col col-lg-6 col-sm-12">
      {phase === "address" && 
        <>
          <Address />
          <section className="button-group col col-12">
            <button className="next cursor-point" onClick={handleClickNext}>
              下一步   
              <RightArrow />
            </button>
          </section>
        </>
      }
      {phase === "shipping" && 
        <>
          <Shipping />
          <section className="button-group col col-12">
            <button className="prev" onClick={handleClickPrev}>
              <LeftArrow />
              上一步
            </button>
            <button className="next cursor-point" onClick={handleClickNext}>
              下一步
              <RightArrow />
            </button>
          </section>
        </>
      }
      {phase === "creditCard" && 
        <>
          <CreditCard />
          <section className="button-group col col-12">
            <button className="prev" onClick={handleClickPrev}>
              <LeftArrow />
              上一步
            </button>
            <button className="next">
              確認下單
            </button>
          </section>
        </>
      }
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
     
    
