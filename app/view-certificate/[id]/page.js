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
  const [qrCode, setQrCode] = useState("");

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

        // const doc = new jsPDF("l", "px", "a4", true);

        // doc.addImage(
        //   "/certificate-2-resized.jpg",
        //   0,
        //   0,
        //   doc.internal.pageSize.width,
        //   doc.internal.pageSize.height
        // );
        // doc.setTextColor(1, 1, 1);
        // doc.setFontSize(48);
        // doc.text(
        //   certificates[1] + " " + certificates[2],
        //   doc.internal.pageSize.width / 2,
        //   170,
        //   {
        //     align: "center",
        //   }
        // );
        // doc.setFontSize(20);
        // doc.text(certificates[5], doc.internal.pageSize.width / 2, 228, {
        //   align: "center",
        // });

        // doc.setFontSize(10);
        // doc.text(
        //   "Scan QR Code to verify",
        //   doc.internal.pageSize.width / 2,
        //   390,
        //   {
        //     align: "center",
        //   }
        // );
        // doc.text(id, doc.internal.pageSize.width / 2, 400, {
        //   align: "center",
        // });

        // QR Code
        const url = await QRCode.toDataURL(
          "https://certi-block-web3.vercel.app/view-certificate/" +
            certificates[0],
          {
            width: 200,
            height: 200,
            margin: 0.2,
            rendererOpts: {
              quality: 1,
            },
          }
        ).then((url) => {
          setQrCode(url);
        });

        // console.log(url);
        // doc.addImage(
        //   url,
        //   "PNG",
        //   doc.internal.pageSize.width / 2 - 50,
        //   doc.internal.pageSize.height / 2 + 50,
        //   100,
        //   100
        // );
        // const output = doc.output("dataurlstring");
        // console.log(output);
        setLoading(false);
        // // Create an embed element
        // var embedElement = document.createElement("embed");
        // embedElement.setAttribute("type", "application/pdf");
        // embedElement.setAttribute("src", output + "#toolbar=0&navpanes=0");
        // embedElement.setAttribute("width", doc.internal.pageSize.width + 200);
        // embedElement.setAttribute("height", doc.internal.pageSize.height + 200);
        // embedElement.setAttribute("unselectable", "on");
        // embedElement.setAttribute("onContextMenu", "return false;");
        // // Append the embed element to a container in the HTML document
        // document.getElementById("pdfContainer").appendChild(embedElement);
        // doc.save("certificate.pdf");
      } catch (error) {
        console.error("Error fetching data from blockchain:", error.message);
        // Handle error as needed
      }
    };
    fetchData();
  }, [id]);

  return (
    <div
      onContextMenu={(e) => {
        e.preventDefault();
        return false;
      }}
      className="h-[98vh] w-screen overflow-x-auto flex items-center justify-center"
    >
      {!loading ? (
        <>
          <div className="block-selection cursor-default w-[1024px] lg:min-w-[1301px] sm:overflow-x-auto sm:overflow-y-auto lg:overflow-hidden min-h-[280px] lg:top-5 lg:min-h-[854px] relative">
            <img
              className="w-full h-full lg:overflow-hidden lg:min-w-[1287.13px] lg:h-[850px] lg:top-4 lg:left-[6px] absolute"
              src="/certificate-3.png"
            />
            <div className="w-[227px] h-[55px] top-[30%] left-[22%] lg:w-[454px] lg:h-[77px] lg:left-[426px] lg:top-[290px] absolute text-center text-black text-[20px] lg:text-[50px] font-normal">
              {certificate.name}
            </div>
            <div className="w-[201px] h-[57px] whitespace-normal top-[48%] left-1/4 lg:w-[807px] lg:h-[57px] lg:left-[251px] lg:top-[428px] absolute text-center text-black text-[9px] lg:text-3xl font-normal ">
              {certificate.course}
            </div>

            {/* Line */}
            <div className="lg:h-[2px] lg:w-[250px] lg:top-[735px] lg:left-[835px] bg-black w-[85px] top-[228px] left-[240px] absolute h-[1px]" />

            <div className="w-[170px] h-[41px] top-[230px] left-[197px] lg:w-[341px] lg:h-[83px] lg:left-[789px] lg:top-[741px] absolute text-center text-black text-[8px] lg:text-[28px] font-normal ">
              Certificate Issued By
            </div>
            <div className="w-[170px] h-[41px] top-[230px] left-[14px] lg:w-[341px] lg:h-[83px] lg:left-[192px] lg:top-[741px] absolute text-center text-black text-[8px] lg:text-3xl font-normal ">
              Issued On
            </div>
            {/* Line */}
            <div className="lg:h-[2px] lg:w-[130px] lg:top-[735px] lg:left-[298px]  bg-black w-[50px] top-[228px] left-[73px] absolute h-[1px]" />

            <div className="w-[100px] text-[6.5px] h-[119px] whitespace-normal left-[48px] top-[215px] lg:w-[347px] lg:h-[119px] lg:left-[185px] lg:top-[666px] absolute text-center text-black lg:text-[25px] font-bold">
              {certificate.creation_date}
              {/* 2021-08-29 */}
            </div>
            <div className="text-[7.5px] w-[100px] h-[119px] whitespace-normal left-[230px] top-[208px] lg:w-[347px] lg:h-[119px] lg:left-[789px] lg:top-[666px] absolute text-center text-black lg:text-[25px] font-bold">
              {certificate.issuerName} {/* JSPM Narhe Technical Campus */}
            </div>
            {/* QR Code */}
            <img
              src={qrCode}
              alt="qr"
              className="w-[50px] h-[50px] top-[68%] left-[45%] lg:w-[200px] lg:h-[200px] lg:left-[42.3%] lg:top-[65%] absolute"
            />
            <div className="w-[100px] h-[119px] left-[143px] top-[245px] lg:w-[379px] lg:h-[43px] lg:left-[463px] lg:top-[765px] absolute text-center text-black text-[6.5px] lg:text-xl font-normal ">
              Scan the QR Code to verify
            </div>
            <div className="w-[130px] h-[119px] left-[125px] top-[253px] lg:w-[441px] lg:h-[43px] lg:left-[432px] lg:top-[785px] absolute text-center text-black text-[6.5px] lg:text-lg font-bold ">
              {certificate.id}
            </div>
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center">
          <p className="loading loading-spinner loading-lg"></p>
          <p className="text-lg ml-3 dark:text-white text-black">
            Fetching certificate details...
          </p>
        </div>
      )}
    </div>
  );
};

export default ViewCertificate;
