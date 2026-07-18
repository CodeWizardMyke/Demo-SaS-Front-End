import { AuthContext } from 'contexts/AuthContext';
import React, { useContext } from 'react';
import { BsFillBellFill } from "react-icons/bs";

import './styles.css'

const DashboardHeader = ({text}) => {

    const {user} = useContext(AuthContext);

    const usernamesplited = user?.name.split(' ');

    const userName = usernamesplited.length
        ? ` 
            ${usernamesplited[0].charAt(0).toUpperCase()}${usernamesplited[0].slice(1).toLowerCase()}
        `
        : ""


    return (
        <div className="d_header">
            <div className="d_header-tag">
                <h2>
                    Dashboard / {text}
                </h2>
                <span><BsFillBellFill/>{userName}</span>
            </div>
            <h3>
                Olá

                {userName}

            </h3>
            <p>Bem-vindo ao Manager.IO. Aqui você pode acompanhar o catálogo de produtos.</p>
        </div>
    );
}

export default DashboardHeader;
