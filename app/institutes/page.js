"use client";
import NavbarInstitutions from "@/components/NavbarInstitutions";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import {
  CertificateABI,
  certificateContractAddress,
  contractAddress,
  InstitutesABI,
} from "@/constants";
import InstituteHero from "@/components/InstituteHero";
import { doc, getDoc } from "firebase/firestore";
import db from "@/config/firebase";

const InstitutesPage = () => {
  const [institution, setInstitution] = useState([]);
  const [courses, setCourses] = useState([]);
  // const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      contractAddress,
      InstitutesABI,
      signer
    );

    const certificateContract = new ethers.Contract(
      certificateContractAddress,
      CertificateABI,
      signer
    );

    console.log("Certificates Contract: ", certificateContract);

    const getDataFromBlockchain = async () => {
      const docRef = doc(
        db,
        "institutes",
        sessionStorage.getItem("address").toLowerCase()
      );
      getDoc(docRef).then((doc) => {
        if (doc.exists()) {
          console.log("Document data:", doc.data());
          setInstitution({
            id: doc.data().id,
            address: doc.data().walletAddress,
            name: doc.data().name,
            description: doc.data().description,
          });
          console.log(institution);
          console.log(doc.data().courses);
          setCourses(doc.data().courses);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      });
    };
    getDataFromBlockchain();
  }, []);
  return (
    <>
      <NavbarInstitutions institute={institution} courses={courses} />
      <InstituteHero institute={institution} courses={courses} />
    </>
  );
};

export default InstitutesPage;
