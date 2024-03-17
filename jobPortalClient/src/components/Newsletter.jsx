import React from 'react'
import { FaEnvelopeOpenText, FaRocket } from 'react-icons/fa6'
import { motion } from 'framer-motion';
const Newsletter = () => {


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
    

    <motion.div   variants={item}
    whileHover={{ scale: 1.1 }}


    whileInView={{y:0,opacity:1}}
    initial={{y:-300,opacity:0}}
    transition={{duration:2}}
    className="flex items-center flex-col gap-4 bg-white p-8 rounded-md hover:bg-blue-200">
      <div>
        <h3 className='text-lg font-bold mb-2 flex items-center gap-2 '>
            <FaEnvelopeOpenText/>
            Email me for Jobs</h3>

        <p className='text-primary/75 text-base mb-4'>lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, veniam.</p>

        <div className='w-full space-y-4'>
        <input type="email" name="email" id="email" placeholder='name@mail.com' className='w-full block py-2 pl-3 border focus:outline-none' />

        < motion.input variants={buttonVariants}
            whileHover="hover" type="submit" value={"Subscribe"}  className='w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold'/>
        </div>

        

      </div>

    {/* second part */}

    <div className='mt-20'>
        <h3 className='text-lg font-bold mb-2 flex items-center gap-2 '>
            <FaRocket/>
            Get noticed faster!</h3>

        <p className='text-primary/75 text-base mb-4'>lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, veniam.</p>

        <div className='w-full space-y-4'>
       

        <motion.input variants={buttonVariants}
            whileHover="hover" type="submit" value={"Upload your resume"}  className='w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold'/>
        </div>

        

      </div>

    </motion.div>
  );
};

export default Newsletter
