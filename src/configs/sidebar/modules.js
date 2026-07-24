import { TbEdit, TbPlus, TbTrash } from "react-icons/tb";

const modules = [
    {
        id:1,
        text:"Dashboard",
        attr:"dashboard",
        path:"/app/dashboard",
        visible: true,
        routes:[
            {
                id:2,
                text:"Visão Geral",
                path:'/app/dashboard/products',
                sidePanel:false,
            }
        ]
    },
    {
        id: 2,
        text: 'Produtos',
        attr:"product",
        path: '/app/products',
        visible: true,
        routes: [
            {
                id: 21,
                icon: <TbPlus />,
                text: 'Novo Produto',
                path: '/app/products/create',
                sidePanel:true,
            },
            {
                id: 22,
                icon: <TbEdit />,
                text: 'Atualizar Produto',
                path: '/app/products/update',
                sidePanel:true,
            },
            {
                id: 23,
                icon: <TbTrash />,
                text: 'Deletar Produto',
                path: '/app/products/delete',
                sidePanel:false,
            },
        ]
    },
    {
        id:3,
        attr:"category",
        text:"Categorias",
        path:"/app/categories",
        visible:true,
        routes:[
            {
                id:31,
                action:"create",
                icon:<TbPlus/>,
                text:"Nova Categoria",
                path:"/app/categories/create",
                sidePanel:false,
            },

            {
                id:32,
                action:"update",
                icon:<TbEdit/>,
                text:"Atualizar Categoria",
                path:"/app/categories/update",
                sidePanel:false,
            }
            ,

            {
                id:33,
                action:"delete",
                icon:<TbEdit/>,
                text:"Deletar Categoria",
                path:"/app/categories/delete",
                sidePanel:false,
            }
        ]
    },
    {
        id:4,
        attr:"brand",
        text:"Marcas",
        path:"/app/brands",
        visible:true,
        routes:[
            {
                id:41,
                action:"create",
                icon:<TbPlus/>,
                text:"Nova Marca",
                path:"/app/brands/create",
                sidePanel:false,
            },

            {
                id:42,
                action:"update",
                icon:<TbEdit/>,
                text:"Atualizar Marca",
                path:"/app/brands/update",
                sidePanel:false,
            }
            ,

            {
                id:43,
                action:"delete",
                icon:<TbEdit/>,
                text:"Deletar Marca",
                path:"/app/brands/delete",
                sidePanel:false,
            }
        ]
    }
];

export default modules;