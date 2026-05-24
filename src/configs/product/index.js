const productForm = [
    {
        id: "basic_information",
        type: "section",
        title: "Informações Básicas",
        collapsible: true,
        preview: true,

        fields: [
            {
                id: "category",
                name: "category",
                label: "Categoria",
                type: "select",
                placeholder: "Selecione uma categoria",
                required: true,
                preview: true,
                col: 6,

                options: []
            },

            {
                id: "brand",
                name: "brand",
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
        type: "section",
        title: "Informações do Produto",
        collapsible: true,
        preview: true,

        fields: [
            {
                id: "title",
                name: "title",
                label: "Título do produto",
                type: "text",
                placeholder: "Digite o título do produto",
                required: true,
                preview: true,
                col: 12,
                maxLength: 120
            },

            {
                id: "official_store_name",
                name: "official_store_name",
                label: "Nome oficial",
                type: "text",
                placeholder: "Nome oficial do produto",
                required: true,
                preview: true,
                col: 12
            },

            {
                id: "gtin",
                name: "gtin",
                label: "Código do produto",
                type: "text",
                placeholder: "GTIN / Código interno",
                required: false,
                preview: true,
                col: 6
            },

            {
                id: "is_new_arrival",
                name: "is_new_arrival",
                label: "Lançamento",
                type: "select",
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
                id: "product_shape",
                name: "product_shape",
                label: "Formato do produto",
                type: "text",
                placeholder: "Formato do produto",
                required: false,
                preview: true,
                col: 6
            },

            {
                id: "age_group",
                name: "age_group",
                label: "Faixa etária",
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
                id: "additional_information",
                name: "additional_information",
                label: "Informações adicionais",
                type: "textarea",
                placeholder: "Informações complementares",
                required: false,
                preview: true,
                rows: 4,
                col: 12
            },

            {
                id: "description",
                name: "description",
                label: "Descrição do produto",
                type: "textarea",
                placeholder: "Descrição detalhada do produto",
                required: true,
                preview: true,
                rows: 8,
                maxLength: 3000,
                col: 12
            }
        ]
    },

    {
        id: "media",
        type: "section",
        title: "Mídia",
        collapsible: true,
        preview: true,

        fields: [
            {
                id: "thumbnail_images",
                name: "thumbnail_images",
                label: "Imagens Thumbnail",
                type: "image-upload",
                required: true,
                preview: true,
                multiple: true,
                accept: "image/*",
                col: 12
            },

            {
                id: "product_video",
                name: "product_video",
                label: "Vídeo do produto",
                type: "video-upload",
                required: false,
                preview: true,
                multiple: false,
                accept: "video/*",
                col: 12
            }
        ]
    },

    {
        id: "pricing",
        type: "section",
        title: "Precificação",
        collapsible: true,
        preview: true,

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
                type: "currency",
                placeholder: "0,00",
                required: false,
                preview: true,
                col: 4
            },

            {
                id: "taxes",
                name: "taxes",
                label: "Taxas / Impostos",
                type: "currency",
                placeholder: "0,00",
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
        title: "Marketing",
        collapsible: true,
        preview: true,

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
                name: "marketing_video",
                label: "Vídeo de marketing",
                type: "video-upload",
                required: false,
                preview: true,
                multiple: false,
                accept: "video/*",
                col: 12
            }
        ]
    }
];

export default productForm;