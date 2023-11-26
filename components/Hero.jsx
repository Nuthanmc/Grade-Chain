"use client";
import { motion } from "framer-motion";
import styles from "@/styles";
import { staggerContainer, textVariant } from "@/utils/motion";
import { ethers } from "ethers";
import { contractAddress, InstitutesABI } from "@/constants";
import toast from "react-hot-toast";

const Hero = () => {
  const handleLogin = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log(accounts);

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      contractAddress,
      InstitutesABI,
      signer
    );

    contract
      .login(accounts[0])
      .then((approved) => {
        if (approved) {
          sessionStorage.setItem("address", accounts[0]);
          window.location.href = "/institutes";
        } else {
          toast.error("Login Failed. Please use the correct account.");
          document.getElementById("login_modal").close();
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Login Failed");
        document.getElementById("login_modal").close();
      });
  };
  return (
    <>
      <div className="hero sm:mb-28 mb-0 md:min-h-[92vh]">
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
              className="absolute overflow-x-hidden  h-[20%] blur-[40px] bg-gradient-to-r dark:from-purple-700 dark:via-teal-400 dark:to-purple-700 from-purple-400 via-teal-300 to-indigo-300 bg-opacity-50 w-1/2   rounded-xl"
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
                  onClick={() => {
                    document.getElementById("login_modal").showModal();
                    handleLogin();
                  }}
                >
                  Issue Certificates
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* <dialog id="login_modal" className="modal backdrop-blur">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Login to your Metamask Wallet Account
          </h3>
          <p className="py-4">
            Login to your Metamask Account on Sepolia Testnet
          </p>
          <div className="items-center flex justify-center flex-col">
            <span className="loading loading-ring w-20"></span>
            <p className="text-base">Waiting for your response...</p>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-accent">Cancel</button>
            </form>
            
          </div>
        </div>
      </dialog> */}
    </>
  );
};

export default Hero;
