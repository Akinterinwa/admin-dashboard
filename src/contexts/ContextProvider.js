import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor ] = useState('#03c9d7');

    const [currentMode, setCurrentMode ] = useState('light');
    const [ themeSettings, setThemeSettings] = useState(false);

    const setMode = (e) => {
        setCurrentColor(e.target.value);

        localStorage.setItem('colorMode', e.target.value);
    }

    const setColor = (e) => {
        setCurrentMode(e.target.value);

        localStorage.setItem('themeMode', e.target.value);
    }


    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true });
    }

    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize, setScreenSize,
                currentColor, currentMode,
                setCurrentColor, setCurrentMode,
                themeSettings, setThemeSettings
            }}
        >
            {children}

        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);