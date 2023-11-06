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
            {/* <div className="absolute h-[20%] hero-gradient" /> */}
            <motion.div
              variants={textVariant(1.1)}
              class="absolute h-[20%] blur-[40px] bg-gradient-to-r from-purple-700 via-teal-400 to-purple-700 bg-opacity-50 w-1/2 rounded-xl"
            />

            <div className="flex justify-center items-center flex-col relative z-10">
              <motion.h1
                variants={textVariant(1.1)}
                className="mb-5 text-5xl dark:text-white text-black font-bold"
              >
                CERTI-BLOCK
              </motion.h1>
              <motion.p
                variants={textVariant(1.3)}
                className="mb-5 text-lg dark:text-white text-black"
              >
                Certi-Block is a blockchain-based certificate validation system
                that provides a secure and reliable way to verify the
                authenticity of certificates.
              </motion.p>
              <motion.div
                variants={textVariant(1.7)}
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
