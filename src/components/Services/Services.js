import React, { useEffect, useState } from 'react';
import './Services.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Display from '../Display/Display';


const Services = (props) => {
    const [displayLists, setDisplayLists] = useState([]);

    useEffect(() => {
        fetch('./university.JSON')
            .then(res => res.json())
            .then(data => {
                setDisplayLists(data);
            });
    }, []);


    return (
        <div >
            <article>
                {
                    displayLists.map(list => <Display
                        key={list.id}
                        list={list} > </Display>)
                }
            </article>
        </div>
    );
};

export default Services;