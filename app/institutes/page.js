"use client";
import NavbarInstitutions from '@/components/NavbarInstitutions';
import React, { useEffect, useState } from 'react'
import { ethers } from "ethers";
import { contractAddress, InstitutesABI } from '@/constants';

const InstitutesPage = () => {
  const [institution, setInstitution] = useState([]);
  const [courses, setCourses] = useState([]);
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
        let arr = [];
        setInstitution({
          id:res[0].id,
          address:res[0].walletAddress,
          name: res[0].name,
          description: res[0].description, 
        });
        res[1].forEach((course) => {
          console.log(course);
          course.forEach((c) => {
            arr.push(c);
          });
        });
        setCourses(arr);
        console.log(institution);
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
      <NavbarInstitutions institute={institution} courses={courses} />
    </>
  )
}

export default InstitutesPage