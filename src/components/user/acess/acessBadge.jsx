import React from 'react';
import { FiShield } from 'react-icons/fi';

import './style.css';

const AcessBadge = ({user}) => {

    const role = user?.role === 'admin'
        ? 'Administrador'
        : 'Usuário padrão';

    return (
        <div className='profileFormCard'>
            <div className="header">
                <FiShield />
                <h3>Nível de acesso</h3>

                <p>
                    Permissões atribuídas
                    à sua conta.
                </p>
            </div>

            <div className="access-badge">
                {role}
            </div>
        </div>
    );
}

export default AcessBadge;
