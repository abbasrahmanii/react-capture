import React from 'react';
import home1 from '../img/home1.png';
import {About,Description,Hide,Image} from "../styles";
//Framer Motin
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../components/animation";
import Wave from "./Wave";

const AboutSection = () => {
    return(
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            We work to make
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>your <span>dreams</span></motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>come true.</motion.h2>
                    </Hide>
                    <motion.p variants={fade}>
                        Contact us for any photography or videography ideas that you have. whe have professionals with amazing skills.
                    </motion.p>
                    <motion.button variants={fade}>Contact Us</motion.button>
                </motion.div>
            </Description>
            <Image>
                    <motion.img variants={photoAnim} src={home1} alt="photographer" />
            </Image>
            <Wave />
        </About>
    )
};

export default AboutSection;