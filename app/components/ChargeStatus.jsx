"use client";
import React from 'react';
import { motion } from 'framer-motion';

const ChargeStatus = ({ cardColor }) => {
    return (
        <motion.div
            className={`charge__status ${cardColor} `}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ ease: 'easeInOut', duration: 0.4 }}
        />


    );
};

export default ChargeStatus;
