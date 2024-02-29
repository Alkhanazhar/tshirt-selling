import React, { useState } from "react";
import CreateCard from "./CreateCard";
import Admin from "./AdminMenu";

const AdminDashboard = () => {
  const [select, setSelect] = useState("admin");
  return (
    <>
      <div className="h-full md:h-screen">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-6 sm:col-span-12 md:col-span-7 lg:col-span-3 xxl:col-span-8">
            <div className="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
              <div className="flex justify-between px-4 items-center">
                <div className="text-lg font-semibold">
                  <p>Add Product</p>
                </div>
                <div className="text-lg font-semibold">
                  <button
                    className="focus:outline-none bg-pink-700 hover:bg-pink-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center "
                    onClick={() => setSelect("create")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>{" "}
            <div className="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
              <div className="flex justify-between px-4 items-center">
                <div className="text-lg font-semibold">
                  <p>Admin Menu</p>
                </div>
                <div className="text-lg font-semibold">
                  <button
                    className="focus:outline-none bg-pink-700 hover:bg-pink-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center "
                    onClick={() => setSelect("admin")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className="col-span-9 sm:col-span-12 md:col-span-5 lg:col-span-9 xxl:col-span-4">
            <div>
              {select === "admin" && <Admin />}
              {select === "create" && <CreateCard />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
