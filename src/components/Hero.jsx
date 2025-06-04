import {motion} from 'framer-motion';
import {styles} from '../styles';
// import { ComputersCanvas } from './canvas';
// 

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
  <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
  <div className="flex flex-col justify-center items-center mt-5">
    <div className="w-5 h-5 rounded-full bg-[#915eff]" />
    <div className="w-1 sm:h-80 h-40 violet-gradient" />
  </div>

  <div>
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
      Hey there! I'm <span className="text-indigo-400">Jeeshan</span> 👋
    </h1>


    
   

    <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-2xl">
      A passionate <span className="text-yellow-300">Full-Stack Developer</span> and tech enthusiast who loves building powerful apps, solving real-world problems, and exploring new technologies.
    </p>

    <p className="text-lg text-gray-400 mb-6 max-w-2xl">
      Currently working on improving my skills in <span className="text-green-300">React, Node.js, and Cloud technologies</span>. I'm always open to <span className="text-pink-400">collaboration, internships, or freelance gigs</span>.
    </p>
    <br/>
     <p className={`${styles.heroSubText} text-lg text-gray-400 mb-6 max-w-2xl`}>
      I am a student at AKGEC Ghaziabad, pursuing B.Tech from CSE branch.
    </p>
  </div>
</div>


    

   
   {/* <ComputersCanvas/>  */}
   
    
   {/* <div className="absolute xs:bottom-10 bottom-30 w-full flex justify-center items-center">
   <a href="#about">
    <div className="w-[32px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
      <motion.dev
      animate={{y:[0,24,0]}}
      transition={{
        duration:2.5,
        repeat:Infinity,
        repeatType:'loop'}}
        className="w-3 h-3 rounded-full bg-secondary  mb-1"
      />

     

    </div>
   </a>

   </div> */}

    </section>
  )
}

export default Hero