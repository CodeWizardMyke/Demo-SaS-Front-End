import React, { useState } from 'react';

import {
    FiUser,
    FiShield,
    FiMail,
    FiClock,
    FiSave,
    FiLock,
} from 'react-icons/fi';

import Title from 'components/titles/Title';
import Input from 'components/input';
import Button from 'components/buttons/Button';

import './styles.css';
import { updatePasswordCheck } from './utils/passCheck';

const UserProfile = () => {
    const userData =
        sessionStorage.getItem('user') || localStorage.getItem('user');

    const user = userData ? JSON.parse(userData) : null;

    const [username, setUsername] = useState(user?.name || '');

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const initials = user?.name
        ?.split(' ')
        .slice(0, 2)
        .map((name) => name.charAt(0).toUpperCase())
        .join(' ');

    const lastUpdate = user?.updatedAt
        ? new Date(user.updatedAt).toLocaleString('pt-BR', {
              timeZone: 'America/Sao_Paulo',
          })
        : '-';

    const role =
        user?.role === 'admin'
            ? 'Administrador'
            : 'Usuário padrão';


    const handleUpdatePassword = async () => {
        const validationResult = updatePasswordCheck({oldPassword,newPassword,confirmPassword})
        console.log(validationResult)
        if (!validationResult.success) return;

        try {
            // await updatePasswordRequest({
            //     oldPassword,
            //     newPassword
            // });

            alert('Senha alterada com sucesso.');

            setOldPassword('');
            setNewPassword('');
            setConfirmPassword('');
        } catch (error) {
            alert(
                error?.response?.data?.error ||
                    'Erro ao alterar senha.'
            );
        }
    };

    const handleUpdateProfile = async () => {
        try {
            // await updateProfileRequest({ name: username });

            alert('Perfil atualizado com sucesso.');
        } catch (error) {
            alert(
                error?.response?.data?.error ||
                    'Erro ao atualizar perfil.'
            );
        }
    };

    return (
        <div className="profile">
            <Title
                title="Perfil de usuário"
                subtitle="Gerencie suas informações pessoais e configurações de segurança."
            />

            <div className="profile-grid">
                <aside className="profile-card">
                    <div className="profile-avatar">
                        {initials}
                    </div>

                    <h2>{username}</h2>

                    <span className="profile-role">
                        {role}
                    </span>

                    <div className="profile-status">
                        <span className="status-dot" />
                        Conta ativa
                    </div>

                    <div className="profile-info">
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

                <section className="profile-content">
                    <div className="profile-section">
                        <div className="section-header">
                            <FiUser />

                            <div>
                                <h3>
                                    Informações pessoais
                                </h3>

                                <p>
                                    Atualize seus dados
                                    cadastrais.
                                </p>
                            </div>
                        </div>

                        <div className="profile-form">
                            <Input
                                placeholder="Nome"
                                query={username}
                                setQuery={setUsername}
                            />

                            <Input
                                placeholder="E-mail"
                                query={user?.email}
                                disabled
                            />
                        </div>

                        <div className="section-footer">
                            <Button
                                icon={<FiSave />}
                                onClick={
                                    handleUpdateProfile
                                }
                            >
                                Salvar alterações
                            </Button>
                        </div>
                    </div>

                    <div className="profile-section">
                        <div className="section-header">
                            <FiShield />

                            <div>
                                <h3>
                                    Nível de acesso
                                </h3>

                                <p>
                                    Permissões atribuídas
                                    à sua conta.
                                </p>
                            </div>
                        </div>

                        <div className="access-badge">
                            {role}
                        </div>
                    </div>

                    <div className="profile-section">
                        <div className="section-header">
                            <FiLock />

                            <div>
                                <h3>
                                    Alterar senha
                                </h3>

                                <p>
                                    Utilize uma senha
                                    forte para proteger
                                    sua conta.
                                </p>
                            </div>
                        </div>

                        <div className="profile-form">
                            <Input
                                type="password"
                                placeholder="Senha atual"
                                query={oldPassword}
                                setQuery={
                                    setOldPassword
                                }
                            />

                            <Input
                                type="password"
                                placeholder="Nova senha"
                                query={newPassword}
                                setQuery={
                                    setNewPassword
                                }
                            />

                            <Input
                                type="password"
                                placeholder="Confirmar senha"
                                query={confirmPassword}
                                setQuery={
                                    setConfirmPassword
                                }
                            />
                        </div>

                        <div className="section-footer">
                            <Button
                                icon={<FiLock />}
                                click={
                                    handleUpdatePassword
                                }
                            >
                                Atualizar senha
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default UserProfile;