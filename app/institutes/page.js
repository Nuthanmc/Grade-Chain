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

const InstitutesPage = () => {
  const [institution, setInstitution] = useState([]);
  const [courses, setCourses] = useState([]);
  const [certificates, setCertificates] = useState([]);

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
      contract
        .getInstitute(sessionStorage.getItem("address"))
        .then((res) => {
          console.log(res);
          let arr = [];
          setInstitution({
            id: res[0].id,
            address: res[0].walletAddress,
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

          certificateContract
            .getCertificatesByIssuer(res[0].walletAddress)
            .then((certificates) => {
              let certificatesArr = [];
              certificates.forEach((certificate) => {
                certificatesArr.push({
                  recipientName:
                    certificate.first_name + " " + certificate.last_name,
                  certificateId: certificate.certificateId,
                });
              });
              setCertificates(certificatesArr);
              console.log(certificatesArr);
            });
        })
        .catch((err) => {
          console.log(err);
          sessionStorage.removeItem("address");
          window.location.href = "/";
        });
    };
    getDataFromBlockchain();

    const getCertificatesByIssuer = async () => {};
    getCertificatesByIssuer();
  }, []);
  return (
    <>
      <NavbarInstitutions institute={institution} courses={courses} />
      <InstituteHero
        institute={institution}
        courses={courses}
        certificates={certificates}
        setCertificates={setCertificates}
      />
    </>
  );
};

export default InstitutesPage;
