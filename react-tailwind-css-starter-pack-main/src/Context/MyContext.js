import { createContext, useState } from 'react';

export const MyContext = createContext("");


function AppContextProvider({children}){
    const[workTimerStatus,setWorkTimerStatus] =useState(false);

    const [accountType, setAccountType] = useState("Workbreak"); 
    const [workTimer,setWorkTimer]=useState(1500);
    const [shortBreakTimer,setShortBreakTimer]=useState(300);
    const[shortBreakTimerStatus,setShortBreakTimerStatus] =useState(false);
    const[takeShortBreak,setTakeShortBreak] =useState(false);

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
      takeShortBreak,
      setTakeShortBreak    
    };

    return <MyContext.Provider value={value}>

      {children}

    </MyContext.Provider>
}

export default AppContextProvider;