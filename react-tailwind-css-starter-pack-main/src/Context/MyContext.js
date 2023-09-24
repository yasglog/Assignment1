import { createContext, useState } from 'react';

export const MyContext = createContext("");


function AppContextProvider({children}){
    const[workTimerStatus,setWorkTimerStatus] =useState(false);

    const [accountType, setAccountType] = useState("student"); 
    const [workTimer,setWorkTimer]=useState(10);
    const [shortBreakTimer,setShortBreakTimer]=useState(300);
    const[shortBreakTimerStatus,setShortBreakTimerStatus] =useState(false);
    const[takShortBreak,setTakShortBreak] =useState(false);

    const value={
      workTimerStatus,
      setWorkTimerStatus,
      accountType,
      setAccountType,
      workTimer,
      setWorkTimer,
      shortBreakTimer,
      setShortBreakTimer,
      shortBreakTimerStatus,
      setShortBreakTimerStatus,
      takShortBreak,
      setTakShortBreak    
    };

    return <MyContext.Provider value={value}>

      {children}

    </MyContext.Provider>
}

export default AppContextProvider;