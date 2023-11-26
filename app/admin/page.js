"use client";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import toast from "react-hot-toast";
import { contractAddress, InstitutesABI } from "@/constants";

const CreateInstitutes = () => {
  const [formData, setFormData] = useState({
    address: "",
    name: "",
    description: "",
  });
  const [approved, setApproved] = useState(false);
  const [institutes, setInstitutes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [createLoading, setCreateLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (!window.ethereum) {
      toast.error("Please install metamask to continue");
    }
    if (sessionStorage.getItem("address") !== "info.certi-block@gmail.com") {
      window.location.href = "/";
    }
  }, []);

  const getAllInstitutes = async () => {
    setLoading(true);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    console.log(signer);
    const contract = new ethers.Contract(
      contractAddress,
      InstitutesABI,
      signer
    );

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
            approved: institute.approved,
          });
        });
        setInstitutes(arr);
        console.log(arr);
      })
      .catch((err) => {
        toast.error("Please login to Metamask");
        console.log(err);
      });
    setLoading(false);
  };

  useEffect(() => {
    getAllInstitutes();
  }, []);

  const handleSubmit = async () => {
    try {
      setCreateLoading(true);
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts);

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        InstitutesABI,
        signer
      );

      //   Perform contract interaction (e.g., create institute) here
      const transaction = await contract.addInstitute(
        formData.address,
        formData.name,
        formData.description,
        approved
      );
      await transaction.wait();
      console.log("Transaction successful:", transaction);
      toast.success("Institute Created Successfully");
      setCreateLoading(false);
      document.getElementById("cancel_add_institute_dialog").click();
      getAllInstitutes();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    // <section className="flex flex-col h-screen items-center">
    //   <div className="w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12         flex items-center justify-center">
    //     <div className="w-full h-100">
    //       <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
    //         Create Institute Account
    //       </h1>
    //       <form className="mt-6" onSubmit={handleSubmit}>
    //         <div>
    //           <label className="block text-gray-300">
    //             Enter Institute Wallet Address
    //           </label>
    //           <input
    //             type="text"
    //             placeholder="Enter Wallet Address"
    //             autoFocus
    //             onChange={(e) => handleChange(e)}
    //             name="address"
    //             required
    //             className="input input-bordered input-primary w-full max-w-2xl"
    //           />
    //         </div>
    //         <div className="mt-4">
    //           <label className="block text-gray-300">
    //             Enter Institute Name
    //           </label>
    //           <input
    //             type="text"
    //             placeholder="Enter Institute Name"
    //             onChange={(e) => handleChange(e)}
    //             name="name"
    //             required
    //             className="input input-bordered input-primary w-full max-w-2xl"
    //           />
    //         </div>
    //         <div className="mt-4">
    //           <label className="block text-gray-300">
    //             Enter Institute Description
    //           </label>
    //           <input
    //             type="text"
    //             placeholder="Enter Description"
    //             onChange={(e) => handleChange(e)}
    //             name="description"
    //             required
    //             className="input input-bordered input-primary w-full max-w-2xl"
    //           />
    //         </div>
    //         <div className="mt-4">
    //           <label className="block text-gray-300">Password</label>
    //           <input
    //             type="password"
    //             name="password"
    //             onChange={(e) => handleChange(e)}
    //             required
    //             placeholder="Enter Password"
    //             className="input input-bordered input-primary w-full max-w-2xl"
    //           />
    //         </div>
    //         <button
    //           type="submit"
    //           className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg               px-4 py-3 mt-6"
    //         >
    //           Create Account
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    //   <div className="bg-[#083D77] hidden lg:block w-full">
    //     <div className="flex items-center justify-center mt-10 h-[95.5vh]">
    //       <div className="overflow-x-auto">
    //         <table className="table table-zebra">
    //           <thead>
    //             <tr>
    //               <th>ID</th>
    //               <th>Wallet Address</th>
    //               <th>Institute Name</th>
    //               <th>Description</th>
    //               <th>Password</th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             {institutes.map((institute, index) => (
    //               <tr key={institute.id?._hex}>
    //                 <td>{index + 1}</td>
    //                 <td>{institute.walletAddress}</td>
    //                 <td>{institute.name}</td>
    //                 <td>{institute.description}</td>
    //                 <td>{institute.password}</td>
    //               </tr>
    //             ))}
    //           </tbody>
    //         </table>
    //       </div>
    //     </div>
    //   </div>

    // </section>
    <section className="h-screen">
      {/* <div className="w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
        <div className="w-full h-100">
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
            Create Institute Account
          </h1>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mt-4">
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
              className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
      <div className="bg-[#083D77] hidden lg:block w-full">
        <div className="flex items-center justify-center mt-10 h-[95.5vh]">
          <div className="overflow-x-auto">
            <table className="table-auto">
              <thead className="text-white">
                <tr>
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Wallet Address</th>
                  <th className="px-4 py-2">Institute Name</th>
                  <th className="px-4 py-2">Description</th>
                  <th className="px-4 py-2">Password</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                {institutes.map((institute, index) => (
                  <tr key={institute.id?._hex}>
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{institute.walletAddress}</td>
                    <td className="px-4 py-2">{institute.name}</td>
                    <td className="px-4 py-2">{institute.description}</td>
                    <td className="px-4 py-2">{institute.password}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div> */}
      {/* Navbar */}
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Certi-Block</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end space-x-4">
            <button
              className="btn btn-success"
              onClick={() =>
                document.getElementById("add_institute_modal").showModal()
              }
            >
              Add Institute
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                window.location.href = "/institutes/profile";
              }}
            >
              Profile
            </button>
            <button
              onClick={() => {
                window.location.href = "/institutes/settings";
              }}
              className="btn btn-accent"
            >
              Settings
            </button>
            <button
              className="btn btn-ghost"
              onClick={() =>
                document.getElementById("logout_modal").showModal()
              }
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex mt-10 items-center justify-center">
          <div className="overflow-x-auto">
            <h3 className="text-md sm:text-xl text-white capitalize p-3">
              Institutes
            </h3>
            <table className="table">
              <thead>
                <tr className="text-center text-md md:text-lg">
                  <th>ID</th>
                  <th>Wallet Address</th>
                  <th>Institute Name</th>
                  <th>Description</th>
                  <th>Approved</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    {/* Loading */}
                    <td
                      role="status"
                      className=" p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
                      colSpan={5}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full mb-2.5"></div>
                          <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        </div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-full"></div>
                      </div>
                      <div className="flex items-center justify-between pt-4">
                        <div>
                          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full mb-2.5"></div>
                          <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        </div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-full"></div>
                      </div>
                      <div className="flex items-center justify-between pt-4">
                        <div>
                          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full mb-2.5"></div>
                          <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        </div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-full"></div>
                      </div>
                      <div className="flex items-center justify-between pt-4">
                        <div>
                          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full mb-2.5"></div>
                          <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        </div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-full"></div>
                      </div>
                      <div className="flex items-center justify-between pt-4">
                        <div>
                          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full mb-2.5"></div>
                          <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        </div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-full"></div>
                      </div>
                      <span className="sr-only">Loading...</span>
                    </td>
                  </tr>
                ) : institutes.length > 0 ? (
                  institutes.map((institute, index) => (
                    <tr key={index+1}>
                      <td>{index + 1}</td>
                      <td>{institute.walletAddress}</td>
                      <td>{institute.name}</td>
                      <td className="max-w-[100px] md:max-w-[300px] overflow-clip text-ellipsis">
                        {institute.description}
                      </td>
                      <td className="max-w-[300px] overflow-clip text-ellipsis">
                        {institute.approved ? "Approved" : "Not Approved"}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="text-center" colSpan={5}>
                      No Institutes Created
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <dialog id="logout_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Logout Confirmation</h3>
          <p className="py-4">Are you sure you want to logout?</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-primary">No</button>
            </form>
            <button
              className="ml-5 btn-error btn"
              onClick={() => {
                sessionStorage.removeItem("address");
                window.location.href = "/";
              }}
            >
              Yes
            </button>
          </div>
        </div>
      </dialog>
      <dialog id="add_institute_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Create New Institute</h3>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Wallet Address</span>
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
          <div className="form-control">
            <label className="label">
              <span className="label-text">Institute Name</span>
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
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
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
          <div className="form-control">
            {/* <input
              type="password"
              name="password"
              onChange={(e) => handleChange(e)}
              required
              placeholder="Enter Password"
              className="input input-bordered input-primary w-full max-w-2xl"
            /> */}
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-around w-full mt-3">
                <label className="cursor-pointer text-center">
                  <span className="">Approve</span>
                </label>
                <input
                  type="checkbox"
                  className="toggle"
                  value={approved}
                  onChange={() => {
                    if (approved) {
                      setApproved(false);
                    } else {
                      setApproved(true);
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex items-end justify-end gap-2">
            <div className="modal-action">
              <form method="dialog" className="">
                <button
                  id="cancel_add_institute_dialog"
                  className="btn btn-primary"
                >
                  Cancel
                </button>
              </form>
            </div>
            <button onClick={handleSubmit} className="btn btn-success">
              {createLoading ? (
                <span className="loading loading-spinner loading-md"></span>
              ) : (
                "Create"
              )}
            </button>
          </div>
        </div>
      </dialog>
    </section>
  );
};

export default CreateInstitutes;
