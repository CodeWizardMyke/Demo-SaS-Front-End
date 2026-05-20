const modules = [
    {
        id: 1,
        text: 'Produtos',
        path: '/app/products',
        visible: true,
        routes: [
            {
                id: 11,
                text: 'Criar Produto',
                path: '/app/products/create'
            },
                        {
                id: 12,
                text: 'Atualizar Produto',
                path: '/app/products/update'
            },
                        {
                id: 13,
                text: 'Deletar Produto',
                path: '/app/products/delete'
            },
        ]
    }
];

export default modules;