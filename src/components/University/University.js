import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import List from '../List/List';
import { addToDb } from '../../utilities/fakedb';
import './University.css';
import useCart from '../../hooks/useCart';
import { Link } from 'react-router-dom';
import homepageHead from '../../images/homepageHead.jpg'
import { Col, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Shop = () => {

    const [lists, setLists] = useState([]);
    const [cart, setCart] = useCart(lists);

    const [displayLists, setDisplayLists] = useState([]);

    useEffect(() => {
        fetch('./university.JSON')
            .then(res => res.json())
            .then(data => {
                setLists(data);
                setDisplayLists(data);
            });
    }, []);



    const handleAddToCart = (list) => {
        const exists = cart.find(pd => pd.id === list.id);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd.id !== list.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, list];
        }
        else {
            list.quantity = 1;
            newCart = [...cart, list];
        }
        setCart(newCart);
        // save to local storage (for now)
        addToDb(list.id);

    }

    const handleSearch = event => {
        const searchText = event.target.value;

        const matchedLists = lists.filter(list => list.name.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayLists(matchedLists);
    }

    return (
        <>

            <div className="search-container">
                <input
                    type="text"
                    onChange={handleSearch}
                    placeholder="Search University" />
            </div>

            <section className="HomePageHeadingsImg">
                <section>
                    <img src={homepageHead} />
                </section>

                <p className="heading">University Tour</p>
                <p className="headingDetails">Discover the world's top universities</p>
            </section>
            <Row className="universityDetailsSHowPart">
                <Col sm={8}>
                    <article>
                        {
                            displayLists.map(list => <List
                                key={list.id}
                                list={list}
                                handleAddToCart={handleAddToCart}
                            >
                            </List>)
                        }
                    </article>
                </Col>
                <Col sm={4} className="cartPart">
                    <article>
                        <Cart cart={cart}>
                            <Link to="/review">
                                <Button variant="primary" >  Review Your List</Button>

                            </Link>
                        </Cart>
                    </article>
                </Col>


            </Row>


        </>
    );
};

export default Shop;