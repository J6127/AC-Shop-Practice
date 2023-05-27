import Register from './Step/Register';
import Cart from './Cart/Cart';
import ProgressControl from './ProgressControl/ProgressControl';


export default function Main ({step,setStep,handleNextClick,handlePreClick}){

  return(
    
    <main className="site-main">
      <div className="main-container">
        <Register step={step} setStep={setStep}/>
        <Cart />
        <ProgressControl
         step={step} 
         handleNextClick={handleNextClick}
         handlePreClick={handlePreClick}/>
      </div>
    </main>
  )
}
