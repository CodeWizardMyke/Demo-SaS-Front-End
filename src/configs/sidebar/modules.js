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
    },
    {
        id:2,
        text:"Categorias",
        path:"/app/categories",
        visible:true,
        routes:[
            {
                id:21,
                icon:<TbPlus/>,
                text:"Nova Categoria",
                path:"/app/categories/create",
                sidePanel:false,
            },

            {
                id:22,
                icon:<TbEdit/>,
                text:"Atualizar Categoria",
                path:"/app/categories/update",
                sidePanel:false,
            }
            ,

            {
                id:23,
                icon:<TbEdit/>,
                text:"Deletar Categoria",
                path:"/app/categories/delete",
                sidePanel:false,
            }
        ]
    }
];

export default modules;