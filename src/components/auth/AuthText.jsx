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

            <div className='warning'>
                <h2>Aviso</h2>
                <p>
                    Este projeto está hospedado utilizando planos gratuitos/Hobby para fins de demonstração.
                </p>
                <p>
                    Devido às limitações desses planos, o servidor pode entrar em modo de inatividade quando não está sendo utilizado. 
                    Por isso, a primeira requisição pode levar alguns segundos enquanto o serviço é reativado.
                </p>
            </div>

        </div>
    );
}

export default AuthText;
