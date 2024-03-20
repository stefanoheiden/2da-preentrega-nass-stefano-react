
import CartWidget from "../CartWidget/CartWidget"
import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"
import Item from "../Item/Item"

const Navbar = () => {
    return (
        <header style={{}}>
            <h1>Tienda</h1>
            <nav>
                <a>Celulares</a>
                <a>Tablets</a>
                <a>Notebooks</a>
            </nav>
            <CartWidget />
            <ItemCount />
            <ItemList />
            <Item /> {/* Si este es el componente que deseas utilizar */}
        </header>
    )
}

export default Navbar;