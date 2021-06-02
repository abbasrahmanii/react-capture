import React from "react";
//Import Pages
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FagSection from "../components/FagSection";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../components/animation";

const AboutUs = () => {
    return(
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <AboutSection />
            <ServicesSection />
            <FagSection />
        </motion.div>
    );
};

export default AboutUs;