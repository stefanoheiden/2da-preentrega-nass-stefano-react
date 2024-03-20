
const productInfoMap = {
    1: { 
        name: "iPhone 13", 
        price: 999.99, 
        category: "Celulares",
        image: "https://www.apple.com/newsroom/images/product/iphone/geo/Apple_iphone13_hero_geo_09142021_inline.jpg.large.jpg",
        description: 'descripcion de Iphone 13',
        stock: 25,
    },
    2: { 
        name: "Samsung Galaxy S21", 
        price: 899.99, 
        category: "Celulares",
        image: "https://samsungar.vtexassets.com/arquivos/ids/191579-800-auto?width=800&height=auto&aspect=true",
        description: 'descripcion de Samsung s21',
        stock: 25, 
    },
    
};

async function get_product_info_side_effect(product_id) {
    return productInfoMap[product_id] || null;
}

export { get_product_info_side_effect };