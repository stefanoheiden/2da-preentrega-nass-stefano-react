import { useState, useEffect } from "react"
import { getProductsbyId } from "../../asynMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
const { itemId} = useParams

    useEffect(() => {

        getProductsbyId('itemId')
            .then(result => {
                setProduct(result)




            })

    }, [itemId])



    return (
        <main>
            <h1>Detalle del producto</h1>
            <ItemDetail {... product} />
        </main>
    )
}

export default ItemDetailContainer