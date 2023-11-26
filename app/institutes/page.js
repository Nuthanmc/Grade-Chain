"use client";
import NavbarInstitutions from '@/components/NavbarInstitutions';
import React, { useEffect, useState } from 'react'
import { ethers } from "ethers";
import { contractAddress, InstitutesABI } from '@/constants';

const InstitutesPage = () => {
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
      contract.getInstitute(sessionStorage.getItem("address")).then((res) => {
        console.log(res);
        setInstitution({
          id:res.id,
          address:res.walletAddress,
          name: res.name,
          description: res.description, 
        });
      }).catch((err) => {
        console.log(err);
        sessionStorage.removeItem("address");
        window.location.href = "/";
      });
    };
    getInstitute();
  }, []);
  return (
    <>
      <NavbarInstitutions institute={institution} />
    </>
  )
}

export default InstitutesPage