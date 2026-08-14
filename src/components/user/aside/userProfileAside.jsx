import React from 'react';
import { FiClock, FiMail } from 'react-icons/fi';
import userInitials from '../utils/userInitials';

import './style.css';

const UserProfileAside = ({user}) => {

    const userInitialData = userInitials({userName:user?.name});

    const role = user?.role === 'admin'
        ? 'Administrador'
        : 'Usuário padrão';

    const lastUpdate = user?.updatedAt
        ? new Date(user.updatedAt).toLocaleString('pt-BR', {
              timeZone: 'America/Sao_Paulo',
          })
        : '-';
        

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
                    <span>{lastUpdate}</span>
                </div>
            </div>
        </aside>
    );
}

export default UserProfileAside;
