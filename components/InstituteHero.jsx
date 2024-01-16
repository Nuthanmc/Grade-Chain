import { CertificateABI, certificateContractAddress } from "@/constants";
import { ethers } from "ethers";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

const InstituteHero = ({
  institute,
  courses,
  certificates,
  setCertificates,
}) => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [course, setCourse] = React.useState("");
  const [createLoading, setCreateLoading] = React.useState(false);

  const getAllCertificates = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        certificateContractAddress,
        CertificateABI,
        signer
      );
      const certificates = await contract.getCertificatesByIssuer(
        institute.address
      );
      console.log(certificates);
      return certificates;
    } catch (err) {
      console.log(err);
    }
  };

  console.log(institute?.address);

  const handleSubmit = async () => {
    setCreateLoading(true);
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts);

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        certificateContractAddress,
        CertificateABI,
        signer
      );
      console.log("Institute Name:  ", institute.name);
      console.log("Institute Address:  ", institute.walletAddress);
      const tx = await contract.generateCertificate(
        firstName,
        lastName,
        institute.name,
        institute.address,
        course
      );
      await tx.wait();
      console.log("Certificate generated successfully:", tx);
      toast.success("Certificate Generated Successfully");
      setCreateLoading(false);
      document.getElementById("cancel_issue_certificate_modal").click();
      getAllCertificates().then((certificates) => {
        setCertificates(certificates);
      });
    } catch (err) {
      console.log(err);
      toast.error("Error while issuing certificate");
      setCreateLoading(false);
    }
  };

  return (
    <div className="h-screen flex flex-col m-4">
      <div className="flex items-center justify-between border rounded-lg border-gray-700 p-2">
        <h3 className="ml-3 text-sm text-ellipsis lg:text-lg">
          Welcome {institute.name}
        </h3>
        <button
          onClick={() => {
            document.getElementById("issue_certificates_modal").showModal();
          }}
          className="btn btn-success"
        >
          Issue Certificate
        </button>
      </div>
      <table className="table m-2">
        <caption className="text-left text-2xl text-gray-900 dark:text-slate-200">
          Issued Certificates
        </caption>
        <thead className="text-center">
          <tr>
            <th className="text-lg">Sr. No.</th>
            <th className="text-lg">Recipient Name</th>
            <th className="text-lg">Certificate ID</th>
            <th className="text-lg">View Certificate</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {certificates.length > 0 ? (
            certificates.map((certificate, index) => (
              <tr key={certificate._id}>
                <td className="text-lg">{index + 1}</td>
                <td className="text-lg">{certificate.recipientName}</td>
                <td className="text-lg">{certificate.certificateId}</td>
                <td className="text-lg">
                  <Link
                    target="_blank"
                    referrerPolicy="no-referrer"
                    href={`http://localhost:3000/view-certificate/${certificate.certificateId}`}
                  >
                    View Certificate
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-lg text-center">
                No Certificates Issued
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <dialog id="issue_certificates_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Issue Certificate</h3>

          <div className="form-control">
            <label className="label">
              <span className="label-text">
                Recipient&apos;s First Name{" "}
                <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Recipient's First Name"
              autoFocus
              onChange={(e) => setFirstName(e.target.value)}
              name="first_name"
              required
              value={firstName}
              className="input input-bordered input-primary w-full max-w-2xl"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">
                Recipient&apos;s Last Name{" "}
                <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Recipient's Last Name"
              onChange={(e) => setLastName(e.target.value)}
              name="last_name"
              required
              value={lastName}
              className="input input-bordered input-primary w-full max-w-2xl"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">
                Institute&apos;s Name <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              readOnly
              name="institute_name"
              required
              value={institute.name}
              disabled
              className="input input-bordered input-primary w-full max-w-2xl"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">
                Course Name <span className="text-red-500">*</span>
              </span>
            </label>
            <select
              onChange={(e) => {
                setCourse(e.target.value);
              }}
              className="select select-primary text-white select-bordered w-full"
            >
              <option disabled selected className="text-black dark:text-white">
                Select Course
              </option>
              {courses.map((course, index) => (
                <option
                  className="text-black dark:text-white"
                  key={index + 1}
                  value={course}
                >
                  {course}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-end justify-end gap-2">
            <div className="modal-action">
              <form method="dialog" className="">
                <button
                  id="cancel_issue_certificate_modal"
                  className="btn btn-outline btn-error"
                >
                  Cancel
                </button>
              </form>
            </div>
            <button
              disabled={
                firstName === "" ||
                lastName === "" ||
                course === "" ||
                course === "Select Course"
              }
              onClick={(e) => {
                e.preventDefault();
                let res = confirm(
                  `Are you sure you want to issue certificate to ${
                    firstName + " " + lastName
                  }?`
                );
                if (res === true) {
                  handleSubmit();
                } else {
                  document
                    .getElementById("cancel_issue_certificate_modal")
                    .click();
                }
              }}
              className="btn btn-outline btn-success"
            >
              {!createLoading ? (
                "Issue Certificate"
              ) : (
                <span className="loading loading-spinner loading-md"></span>
              )}
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default InstituteHero;
