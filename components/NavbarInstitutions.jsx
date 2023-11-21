import React from "react";

const NavbarInstitutions = ({institute}) => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Certi-Block</a>
          <h3 className="ml-3 text-lg">Welcome {institute.name}</h3>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end space-x-4">
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
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <dialog id="my_modal_1" className="modal">
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
    </>
  );
};

export default NavbarInstitutions;
