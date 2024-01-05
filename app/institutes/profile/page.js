"use client";
import { InstitutesABI, contractAddress } from "@/constants";
import styles from "@/styles";
import { ethers } from "ethers";
// import { getInstitute } from "@/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const InstituteProfile = () => {
  const [imageName, setImageName] = React.useState("/certi-block-black.png");
  const [show, setShow] = useState(false);
  const [institution, setInstitution] = useState([]);
  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      contractAddress,
      InstitutesABI,
      signer
    );

    const getInstitute = async () => {
      contract
        .getInstitute(sessionStorage.getItem("address"))
        .then((res) => {
          console.log(res);
          setInstitution({
            id: res.id,
            address: res.walletAddress,
            name: res.name,
            description: res.description,
          });
          setShow(true);
        })
        .catch((err) => {
          console.log(err);
          sessionStorage.removeItem("address");
          window.location.href = "/";
        });
    };
    getInstitute();
  }, []);

  return (
    <>
      <nav
        className={`${styles.xPaddings} py-8 relative text-black dark:text-white`}
      >
        <div
          className={`${styles.innerWidth} mx-auto flex items-center justify-between gap-8`}
        >
          <h2 className="font-extrabold text-[18px] lg:text-[24px] flex items-center justify-center lg:leading-[30px] dark:text-white">
            <Image
              src={imageName}
              width={48}
              height={48}
              alt="Certi-Block Logo"
              className="w-[48px] h-[48px] object-contain hidden lg:flex"
            />
            &nbsp;CERTI-BLOCK
          </h2>
          <div className="flex gap-3">
            <button
              type="button"
              className="font-bold text-[18px] leading-[25px] dark:text-white hover:text-gray-600 dark:hover:text-gray-500"
              onClick={() => window.history.back()}
            >
              Back
            </button>
            <a
              type="button"
              href="/contactus"
              className="font-bold text-[18px] leading-[25px] dark:text-white hover:text-gray-600 dark:hover:text-gray-500"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
      <section>
        <div className="bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                <span className="block">Institute Profile</span>

                <div class="w-full mx-auto z-20 mt-10 flex-auto bg-white px-4 py-10 shadow-2xl shadow-gray-900/10 sm:mx-auto sm:flex-none rounded-3xl sm:p-24">
                  <div class="space-y-6">
                    <div>
                      <label
                        for="address"
                        class="mb-2 block text-sm text-center font-semibold text-gray-900"
                      >
                        Institute Name
                      </label>
                      <p
                        id="address"
                        class="block w-full appearance-none rounded-lg border border-gray-200 bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                      >
                        {institution?.name}
                      </p>
                    </div>
                    <div>
                      <label
                        for="address"
                        class="mb-2 block text-sm text-center font-semibold text-gray-900"
                      >
                        Wallet Address
                      </label>
                      <p
                        id="address"
                        class="block w-full appearance-none rounded-lg border border-gray-200 bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                      >
                        {institution?.address}
                      </p>
                    </div>
                    <div>
                      <label
                        for="description"
                        class="mb-2 block text-sm text-center font-semibold text-gray-900"
                      >
                        Description
                      </label>
                      <p
                        id="description"
                        class="block w-full appearance-none rounded-lg border border-gray-200 bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                      >
                        {institution?.description}
                      </p>
                    </div>
                  </div>
                </div>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InstituteProfile;
