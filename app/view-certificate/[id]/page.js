"use client";
import { CertificateABI, certificateContractAddress } from "@/constants";
import { ethers } from "ethers";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const ViewCertificate = () => {
  const [certificate, setCertificate] = useState({
    id: "",
    name: "",
    issuerName: "",
    course: "",
    creation_date: ""
  });
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const provider = new ethers.providers.WebSocketProvider(
          "wss://sepolia.infura.io/ws/v3/0aa8c89265604a2684abddfb063e3b42"
        );
        console.log(provider);
        // const predefinedPrivateKey = "03b5d010cf2b3497720807f99ae858448812e83e61099845b52217648380fcef";

        // Create a signer using the predefined private key
        const signer = provider.getSigner();
        console.log(signer);
        // Create contract instance with the predefined signer
        const contract = new ethers.Contract(
          certificateContractAddress,
          CertificateABI,
          provider
        );

        console.log("Certificates Contract: ", contract);

        // Call the contract function;
        const certificates = await contract.getCertificateByIdDirect(id);

        console.log(certificates);
        setCertificate({
          id: certificates[0],
          name: certificates[1] + " " + certificates[2],
          issuerName: certificates[3],
          course: certificates[5],
          creation_date: certificates[6]
        });
      } catch (error) {
        console.error("Error fetching data from blockchain:", error.message);
        // Handle error as needed
      }
    };

    fetchData();
  }, [id]);
  return (
    <div className="h-screen w-full m-5 flex items-center justify-center">
      <div className="card bg-white h-full border w-10/12">
        <div className="card-header m-5 flex justify-between">
          <div className="card-title">
            <h4 className="text-2xl font-semibold">Certificate</h4>
          </div>
        </div>
        <div className="card-body">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <span className="text-sm text-black font-semibold">
                  Certificate Id:&nbsp;
                </span>
                <span className="text-sm font-bold text-gray-500">
                  {certificate?.id}
                </span>
              </div>
              <div className="flex flex-row">
                <span className="text-sm text-black font-semibold">
                  Reciever&apos;s Name:&nbsp;
                </span>
                <span className="text-sm font-bold text-gray-500">
                  {certificate?.name}
                </span>
              </div>
              <div className="flex flex-row">
                <span className="text-sm text-black font-semibold">
                  Certificate Issuer&apos;s Name:&nbsp;
                </span>
                <span className="text-sm font-bold text-gray-500">
                  {certificate?.issuerName}
                </span>
              </div>
              <div className="flex flex-row">
                <span className="text-sm text-black font-semibold">
                  Course Name:&nbsp;
                </span>
                <span className="text-sm font-bold text-gray-500">
                  {certificate?.course}
                </span>
              </div>
              <div className="flex flex-row">
                <span className="text-sm text-black font-semibold">
                  Certificate Issued Date:&nbsp;
                </span>
                <span className="text-sm font-bold text-gray-500">
                  {certificate?.creation_date}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCertificate;
