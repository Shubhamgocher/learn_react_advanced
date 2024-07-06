import React,{createContext,useContext} from 'react'

export const ThemeContext=createContext({
    themeMode:"",
    lightTheme:()=>{},
    darkTheme:()=>{}
});
export const ThemeProvider=ThemeContext.Provider;
export const useTheme=()=>{
    return useContext(ThemeContext);
};


