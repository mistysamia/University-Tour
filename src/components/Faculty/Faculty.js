import React from 'react';
import facultyHeader from '../../images/facultyHeader.jpg'
import facultyImg1 from '../../images/facultyImg1.jpg'
import facultyImg2 from '../../images/facultyImg2.jpg'
import facultyImg3 from '../../images/facultyImg3.jpg'
import facultyImg4 from '../../images/facultyImg4.jpg'
import facultyImg5 from '../../images/facultyImg5.jpg'
import facultyImg6 from '../../images/facultyImg6.jpg'
import './Faculty.css';
import { Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Faculty = () => {
    return (
        <section>
            <section className="facultyHeadings">
                <img src={facultyHeader} />
            </section>
            <section className="FacultyDetails">
                <p className="facultyHeading">Top Teaching Faculty</p>
                <section className="eachFacultyDetails">
                    <section className="detailsShow">

                        {/* Each Card Starts */}
                        <section className="eachCard">
                            <article className="eachCardImgSection">
                                <section className="eachCardImg">
                                    <img src={facultyImg1} />
                                </section>
                            </article>
                            <article className="eachCardDetails">
                                <h4>NICHOLAS BELLONO</h4>
                                <h6 className="facultyPosition">Assistant Professor of Molecular and Cellular Biology</h6>
                                 <h6>Faculty at : Harvard University</h6>
                                <h6>Contact : nbellono@harvard.edu</h6>
                            </article>
                        </section>
                         {/* Each Card Ends */}

                           {/* Each Card Starts */}
                        <section className="eachCard">
                            <article className="eachCardImgSection">
                                <section className="eachCardImg">
                                    <img src={facultyImg2} />
                                </section>
                            </article>
                            <article className="eachCardDetails">
                                <h4>HOWARD BERG</h4>
                                <h6 className="facultyPosition">Professor of Molecular and Cellular Biology</h6>
                                 <h6>Faculty at : Stanford University</h6>
                                <h6>Contact : hberg@mcb.harvard.edu</h6>
                            </article>
                        </section>
                         {/* Each Card Ends */}

                           {/* Each Card Starts */}
                        <section className="eachCard">
                            <article className="eachCardImgSection">
                                <section className="eachCardImg">
                                    <img src={facultyImg3} />
                                </section>
                            </article>
                            <article className="eachCardDetails">
                                <h4>PHILIPPE CLUZEL</h4>
                                <h6 className="facultyPosition">Professor of Molecular and Cellular Biology</h6>
                                 <h6>Faculty at : Karolinska Institute</h6>
                                <h6>Contact : cluzel@mcb.harvard.edu</h6>
                            </article>
                        </section>
                         {/* Each Card Ends */}

                           {/* Each Card Starts */}
                        <section className="eachCard">
                            <article className="eachCardImgSection">
                                <section className="eachCardImg">
                                    <img src={facultyImg4} />
                                </section>
                            </article>
                            <article className="eachCardDetails">
                                <h4>VICTORIA D’SOUZA</h4>
                                <h6 className="facultyPosition">Professor of Molecular and Cellular Biology</h6>
                                 <h6>Faculty at : University of Oxford</h6>
                                <h6>Contact : dsouza@mcb.harvard.edu</h6>
                            </article>
                        </section>
                         {/* Each Card Ends */}

                           {/* Each Card Starts */}
                        <section className="eachCard">
                            <article className="eachCardImgSection">
                                <section className="eachCardImg">
                                    <img src={facultyImg5} />
                                </section>
                            </article>
                            <article className="eachCardDetails">
                                <h4>VLAD DENIC</h4>
                                <h6 className="facultyPosition">Assistant Professor of Molecular and Cellular Biology</h6>
                                 <h6>Faculty at : Professor of Molecular Biology</h6>
                                <h6>Contact :  vdenic@mcb.harvard.edu</h6>
                            </article>
                        </section>
                         {/* Each Card Ends */}

                           {/* Each Card Starts */}
                        <section className="eachCard">
                            <article className="eachCardImgSection">
                                <section className="eachCardImg">
                                    <img src={facultyImg6} />
                                </section>
                            </article>
                            <article className="eachCardDetails">
                                <h4>JOHN DOWLING</h4>
                                <h6 className="facultyPosition">Assistant Professor of Molecular and Cellular Biology</h6>
                                 <h6>Faculty at :Llura Gund Research Professor of Neurosciences</h6>
                                <h6>Contact : dowling@mcb.harvard.edu</h6>
                            </article>
                        </section>
                         {/* Each Card Ends */}

                    </section>
                </section>
            </section>
        </section>
    );
};

export default Faculty;