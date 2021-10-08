import React from 'react';
import './About.css';
import AboutImg from '../../images/AboutImg.jpg'
import aboutDesign1 from '../../images/aboutDesign1.jpg'
import aboutDesign2 from '../../images/aboutDesign2.jpg'
const About = () => {
    return (
        <div >
            <section className="AboutHeadings">
                <img src={AboutImg} />
            </section>
            <section className="FacultyDetails">
                <p className="aboutHeading">About</p>
                <section className="eachAboutDetails">
                    <section className="detailsShow">
                        {/* First Column */}
                        <div>
                            <h6>
                                Cambridge is formed from a variety of institutions which include 31 semi-autonomous constituent colleges and over 150 academic departments, faculties and other institutions organised into six schools. All the colleges are self-governing institutions within the university, each controlling its own membership and with its own internal structure and activities. All students are members of a college. The university does not have a main campus, and its colleges and central facilities are scattered throughout the city. Undergraduate teaching .
                            </h6>
                            <br />
                            <h6>
                                Harvard university is composed of ten academic faculties plus the Radcliffe Institute for Advanced Study. Arts and Sciences offers study in a wide range of academic disciplines for undergraduates and for graduates, while the other faculties offer only graduate degrees, mostly professional. Harvard has three main campuses:[10] the 209-acre (85 ha) Cambridge campus centered on Harvard Yard; an adjoining campus immediately across the Charles River in the Allston neighborhood of Boston.
                            </h6>
                            <br />
                            <h6>
                                Columbia University (also known as Columbia, and officially as Columbia University in the City of New York) is a private Ivy League research university in New York City. Established in 1754 as King's College on the grounds of Trinity Church in Manhattan, Columbia is the oldest institution of higher education in New York and the fifth-oldest institution of higher learning in the United States. It is one of nine colonial colleges
                            </h6>
                        </div>
                        {/* Second Column */}
                        <div>
                            <h6>
                                The University of Oxford is a collegiate research university in Oxford, England. There is evidence of teaching as early as 1096,[2] making it the oldest university in the English-speaking world and the world's second-oldest university in continuous operation.[2][10][11] It grew rapidly from 1167 when Henry II banned English students from attending the University of Paris.[2] After disputes between students and Oxford townsfolk in 1209 located in
                            </h6>

                            <section className="aboutDesignImgPart">
                                <img src={aboutDesign1} />
                            </section>
                            <h6>
                                is associated with the university as a research and teaching hospital. Together they form an academic health science centre. While most of the medical programs are taught in Swedish, the bulk of the PhD projects are conducted in English. The institute's name is a reference to the Caroleans.
                            </h6>

                        </div>
                        {/* Third Column */}
                        <div>
                            <h6>
                                Imperial College London (legally Imperial College of Science, Technology and Medicine)[8] is a public research university in London. Imperial grew out of Prince Albert's vision for an area of culture, including the Royal Albert Hall, Victoria and Albert Museum, Natural History Museum, and the Royal Colleges that would go on to form Imperial College.[9][10] In 1907, Imperial College was established by Royal Charter, merging the Royal College of Science, Royal School of Mines, and City and Guilds College.[11] In 1988, the Imperial College School of Medicine was formed by combining with St Mary's Hospital Medical School. In 2004, Queen Elizabeth II opened the Imperial College Business School.
                            </h6>
                            <br />
                            <h6>
                            The California Institute of Technology (Caltech)[7] is a private research university in Pasadena, California. The university is known for its strength in science and engineering, and is one among a small group of institutes of technology in the United States which is primarily devoted to the instruction of pure and applied sciences.
                            </h6>
                            <section className="aboutDesignImgPart">
                                <img src={aboutDesign2} />
                            </section>
                        </div>

                    </section>
                </section>
            </section>

        </div>
    );
};

export default About;