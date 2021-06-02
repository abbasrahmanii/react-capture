import React from 'react';
import home1 from '../img/home1.png';
import {About,Description,Hide,Image} from "../styles";
//Framer Motin
import { motion } from "framer-motion";

const AboutSection = () => {
    return(
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2>
                            We work to make
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>your <span>dreams</span></motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>come true.</motion.h2>
                    </Hide>
                    <p>Contact us for any photography or videography ideas that you have. whe have professionals with amazing skills.</p>
                    <button>Contact Us</button>
                </motion.div>
            </Description>
            <Image>
                    <img src={home1} alt="photographer" />
            </Image>
        </About>
    )
};

//Styled Components


export default AboutSection;