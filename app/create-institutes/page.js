"use client";
import React, { useEffect, useState } from "react";
import Institutes from "@/artifacts/contracts/Institutes.sol/Institutes.json";
import { ethers } from "ethers";

const CreateInstitutes = () => {
  const [formData, setFormData] = useState({
    address: "",
    name: "",
    description: "",
    password: "",
  });
  const [institutes, setInstitutes] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      Institutes.abi,
      signer
    );

    const getAllInstitutes = async () => {
      contract
        .getAllInstitutes()
        .then((institutes) => {
          let arr = [];
          institutes.forEach((institute) => {
            arr.push({
              id: institute.id._hex,
              walletAddress: institute.walletAddress,
              name: institute.name,
              description: institute.description,
              password: institute.password,
            });
            console.log(institute.id._hex);
            console.log(institute.walletAddress);
            console.log(institute.name);
            console.log(institute.description);
            console.log(institute.password);
          });
          setInstitutes(arr);
        })
        .catch((err) => console.log(err));
    };
    getAllInstitutes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts);

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        "0x5FbDB2315678afecb367f032d93F642f64180aa3",
        Institutes.abi,
        signer
      );

      //   Perform contract interaction (e.g., create institute) here
      const transaction = await contract.addInstitute(
        formData.address,
        formData.name,
        formData.description,
        formData.password
      );
      await transaction.wait();
      console.log("Transaction successful:", transaction);
      alert("Institute Created Successfully");
      //   Provide user feedback here (success message, redirect, etc.)
    } catch (error) {
      console.error("Error:", error);
      // Handle error (show error message to the user, log it, etc.)
    }
  };

  return (
    <section className="flex flex-col md:flex-row h-screen items-center">
      <div className="bg-[#083D77] hidden lg:block w-full md:w-1/2 xl:w-2/3">
        <div className="flex items-center justify-center mt-10 h-[95.5vh]">
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Wallet Address</th>
                  <th>Institute Name</th>
                  <th>Description</th>
                  <th>Password</th>
                </tr>
              </thead>
              <tbody>
                {institutes.map((institute, index) => (
                  <tr key={institute.id?._hex}>
                    <td>{index + 1}</td>
                    <td>{institute.walletAddress}</td>
                    <td>{institute.name}</td>
                    <td>{institute.description}</td>
                    <td>{institute.password}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12         flex items-center justify-center">
        <div className="w-full h-100">
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
            Create Institute Account
          </h1>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-300">
                Enter Institute Wallet Address
              </label>
              <input
                type="text"
                placeholder="Enter Wallet Address"
                autoFocus
                onChange={(e) => handleChange(e)}
                name="address"
                required
                className="input input-bordered input-primary w-full max-w-2xl"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-300">
                Enter Institute Name
              </label>
              <input
                type="text"
                placeholder="Enter Institute Name"
                onChange={(e) => handleChange(e)}
                name="name"
                required
                className="input input-bordered input-primary w-full max-w-2xl"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-300">
                Enter Institute Description
              </label>
              <input
                type="text"
                placeholder="Enter Description"
                onChange={(e) => handleChange(e)}
                name="description"
                required
                className="input input-bordered input-primary w-full max-w-2xl"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-300">Password</label>
              <input
                type="password"
                name="password"
                onChange={(e) => handleChange(e)}
                required
                placeholder="Enter Password"
                className="input input-bordered input-primary w-full max-w-2xl"
              />
            </div>
            <button
              type="submit"
              className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg               px-4 py-3 mt-6"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CreateInstitutes;
