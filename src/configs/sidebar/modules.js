import { TbEdit, TbPlus, TbTrash } from "react-icons/tb";

const modules = [
    {
        id:10,
        text:"Dashboard",
        path:"/app/dashboard",
        visible: true,
        routes:[
            {
                id:22,
                text:"Visão Geral",
                path:'/app/dashboard/products',
                sidePanel:false,
            }
        ]
    },
    {
        id: 1,
        text: 'Produtos',
        path: '/app/products',
        visible: true,
        routes: [
            {
                id: 11,
                icon: <TbPlus />,
                text: 'Novo Produto',
                path: '/app/products/create',
                sidePanel:true,
            },
            {
                id: 12,
                icon: <TbEdit />,
                text: 'Atualizar Produto',
                path: '/app/products/update',
                sidePanel:true,
            },
            {
                id: 13,
                icon: <TbTrash />,
                text: 'Deletar Produto',
                path: '/app/products/delete',
                sidePanel:false,
            },
        ]
    }
];

export default modules;