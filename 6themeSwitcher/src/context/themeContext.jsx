import React , {useContext , createContext , useState, useEffect} from "react";

const themeContext = createContext({
    themeMode: 'light',
    lightTheme: () =>{},
    darkTheme : () =>{}
});

export function ThemeProvider({children}) {
    const [themeMode , setThemeMode] = useState('light');
      const lightTheme = () =>{
        setThemeMode('light');
      }
      const darkTheme = () =>{
        setThemeMode('dark');
      }

      
  useEffect(()=>{
    document.querySelector('html').classList.remove('light' , 'dark');
    document.querySelector('html').classList.add(themeMode);
  },[themeMode])
    return (
        <themeContext.Provider value={{themeMode, lightTheme , darkTheme}}>
            {children}
        </themeContext.Provider>
    )
}

export function useTheme() {
    return useContext(themeContext);
}

