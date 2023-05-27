import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Typewriter from "./Typewriter";
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`${styles.paddingX} absolute inset-0 top-32 max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1
            className={`font-black text-white lg:text-[50px] md:text-[50px] sm:text-[60px] xs:text-[50px] text-[30px] mt-2`}
          >
            Hi, I'm <span className='text-[#915EFF] ml-1 mr-2'>Kushagra</span>
            <br className='sm:block min-[320px]:block hidden' />
            <Typewriter />
          </h1>
          <p className={`${styles.heroSubText}text-white-100`}>
            I develop 3D visuals, user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className='absolute xs:bottom-0 bottom-2 w-full flex justify-center items-center'>
        {/* Mouse scroll animation yb framer */}
        <a href='#about'>
          <div className='w-8 h-[52px] rounded-3xl border-2 border-secondary flex items-center justify-start p-2'>
            <motion.div
              animate={{
                y: [0, 25, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-2'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
