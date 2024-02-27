import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ id }) => {
  return (
    <div className="card card-compact w-[14rem] hover:-translate-y-1 duration-500 rounded-md bg-base-100 shadow-4xl hover:shadow-lg">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1503341733017-1901578f9f1e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Shoes"
          className="h-[10rem]"
        />
      </figure>
      <div className="card-body bg-[#ffffff]   ">
        <h2 className="card-title text-[#111827]">Black Over Size Tees!</h2>
        <p className="text-gray-700">
          If a dog chews shoes whose shoes does he choose?
        </p>
        <div className="card-actions justify-end">
          <Link to={"/products/" + id}>
            <Button
              variant="outlined"
              size="small"
              sx={{
                bgcolor: "#3b82f6",
                color: "white",
                "&:hover": { color: "black" },
              }}
              className="btn bg-[#3b82f6] btn-sm"
            >
              lets Try
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
