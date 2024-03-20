import React, { useEffect, useState } from "react";
import { get_product_info_side_effect } from '../../asynMock';

const ItemList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const productList = [];
            for (let product_id = 1; product_id <= 5; product_id++) {
                const product_info = await get_product_info_side_effect(product_id);
                if (product_info) {
                    productList.push(product_info);
                }
            }
            setProducts(productList);
        }
        fetchData();
    }, []);

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        <img src={product.image} alt={product.name} />
                        <div>
                            <h3>{product.name}</h3>
                            <p>Price: ${product.price}</p>
                            <p>Category: {product.category}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;