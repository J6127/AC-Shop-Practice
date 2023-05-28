import { createContext,useState } from "react";

export const CreditCardContext =createContext();

export function CreditCardProvider({ children }) {
    const [cardInfo, setCardInfo] = useState({
      cardHolder: '',
      cardNumber: '',
      expiryDate: '',
      ccv: '',
})

return (
    <CreditCardContext.Provider value={{...cardInfo,setCardInfo}}>
        {children}
    </CreditCardContext.Provider>
)};
