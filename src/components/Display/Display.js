import React from 'react';
import '../Display/Display.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Display = (props) => {
    const { name, image, fee, country, score, rank, league, established } = props.list;

    return (

        <section className="eachUniversity">
            <article className="imgSection">
                <section className="eachImg">
                    <img src={image} alt="" />
                </section>
            </article>
            <article>
                <section className="detailsSection">
                    <h2 className="">{name}</h2>
                    <p> Rank : {rank}</p>
                    <p> Country : {country}</p>
                    <p>Score: {score}</p>        
                    <p> Established on : {established}</p>
                    <p>Fee : ${fee}</p>
                    <p>League : {league}</p>
                </section>
            </article>
        </section>
    );
};

export default Display;