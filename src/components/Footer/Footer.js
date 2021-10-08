import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import facebook from '../../images/facebook-square-brands.svg'
import mail from '../../images/envelope-open-solid.svg'
import twitter from '../../images/twitter-brands.svg'
import university from '../../images/university-solid.svg'
import { Col, Row } from 'react-bootstrap';
import './Footer.css';


const Footer = () => {
    return (
        <div>
            <footer className="footer">

                <section >

                    <Row >
                        <Col sm={4} >
                            <section className="logoPartSection">
                                <article className="logoPart">
                                    <img src={university} alt="" />
                                    <p>Knowledge is power</p>
                                </article>
                            </section>
                        </Col>
                        <Col sm={4}>
                            <article className="footerContactDetails">
                                <h5 >Contact</h5>
                                <h5 >Email</h5>
                                <section className="contactLogo ">
                                    <section className="displayContactLogo">
                                        <section>
                                            <div className="eachContactLogo ">
                                                <img src={facebook} />
                                            </div>
                                        </section>
                                        <section>
                                            <div className="eachContactLogo ">
                                                <img src={mail} />
                                            </div>
                                        </section>
                                        <section>
                                            <div className="eachContactLogo LogoTwitter">
                                                <img src={twitter} c />
                                            </div>
                                        </section>
                                    </section>
                                </section>
                            </article>
                        </Col>
                        <Col sm={4}>
                            <article className="footerContactDetails">
                                <h5 >About</h5>
                                <h5 >Quality</h5>
                                <h5 >Review</h5>
                            </article>
                        </Col>
                    </Row>

                </section>
                <section className="CopyRight ">
                    <h5>Copyright © 2021 Misty. All rights reserved</h5>
                </section>
            </footer>
        </div>
    );
};

export default Footer;