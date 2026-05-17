import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import UserName from './components/UserName';
import ErrorPopUp from '../Errors/ErrorPopUp';
import RigthContentTopBar from './components/RigthContentTopBar';

const MainTopBar = () => {

    const {
            user,
            errMsg,
            setErrMsg,
            logout
    } = useContext(AuthContext)

    return (
        <div style={style.divBar}>
            <ErrorPopUp 
                errMsg={errMsg} 
                setErrMsg={setErrMsg} 
            />
            <UserName 
                user={user} 
            />
            <RigthContentTopBar logout={logout} />
        </div>
    );
}

const style = {
    divBar:{
        height:"35px",
        borderBottom:"1px solid  var(--border)",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        position:"relative"
    }
}

export default MainTopBar;
