import React from 'react';

const AuthText = ({type}) => {
    if(!type) type = 'login';

    const title ={
        create: "Cadastro",
        login: "Login"
    }[type]

    const text = {
        create:"Crie sua conta para acessar a plataforma demo e experimentar as funcionalidades do sistema.Os dados cadastrados são utilizados apenas para fins de demonstração, autenticação e organização básica das informações dentro da aplicação.",
        login:"Faça login para acessar o ambiente demonstrativo da plataforma. Este projeto foi desenvolvido como um experimento SaaS para portfólio, simulando processos reais de autenticação, gerenciamento de usuários e armazenamento de dados."
    }[type]


    return (
        <div className='fixed-text'>
            <h1>
                {title}
            </h1>
            
            <p>
                {text}
            </p>

            <div>
                <h2>Aviso</h2>
                <p>Esta aplicação está em servidores com planos hobbie, ou seja pode demorar um pouco para o servidor ligar e responder a primeira requisição!</p>
            </div>

        </div>
    );
}

export default AuthText;
