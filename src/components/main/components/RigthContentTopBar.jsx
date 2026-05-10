import { CgDarkMode } from "react-icons/cg";
import { IoLogOut } from "react-icons/io5";

import {useTheme} from '../../../contexts/ThemeContext'

import "./RigthContentTopBar.css"

const RigthContentTopBar = ({logout}) => {

    const {toggleTheme} = useTheme()

    return (
        <div className='rigthTopBar'>
            <CgDarkMode
                onClick={toggleTheme}
                className='bt-theme'
            />
    
            <button 
                className='bt-logout'
                onClick={logout}
            >
                Logout 
                <IoLogOut/>
            </button>
        </div>
    );
}

export default RigthContentTopBar;
