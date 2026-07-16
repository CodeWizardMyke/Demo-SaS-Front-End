import "./styles.css";

import {
    TbPackage,
    TbLayoutDashboard,
    TbDatabase,
    TbPhoto,
    TbDeviceDesktopAnalytics
} from "react-icons/tb";

const Overview = () => {
    return (
        <section className="overview scroll">

            <header className="overview-header">
                <span className="overview-badge">
                    ERP Portfolio
                </span>

                <h1>Bem-vindo ao Manager.IO</h1>

                <p>
                    Sistema desenvolvido para demonstrar habilidades em
                    desenvolvimento Full Stack utilizando React, Node.js,
                    Express e MySQL.
                </p>
            </header>

            <div className="overview-grid">

                <article className="overview-card">
                    <TbPackage />

                    <h3>Cadastro de Produtos</h3>

                    <p>
                        Cadastro completo com múltiplas etapas,
                        upload de imagens, vídeo, validações e
                        gerenciamento de informações.
                    </p>
                </article>

                <article className="overview-card">
                    <TbPhoto />

                    <h3>Mídias</h3>

                    <p>
                        Gerenciamento de miniaturas, imagens de marketing
                        e vídeos do produto.
                    </p>
                </article>

                <article className="overview-card">
                    <TbDatabase />

                    <h3>Integração</h3>

                    <p>
                        Comunicação entre Front-end e API utilizando
                        React Context, Express e Sequelize.
                    </p>
                </article>

                <article className="overview-card">
                    <TbLayoutDashboard />

                    <h3>Arquitetura</h3>

                    <p>
                        Projeto organizado em componentes reutilizáveis,
                        Context API, Reducers e serviços.
                    </p>
                </article>

            </div>

            <footer className="overview-footer">

                <TbDeviceDesktopAnalytics />

                <div>

                    <strong>Objetivo do projeto</strong>

                    <p>
                        Este sistema faz parte do meu portfólio pessoal e foi
                        desenvolvido para simular funcionalidades presentes em
                        plataformas de gestão de produtos utilizadas no mercado.
                    </p>

                </div>

            </footer>

        </section>
    );
};

export default Overview;