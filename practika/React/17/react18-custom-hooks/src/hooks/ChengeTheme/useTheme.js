import React, {useEffect, useState} from 'react';
import styles from './themes.module.css'
export const useTheme = () => {
    const [theme,setNewTheme] = useState(styles.default)

    const setTheme = (currentTheme)=>{
        setNewTheme(styles[currentTheme])
    }

    return {theme,setTheme}
};