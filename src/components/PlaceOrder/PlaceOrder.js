import React, { useEffect, useState } from 'react';
import List from '../List/List';
import { Link } from 'react-router-dom';
import Services from '../Services/Services';
import image from '../../images/orderConfirm.jpg'
import './PlaceOrder.css';
const PlaceOrder = () => {
    return (
        <>
            <section>
                <section className="placeOrder">
                    <h1>Congratulations!!</h1>
                    <h3> Your List has been Recorded </h3>
                    <p>Thank you for you time. We will begin processing it right away. You will receive an confirmation mail shortly.</p>
                </section>

            </section>

        </>
    );
};

export default PlaceOrder;