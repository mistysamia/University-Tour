import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;

    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }

        totalQuantity = totalQuantity + product.quantity;
        let temp = parseInt(product.fee);
        total = temp * totalQuantity;
    }

    return (
        <section className="Cart">
            <h2 >Selection Summary</h2>
            <hr/>
            <br />
            <p>Selected University No.: {totalQuantity}</p>
            <p className="CartFee">Total Fee: ${total}</p>
        
            {props.children}
        </section>


    );
};

export default Cart;