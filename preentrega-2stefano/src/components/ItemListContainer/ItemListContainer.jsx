import React, { useEffect, useState } from "react";
import { get_product_info_side_effect } from '../../asynMock'; // Importar la función correcta desde asynMock
import ItemList from "../ItemList/ItemList"
import ItemCount from "../ItemCount/ItemCount";
const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        get_product_info_side_effect()
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, []); 

    return (
        <main>
            <h1>{greeting}</h1>
            
            
        </main>
    );
};

export default ItemListContainer;