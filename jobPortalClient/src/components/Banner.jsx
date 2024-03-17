import React, { useState } from "react";
import { FiMapPin, FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";

const Banner = ({ query, handleInputChange }) => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      

      transition: {
        duration: 0.3,
        yoyo: Infinity
      },
    },
  };

  return (
    <motion.div
      className="max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14"
      whileInView={{ x: 0, opacity: 1 }}
      initial={{ x: -300, opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <motion.h1  variants={buttonVariants}
            whileHover="hover" className="text-5xl font-bold text-primary mb-3">
        Find your <span className="text-blue">dream job</span> today!
      </motion.h1>
      <p className="text-lg text-black/70 mb-8">
        Thousands of job in the computer, engineering and technology sectors are
        waiting for you.
      </p>

      <form>
        <div className="flex justify-start md:flex-row flex-col md:gap-0 gap-4 ">
          <div className="flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/2 w-full">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="What position are you looking for?"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6"
              onChange={handleInputChange}
              value={query}
            />
            <FiSearch className="absolute mt-2.5 ml-2 text-gray-600 " />
          </div>

          <div className="flex md:rounded-s-none rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/3 w-full">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="location"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6"
            />
            <FiMapPin className="absolute mt-2.5 ml-2 text-gray-600 " />
          </div>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            type="submit"
            className="bg-blue py-2 px-8 text-white md:rounded-s-none rounded"
          >
            {" "}
            Search
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default Banner;
