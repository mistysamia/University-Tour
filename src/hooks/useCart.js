import { useState, useEffect } from 'react';
import { getStoredCart } from '../utilities/fakedb';

const useCart = lists => {
    const [cart, setCart] = useState([]);

    useEffect(() => {

        if (lists.length) {
            const savedCart = getStoredCart();
            console.log("hered ");
            const storedCart = [];
            for (const id in savedCart) {
                console.log( typeof(id));
                const addedProduct = lists.find(list => list.id === id);
               console.log("in", typeof(lists[0].id));
                if (addedProduct) {
                    // set quantity
                    const quantity = savedCart[id];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }

    }, [lists]);

    return [cart, setCart];
}

export default useCart;