import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import UserName from './components/UserName';

const MainTopBar = () => {

    const {user} = useContext(AuthContext)

    return (
        <div style={style.divBar}>
            <UserName user={user} />
        </div>
    );
}

const style = {
    divBar:{
        height:"35px",
        borderBottom:"1px solid #dddd",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between"
    }
}

export default MainTopBar;
