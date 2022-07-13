import React,{createContext, useState} from 'react'

export const Context = createContext();

const supportedLangs = ['FR','ES','EN'];
let browserLang = navigator.language.slice(0,2).toUpperCase();

if(supportedLangs.indexOf(browserLang) === -1){
    console.log("not supported");
    browserLang = 'EN';
}

const ContextProvider = props => {
    // const [lang, setLang] = useState('FR');
    const [lang, setLang] = useState(browserLang);

    const changeLang = changeLangs => {
        setLang(changeLangs)
    }

    return(
        <Context.Provider value={{lang, changeLang}}>
            {props.children}
        </Context.Provider>
    )

}

export default ContextProvider;

