import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './components/Styles/main.scss'

function App() {
  const [step, setStep] = useState(1);  // 儲存當前的 step
  const handleNextClick = ()=>{
    if (step < 3)
    setStep(prevStep=> prevStep+1)
   } 
   const handlePreClick = () => {
    if (step > 1 )
    setStep(prevStep =>prevStep-1)
   }
   
  return (
    <div className="App">
      <Header />
      <Main step={step} 
      setStep={setStep}
      handleNextClick={handleNextClick}
      handlePreClick={handlePreClick}  /> 
      <Footer/>
    </div>
  );
}
//傳遞step,setStep到Main
export default App;