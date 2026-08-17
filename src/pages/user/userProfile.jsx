import Title from 'components/titles/Title';
import AcessBadge from 'components/user/acess/acessBadge';
import UserProfileAside from 'components/user/aside/userProfileAside';
import BasicInformations from 'components/user/basicInfo/basicInformations';
import UserDelete from 'components/user/delete/userDelete';
import UserUpdatePass from 'components/user/userPass/userUpdatePass';
import { AuthContext } from 'contexts/AuthContext';
import React, { useContext } from 'react';

import 'styles/profileForm.css';

const UserProfile = () => {
    const {user, setUser} = useContext(AuthContext);
    
    return (
        <div className='md-profile scroll'>
            <Title
                title="Perfil de usuário"
                subtitle="Gerencie suas informações pessoais e configurações de segurança."
            />
            <div className="profile-grid">
                <UserProfileAside user={user} />
                <section className='profile-content'>
                    <BasicInformations user={user} setUser={setUser} />
                    <AcessBadge user={user} />
                    <UserUpdatePass user={user} />
                    <UserDelete user={user} />
                </section>
            </div>
        </div>
    );
}

export default UserProfile;
