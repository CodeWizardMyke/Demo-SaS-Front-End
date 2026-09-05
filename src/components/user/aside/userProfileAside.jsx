import React, { useEffect, useState } from 'react';
import { FiClock, FiMail } from 'react-icons/fi';
import userInitials from '../utils/userInitials';

import './style.css';

const UserProfileAside = ({user}) => {
    const [userLastUpdated, setUserLastUpdated] = useState(user?.updatedAt || '-');
        
    const userInitialData = userInitials({userName:user?.name});

    const role = user?.role === 'admin'
        ? 'Administrador'
        : 'Usuário padrão';

    useEffect(()=> {
        if(user.updatedAt){
            let dateFormated = new Date(user.updatedAt).toLocaleString('pt-BR', {
              timeZone: 'America/Sao_Paulo',
          })

            setUserLastUpdated(dateFormated)
        }

    },[user])

    return (
        <aside className='userAside'>
            <div className="userInitials">
                <span>{userInitialData}</span>
                <strong>{user?.name}</strong>
            </div>
            <div>
                <strong className='user-role'>{role}</strong>
            </div>
            <div className="userInf">
                <div>
                    <FiMail />
                    <span>{user?.email}</span>
                </div>

                <div>
                    <FiClock />
                    <span>{userLastUpdated}</span>
                </div>
            </div>
        </aside>
    );
}

export default UserProfileAside;
