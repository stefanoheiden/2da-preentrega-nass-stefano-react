import cart from '../../assets/react.svg'
import React from 'react';

const CartWidget = () => {
    return (
       <button>
        <img src={cart} />
        0
       </button>
    );
}

export default CartWidget;