import { IoPricetagOutline } from "react-icons/io5";
import { GoFileMedia } from "react-icons/go";
import { BsCoin } from "react-icons/bs";
import { MdOutlinePermMedia } from "react-icons/md";
import { TbBrandAbstract } from "react-icons/tb";
import { MdOutlineSell } from "react-icons/md";

const productForm = [
    {
        id: "category_product",
        name: "category",
        title: "Categoria do Produto",
        subtitle:"Busque e selecione uma categoria para este produto.",
        label: "Categoria",
        type: "select",
        step:1,
        placeholder: "Selecione uma categoria",
        required: true,
        preview: true,
        svg:<IoPricetagOutline/>,

        fields: [
            {
                id: "category",
                name: "categoryProduct",
                label: "Categoria",
                type: "select",
                placeholder: "Selecione uma categoria",
                required: true,
                preview: true,
                col: 6,

                options: [],
            }
        ]
    },
      {
        id: "brand_product",
        name: "brand",
        title: "Marca do Produto",
        label: "Categoria",
        subtitle:"Busque e selecione uma marca para este produto.",
        type: "select",
        step:2,
        placeholder: "Selecione uma categoria",
        required: true,
        preview: true,
        svg: <TbBrandAbstract/>,

        fields: [
            {
                id: "brand",
                name: "brandProduct",
                label: "Marca",
                type: "select",
                placeholder: "Selecione uma marca",
                required: true,
                preview: true,
                col: 6,

                options: []
            }
        ]
    },


    {
        id: "product_information",
        type: "information",
        step:3,
        title: "Informações do Produto",
        subtitle:"Preencha os dados principais do seu produto.",
        collapsible: true,
        preview: true,
        svg: <MdOutlineSell/>,


        fields:[
                {
                    id: "title",
                    name: "title",
                    label: "Título de venda",
                    type: "text",
                    placeholder: "Ex.: Camiseta Básica Masculina",
                    step:1,
                    required: true,
                    preview: true,
                    maxLength: "300px",
                    col: 12,
                },
                {
                    id: "official_store_name",
                    name: "official_store_name",
                    label: "Nome oficial do produto",
                    step:1,
                    type: "text",
                    placeholder: "Ex.: Camiseta Básica 100% Algodão",
                    required: true,
                    maxLength: "300px",
                    preview: true,
                    col: 12
                },
                 {
                    id: "gtin",
                    name: "gtin",
                    label: "Código do produto (SKU)",
                    step:2,
                    type: "text",
                    placeholder: "GTIN / Código interno",
                    required: false,
                    preview: true,
                    col: 6
                },

              

                {
                    id: "product_shape",
                    name: "product_shape",
                    label: "Formato do produto",
                    type: "text",
                    step:2,
                    placeholder: "Formato do produto",
                    required: false,
                    preview: true,
                    col: 6
                },
                {
                    id:'net_volum',
                    name:"NET_VOLUM",
                    label: "Volume do produto",
                    type:"text",
                    placeholder:"Volume do produto",
                    required:true,
                    preview:true,
                    col:6,
                    step:2
                },
                {
                    id: "age_group",
                    name: "age_group",
                    label: "Faixa etária",
                    step:2,
                    type: "select",
                    required: false,
                    preview: true,
                    col: 6,

                    options: [
                        {
                            value: "adult",
                            label: "Adulto"
                        },
                        {
                            value: "children",
                            label: "Infantil"
                        },
                        {
                            value: "any",
                            label: "Todos"
                        }
                    ]
                },
                  {
                    id: "is_new_arrival",
                    name: "is_new_arrival",
                    label: "Lançamento",
                    type: "select",
                    step:2,
                    required: true,
                    preview: true,
                    col: 6,

                    options: [
                        {
                            value: true,
                            label: "Sim"
                        },
                        {
                            value: false,
                            label: "Não"
                        }
                    ]
                },
                {
                    id: "additional_information",
                    name: "discribe",
                    step:4,
                    label: "Informações adicionais",
                    type: "textarea",
                    placeholder: "[ ... ]",
                    required: false,
                    preview: true,
                    rows: 20,
                    col: 120,
                },
                {
                    id:"specifications",
                    name:"specifications",
                    label:"Especificação do produto",
                    type:"json",
                    step:3,
                },
        ]
    },

    {
        id: "media",
        type: "section",
        title: "Mídia",
        step:4,
        subtitle:"Adicione imagens de alta qualidade para apresentar melhor o seu produto.",
        collapsible: true,
        preview: true,
        svg: <GoFileMedia/>,

        fields: [
            {
                id: "thumbnails",
                name: "thumbnails",
                label: "Imagens do produto",
                type: "image-upload",
                required: true,
                preview: true,
                multiple: true,
                accept: "image/*",
                col: 12
            },
            {
                id: "thumbnails_removed",
                name: "thumbnails_removed",
                label: "Total de imagens removidas",
                type: "remove-images",
                required: true,
                preview: true,
                multiple: true,
                accept: "array",
                col: 12
            }
        ]
    },

    {
        id: "pricing",
        type: "section",
        step:5,
        title: "Precificação",
        subtitle:"Defina o preço e margens do produto",
        collapsible: true,
        preview: true,
        svg:<BsCoin />,

        fields: [
            {
                id: "product_cost",
                name: "product_cost",
                label: "Preço de custo",
                type: "currency",
                placeholder: "0,00",
                required: true,
                preview: true,
                col: 4
            },

            {
                id: "profit_margin",
                name: "profit_margin",
                label: "Margem de lucro",
                type: "percentage",
                placeholder: "0%",
                required: false,
                preview: true,
                col: 4
            },

            {
                id: "discounts",
                name: "discounts",
                label: "Descontos",
                type: "percentage",
                placeholder: "0%",
                required: false,
                preview: true,
                col: 4
            },

            {
                id: "taxes",
                name: "taxes",
                label: "Taxas / Impostos",
                type: "percentage",
                placeholder: "0%",
                required: false,
                preview: true,
                col: 4
            },

            {
                id: "currency",
                name: "currency",
                label: "Moeda",
                type: "select",
                required: true,
                preview: true,
                col: 4,
                options: [
                    {
                        value: "BRL",
                        label: "Real Brasileiro"
                    },
                    {
                        value: "USD",
                        label: "Dólar"
                    }
                ]
            },

            {
                id: "selling_price",
                name: "selling_price",
                label: "Preço de venda",
                type: "currency",
                placeholder: "0,00",
                required: true,
                preview: true,
                col: 4
            },

            {
                id: "stock",
                name: "stock",
                label: "Estoque",
                type: "number",
                placeholder: "0",
                required: true,
                preview: true,
                min: 0,
                col: 4
            }
        ]
    },

    {
        id: "marketing",
        type: "section",
        step:6,
        title: "Marketing",
        collapsible: true,
        preview: true,
        svg:<MdOutlinePermMedia/>,
        subtitle:"Adicione imagens, vídeo para apresentar o melhor do seu produto.",

        fields: [
            {
                id: "marketing_images",
                name: "marketing_images",
                label: "Imagens de marketing",
                type: "image-upload",
                required: false,
                preview: true,
                multiple: true,
                accept: "image/*",
                col: 12
            },

            {
                id: "marketing_video",
                name: "movie_url",
                label: "Vídeo de marketing",
                type: "video-upload",
                required: false,
                preview: true,
                multiple: false,
                accept: "video/*",
                col: 12
            },
                        {
                id: "use_marketing_video",
                name: "use_movie",
                label: "Mostrar o vídeo do produto",
                type: "text",
                required: false,
                preview: true,
                col: 12
            }
        ]
    }
];

export default productForm;