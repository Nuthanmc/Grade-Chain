import { motion } from "framer-motion";
import styles from "@/styles";
import { staggerContainer, textVariant } from "@/utils/motion";

const Hero = () => {
  return (
    <>
      <div className="hero min-h-[92vh]">
        <div className="hero-content text-center text-neutral-content">
          <motion.div
            className={`${styles.innerWidth} flex items-center justify-center flex-col`}
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <motion.div
              variants={textVariant(0.5)}
              className="absolute h-[20%] blur-[40px] bg-gradient-to-r dark:from-purple-700 dark:via-teal-400 dark:to-purple-700 from-purple-400 via-teal-300 to-indigo-300 bg-opacity-50 w-1/2 rounded-xl"
            />

            <div className="flex justify-center items-center flex-col relative z-10">
              <motion.h1
                variants={textVariant(0.5)}
                className="mb-5 text-5xl dark:text-white text-black font-bold"
              >
                CERTI-BLOCK
              </motion.h1>
              <motion.p
                variants={textVariant(0.7)}
                className="mb-5 text-lg dark:text-white text-black"
              >
                Certi-Block is a blockchain-based certificate validation system
                that provides a secure and reliable way to verify the
                authenticity of certificates.
              </motion.p>
              <motion.div
                variants={textVariant(0.9)}
                className="flex flex-col lg:flex-row items-center justify-center mt-5"
              >
                <button
                  className="btn btn-primary"
                  onClick={() => (window.location.href = "/validate")}
                >
                  Validate Certificates
                </button>
                <br />
                <p className="text-white">&nbsp;&nbsp;OR&nbsp;&nbsp;</p>
                <br />
                <button
                  className="btn btn-secondary"
                  onClick={() => (window.location.href = "/login")}
                >
                  Issue Certificates
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
