import React from "react";
import { motion } from "framer-motion";

const TestMotion = () => {
  return (
    <React.Fragment>
      <section>
        <motion.div
          className="bg-red-600 w-20 h-20 rounded-2xl "
          animate={{ x: 1200 }}
          transition={{ duration: 3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        />

        <motion.h1
          className="bg-gradient-to-l from-red-400 via-yellow-600 to-green-400 text-transparent bg-clip-text text-3xl"
          animate={{ x: 200 }}
          transition={{ duration: 3 }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo tempore
          aperiam cum!
        </motion.h1>
      </section>
    </React.Fragment>
  );
};

export default TestMotion;
