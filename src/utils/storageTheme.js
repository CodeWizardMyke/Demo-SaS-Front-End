
export const storageTheme = (value) => { 

    if(!value){
        return false;
    }

    localStorage.setItem("theme", value);

    return true;

};


export const getStorageTheme = () => { 

    const theme = localStorage.getItem("theme");

    return theme;

};