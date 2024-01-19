"use client";
import { CertificateABI, certificateContractAddress } from "@/constants";
import { ethers } from "ethers";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import QRCode from "qrcode";

const ViewCertificate = () => {
  const [loading, setLoading] = useState(true);
  const [certificate, setCertificate] = useState({
    id: "",
    name: "",
    issuerName: "",
    course: "",
    creation_date: "",
  });
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
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
          creation_date: certificates[6],
        });
        setLoading(false);

        const doc = new jsPDF("l", "px", "a4", true);

        doc.addImage(
          "/certificate-2-resized.jpg",
          0,
          0,
          doc.internal.pageSize.width,
          doc.internal.pageSize.height
        );
        doc.setTextColor(1, 1, 1);
        doc.setFontSize(48);
        doc.text(
          certificates[1] + " " + certificates[2],
          doc.internal.pageSize.width / 2,
          170,
          {
            align: "center",
          }
        );
        doc.setFontSize(20);
        doc.text(certificates[5], doc.internal.pageSize.width / 2, 228, {
          align: "center",
        });

        doc.setFontSize(10);
        doc.text(
          "Scan QR Code to verify",
          doc.internal.pageSize.width / 2,
          390,
          {
            align: "center",
          }
        );
        doc.text(id, doc.internal.pageSize.width / 2, 400, {
          align: "center",
        });

        // QR Code
        const url = await QRCode.toDataURL(
          "https://certi-block-web3.vercel.app/view-certificate/" + certificates[0],
          {
            width: 200,
            height: 200,
            margin: 0.2,
            rendererOpts: {
              quality: 1,
            },
          }
        ).then((url) => {
          return url;
        });

        console.log(url);
        doc.addImage(
          url,
          "PNG",
          doc.internal.pageSize.width / 2 - 50,
          doc.internal.pageSize.height / 2 + 50,
          100,
          100
        );
        doc.save("certificate.pdf");
      } catch (error) {
        console.error("Error fetching data from blockchain:", error.message);
        // Handle error as needed
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="h-screen w-screen overflow-x-auto flex items-center justify-center">
      {!loading ? (
        <>
          <p className="text-3xl lg:text-5xl xl:text-6xl mb-3 ml-3  absolute text-white">
            This is just for testing purposes
          </p>
        </>
      ) : (
        <p className="text-3xl lg:text-5xl xl:text-6xl mb-3 ml-3  absolute text-white">
          Loading...
        </p>
      )}
    </div>
  );
};

export default ViewCertificate;
