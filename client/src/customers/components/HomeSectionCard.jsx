import { Button } from "@mui/material";
import React from "react";

const HomeSectionCard = () => {
  return (
    <div className="card card-compact w-[15rem]  rounded-md  shadow-4xl hover:shadow-lg mb-12">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1503341733017-1901578f9f1e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Shoes"
          className="h-[12rem]"
        />
      </figure>
      <div className="card-body hover:-translate-y-1 duration-500 bg-[#ffffff]   ">
        <h2 className="card-title text-[#111827]">Black Over Size Tees!</h2>
        <p className="text-gray-700">
          If a dog chews shoes whose shoes does he choose?
        </p>
        <div className="card-actions justify-end">
          <Button
            variant="outlined"
            sx={{
              bgcolor: "#3b82f6",
              color: "white",
              "&:hover": { color: "black" },
            }}
            className="btn bg-[#3b82f6]"
          >
            lets Try
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionCard;
