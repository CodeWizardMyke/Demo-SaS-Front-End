import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import UserMenu from './UserMenu';
import ErrorPopup from '../Error/ErrorPopup';
import HeaderActions from './HeaderActions';

import "./Header.css"


const Header = () => {

    const {
            user,
            errMsg,
            setErrMsg,
            logout
    } = useContext(AuthContext)

    return (
        <div style={style.divBar}>
            <ErrorPopup 
                errMsg={errMsg} 
                setErrMsg={setErrMsg} 
            />
            <UserMenu 
                user={user} 
            />
            <HeaderActions logout={logout} />
        </div>
    );
}

const style = {
    divBar:{
        height:"35px",
        borderBottom:"1px solid  var(--border)",
        backgroundColor: "var(--bgPanel)",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        position:"relative"
    }
}

export default Header;
