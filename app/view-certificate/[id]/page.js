"use client";
import {
  CertificateABI,
  InterFont,
  ItaliannoFont,
  LilyScriptOneFont,
  certificateContractAddress,
} from "@/constants";
import { ethers } from "ethers";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import QRCode from "qrcode";
import jsPDF from "jspdf";

const ViewCertificate = () => {
  const [loading, setLoading] = useState(true);
  const [loadingText, setLoadingText] = useState(
    "Fetching Certificate details..."
  );
  const { id } = useParams();
  useEffect(() => {
    function isMobile() {
      const regex =
        /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      return regex.test(navigator.userAgent);
    }
    const fetchData = async () => {
      setLoading(true);
      try {
        const provider = new ethers.providers.WebSocketProvider(
          "wss://sepolia.infura.io/ws/v3/0aa8c89265604a2684abddfb063e3b42"
        );
        // console.log(provider);
        // Create a signer using the predefined private key
        const signer = provider.getSigner();
        // console.log(signer);
        // Create contract instance with the predefined signer
        const contract = new ethers.Contract(
          certificateContractAddress,
          CertificateABI,
          provider
        );

        // console.log("Certificates Contract: ", contract);

        // Call the contract function;
        const certificates = await contract.getCertificateByIdDirect(id);
        console.log("Certificate contract found");
        console.log(certificates);

        setLoadingText("Loading Certificate...");

        console.log("Generating pdf");
        const doc = new jsPDF("l", "px", "a4");

        doc.addImage(
          "/certificate-template/1.png",
          0,
          0,
          doc.internal.pageSize.width,
          doc.internal.pageSize.height
        );
        // add Italianno Font
        if (doc.getFont("Italianno-Regular").fontName !== "Italianno-Regular") {
          doc.addFileToVFS("Italianno-Regular-normal.ttf", ItaliannoFont);
          doc.addFont(
            "Italianno-Regular-normal.ttf",
            "Italianno-Regular",
            "normal"
          );
          console.log("Font added");
        }
        doc.setTextColor(1, 1, 1);
        doc.setFontSize(55);
        doc.setFont("Italianno-Regular", "normal");
        doc.text(
          certificates[1] + " " + certificates[2],
          doc.internal.pageSize.width / 2,
          205,
          {
            align: "center",
          }
        );
        // add Lily Script One Font
        if (
          doc.getFont("LilyScriptOne-Regular-normal").fontName !==
          "LilyScriptOne-Regular-normal"
        ) {
          doc.addFileToVFS("LilyScriptOne-Regular-normal.ttf", LilyScriptOneFont);
          doc.addFont(
            "LilyScriptOne-Regular-normal.ttf",
            "LilyScriptOne-Regular",
            "normal"
          );
          console.log("Font Lily Script One added");
        }
        doc.setFontSize(35);
        doc.setFont("LilyScriptOne-Regular", "normal");
        doc.text(certificates[5], doc.internal.pageSize.width / 2, 268, {
          align: "center",
        });

        // set font to normal
        // add Inter Font
        if (doc.getFont("Inter").fontName !== "Inter") {
          doc.addFileToVFS("Inter-normal.ttf", InterFont);
          doc.addFont("Inter-normal.ttf", "Inter", "normal");
          console.log("Font Inter added");
        }
        doc.setFont("Inter", "normal");
        doc.setFontSize(12);
        doc.text(
          "To validate the certificate,",
          // 75% of the doc.interal.pageSize.width
          doc.internal.pageSize.width / 2 +
            doc.internal.pageSize.width / 4 +
            25,
          390,
          {
            align: "center",
          }
        );
        doc.text(
          "please scan the QR Code",
          // 75% of the doc.interal.pageSize.width
          doc.internal.pageSize.width / 2 +
            doc.internal.pageSize.width / 4 +
            25,
          400,
          {
            align: "center",
          }
        );
        // QR Code
        await QRCode.toDataURL(
          "https://certi-block-web3.vercel.app/validate-certificate?id=" + id,
          {
            width: 200,
            height: 200,
            margin: 0.2,
            rendererOpts: {
              quality: 1,
            },
          }
        ).then((url) => {
          doc.addImage(
            url,
            "PNG",
            doc.internal.pageSize.width / 2 +
              doc.internal.pageSize.width / 4 -
              25,
            doc.internal.pageSize.height / 2 + 55,
            100,
            100
          );
        });
        doc.setFontSize(18);
        doc.text("Issued On: ", doc.internal.pageSize.width / 3 - 150, 300, {
          align: "left",
        });

        doc.text(certificates[6], doc.internal.pageSize.width / 3 - 85, 300, {
          align: "left",
        });
        // 3, 0
        doc.text("Issued By: ", doc.internal.pageSize.width / 3 - 150, 315, {
          align: "left",
        });
        doc.text(certificates[3], doc.internal.pageSize.width / 3 - 85, 315, {
          align: "left",
        });

        doc.setFontSize(14);
        doc.text(
          "Certificate ID: ",
          doc.internal.pageSize.width / 3 - 150,
          400,
          {
            align: "left",
          }
        );
        doc.text(certificates[0], doc.internal.pageSize.width / 3 - 81, 400, {
          align: "left",
        });
        const output = doc.output("dataurlstring");
        // Set the worker source for PDF.js library
        setLoading(false);
        pdfjsLib.GlobalWorkerOptions.workerSrc =
          "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js";
        const pdf = await pdfjsLib.getDocument(output).promise;
        console.log(pdf);
        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale: 1 });
        const canvas = document.getElementById("certificate");
        const context = canvas.getContext("2d");
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };
        await page.render(renderContext);
        if (isMobile()) {
          canvas.style.transformOrigin = "center center";
          canvas.style.transform = "scale(0.40)";
          canvas.style.translate = "-27.5% 0%";
          canvas.style.margin = "0% 0%";
        }
        console.log("pdf generated");
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
      className="lg:h-screen lg:w-screen lg:flex lg:items-center lg:justify-center overflow-hidden"
    >
      {!loading ? (
        <>
          <canvas id="certificate"></canvas>
        </>
      ) : (
        <div className="h-screen flex items-center justify-center">
          <p className="loading loading-spinner loading-lg"></p>
          <p className="text-lg ml-3 dark:text-white text-black">
            {loadingText}
          </p>
        </div>
      )}
    </div>
  );
};

export default ViewCertificate;
