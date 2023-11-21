"use client";
import NavbarInstitutions from '@/components/NavbarInstitutions';
import React, { useEffect, useState } from 'react'
import Institutes from "@/artifacts/contracts/Institutes.sol/Institutes.json";
import { ethers } from "ethers";

const InstitutesPage = () => {
  const [institution, setInstitution] = useState([]);
  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      "0x2d6a1440550ea48f0665e23b9d19084b0c8c1bd2",
      Institutes.abi,
      signer
    );

    const getInstitute = async () => {
      contract.getInstitute(sessionStorage.getItem("address")).then((res) => {
        console.log(res);
        setInstitution({
          id:res.id,
          address:res.walletAddress,
          name: res.name,
          description: res.description, 
        });
      });
    }
    getInstitute();
  }, []);
  return (
    <>
      <NavbarInstitutions institute={institution} />
    </>
  )
}

export default InstitutesPage