"use client";
import { CertificateABI, certificateContractAddress } from "@/constants";
import { ethers } from "ethers";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
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
  const [qrCodeLarge, setQrCodeLarge] = useState("");
  const { id } = useParams();

  useEffect(() => {
    function isMobile() {
      const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      return regex.test(navigator.userAgent);
    }
    const fetchData = async () => {
      setLoading(true);
      try {
        const provider = new ethers.providers.WebSocketProvider(
          "wss://sepolia.infura.io/ws/v3/0aa8c89265604a2684abddfb063e3b42"
        );
        console.log(provider);
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
        // QR Code
        const url = await QRCode.toDataURL(
          "https://certi-block-web3.vercel.app/validate-certificate?id=" + id,
          {
            width: isMobile() ? 55 : 200,
            height: isMobile() ? 55 : 200,
            margin: 0.2,
            rendererOpts: {
              quality: 1,
            },
          }
        ).then((url) => {
          if (isMobile()) {
            setQrCode(url);
          } else {
            setQrCodeLarge(url)
          }
        });

        setLoading(false);
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
    // className="h-[98vh] w-screen overflow-x-auto flex items-center justify-center"
    >
      {!loading ? (
        // <>
        //   <div className="block-selection cursor-default w-[1024px] lg:min-w-[1301px] sm:overflow-x-auto sm:overflow-y-auto lg:overflow-hidden min-h-[280px] lg:top-5 lg:min-h-[854px] relative">
        //     <img
        //       className="w-full h-full lg:overflow-hidden lg:min-w-[1287.13px] lg:h-[850px] lg:top-4 lg:left-[6px] absolute"
        //       src="/certificate-3.png"
        //     />
        //     <div className="w-[227px] h-[55px] top-[30%] left-[22%] lg:w-[454px] lg:h-[77px] lg:left-[426px] lg:top-[290px] absolute text-center text-black text-[20px] lg:text-[50px] font-normal">
        //       {certificate.name}
        //     </div>
        //     <div className="w-[201px] h-[57px] whitespace-normal top-[48%] left-1/4 lg:w-[807px] lg:h-[57px] lg:left-[251px] lg:top-[428px] absolute text-center text-black text-[9px] lg:text-3xl font-normal ">
        //       {certificate.course}
        //     </div>

        //     {/* Line */}
        //     <div className="lg:h-[2px] lg:w-[250px] lg:top-[735px] lg:left-[835px] bg-black w-[85px] top-[228px] left-[240px] absolute h-[1px]" />

        //     <div className="w-[170px] h-[41px] top-[230px] left-[197px] lg:w-[341px] lg:h-[83px] lg:left-[789px] lg:top-[741px] absolute text-center text-black text-[8px] lg:text-[28px] font-normal ">
        //       Certificate Issued By
        //     </div>
        //     <div className="w-[170px] h-[41px] top-[230px] left-[14px] lg:w-[341px] lg:h-[83px] lg:left-[192px] lg:top-[741px] absolute text-center text-black text-[8px] lg:text-3xl font-normal ">
        //       Issued On
        //     </div>
        //     {/* Line */}
        //     <div className="lg:h-[2px] lg:w-[130px] lg:top-[735px] lg:left-[298px]  bg-black w-[50px] top-[228px] left-[73px] absolute h-[1px]" />

        //     <div className="w-[100px] text-[6.5px] h-[119px] whitespace-normal left-[48px] top-[215px] lg:w-[347px] lg:h-[119px] lg:left-[185px] lg:top-[666px] absolute text-center text-black lg:text-[25px] font-bold">
        //       {certificate.creation_date}
        //       {/* 2021-08-29 */}
        //     </div>
        //     <div className="text-[7.5px] w-[100px] h-[119px] whitespace-normal left-[230px] top-[208px] lg:w-[347px] lg:h-[119px] lg:left-[789px] lg:top-[666px] absolute text-center text-black lg:text-[25px] font-bold">
        //       {certificate.issuerName} {/* JSPM Narhe Technical Campus */}
        //     </div>
        //     {/* QR Code */}
        //     <img
        //       src={qrCode}
        //       alt="qr"
        //       className="w-[50px] h-[50px] top-[68%] left-[45%] lg:w-[200px] lg:h-[200px] lg:left-[42.3%] lg:top-[55%] absolute"
        //     />
        //     <div className="w-[100px] h-[119px] left-[143px] top-[245px] lg:w-[379px] lg:h-[43px] lg:left-[463px] lg:top-[765px] absolute text-center text-black text-[6.5px] lg:text-xl font-normal ">
        //       Scan the QR Code to verify
        //     </div>
        //     <div className="w-[130px] h-[119px] left-[125px] top-[253px] lg:w-[441px] lg:h-[43px] lg:left-[432px] lg:top-[785px] absolute text-center text-black text-[6.5px] lg:text-lg font-bold ">
        //       {certificate.id}
        //     </div>
        //   </div>
        // </>
        <>
          {/* <div className="block-selection cursor-default w-full h-full sm:overflow-x-auto sm:overflow-y-auto relative">
            <img className="min-w-[72.048rem] min-h-[50.313rem] absolute object-fit" src="/certificate-4.jpg" />
          </div>
          <div className="flex items-center justify-center">
            <div className="min-w-[59.25rem] min-h-[6.563rem] top-[20.5rem] font-italianno absolute text-center text-black text-6xl lg:text-8xl font-normal">
              {certificate.name}
            </div>
            <div className="w-full h-10 top-[55%] absolute text-center text-black text-[32px] font-normal tracking-[4.80px] font-lily">{certificate.course === "" ? "N/A" : certificate.course}</div>
            <div className="left-[1020px] top-[850px] absolute text-center text-black text-[15px] font-normal  tracking-tight">To validate the certificate, <br />please scan the QR code.</div>
            <div className="left-[416px] top-[707px] absolute">
              <span className="text-black text-[25px] font-bold ">Issued on: </span>              <span className="text-black text-[25px] font-normal ">{certificate.creation_date}<br /></span>
              <span className="text-black text-[25px] font-bold ">Issued By: </span>
              <span className="text-black text-[25px] font-normal ">{certificate.issuerName}</span>
            </div>
            <div className="left-[416px] top-[806px] absolute text-center">
              <span className="text-black text-2xl font-bold ">Certificate Id<br /></span>
              <span className="text-black text-2xl font-normal ">{certificate.id}</span>
            </div>
          </div> */}
          <div className="min-h-screen sm:ml-96 lg:ml-0 relative flex items-center justify-center">
            <img src="/certificate-4.jpg" alt="Certificate Image" className="absolute w-full h-full object-contain" />
            {/* Certificate Name */}
            <p className="absolute text-black font-italianno bottom-[51%] text-lg lg:text-8xl">{certificate.name}</p>
            {/* Certificate Course */}
            <p className="absolute text-black font-lily bottom-[46%] lg:bottom-[40%] text-md lg:text-6xl">{certificate.course}</p>
            {/* Issued On */}
            <p className="absolute left-[10%] bottom-[44%] lg:left-[24%] lg:bottom-[35%] text-black font-semibold text-[8px] lg:text-2xl">Issued On:&nbsp;</p>
            <p className="absolute left-[20%] bottom-[44%] lg:left-[30.5%] lg:bottom-[35%] text-black font-normal text-[8px] lg:text-2xl">{certificate.creation_date}</p>
            {/* Issued By */}
            <p className="absolute left-[10%] bottom-[42.5%] lg:left-[24%] lg:bottom-[30%] text-black font-semibold text-[8px] lg:text-2xl">Issued By:&nbsp;</p>
            <p className="absolute left-[20%] bottom-[42.5%] lg:left-[30.5%] lg:bottom-[30%] text-black font-normal text-[8px] lg:text-2xl">{certificate.issuerName}</p>
            {/* Certificate ID */}
            <p className="absolute left-[10%] bottom-[37.5%] lg:left-[24%] lg:bottom-[13%] text-black font-semibold text-[8px] lg:text-2xl">Certificate ID:&nbsp;</p>
            <p className="absolute left-[10%] bottom-[36.5%] lg:left-[24%] lg:bottom-[10%] text-black font-normal text-[8px] lg:text-2xl">{certificate.id}</p>

            {/* QR CODE */}
            <img src={qrCode === "" ? qrCodeLarge : qrCode} className="absolute right-[13.5%] bottom-[38.7%] lg:right-[24.3%] lg:bottom-[16%]" />
            <p className="absolute right-[10%] bottom-[36.5%] lg:right-[24%] lg:bottom-[10%] text-black font-normal text-[6px] lg:text-lg">To validate the certificate, <br />please scan the QR code.</p>

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
