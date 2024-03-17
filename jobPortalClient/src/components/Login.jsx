import React from 'react';
import { motion } from 'framer-motion';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from '../firebase/firebase.config';

const Login = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const handleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // Perform actions after successful login
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
        // Handle errors during login
      });
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      rotate: 360,
      transition: {
        duration: 0.3,
        yoyo: Infinity
      },
    },
  };

  return (
    <motion.div className='h-screen w-full flex items-center justify-center'>
      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        className='bg-blue px-8 py-2 text-white'
        onClick={handleLogin}
      >
        Login
      </motion.button>
    </motion.div>
  );
};

export default Login;

