import { Button } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <div className="hero h-full bg-[#00000088] absolute top-0 left-0 ">
      <div className="hero-content text-center w-full">
        <div
          data-scroll
          data-scroll-speed=".1"
          className="max-w-md hover:scale-110 duration-500  rounded-lg py-4 px-8"
        >
          <h1 className="text-5xl font-semibold text-zinc-300 leading-none">
            Thread and thrive
          </h1>
          <p className="py-6 text-zinc-100 font-light leading-none tracking-wider">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
            impedit nisi sunt nobis culpa magni quibusdam obcaecati cum sit
            dolore cumque, possimus vel enim tenetur id animi ipsum esse?
            Tempore, necessitatibus nam! Asperiores reprehenderit veniam
            mollitia velit esse? Voluptate, odio.
          </p>
          <Button
            variant="outlined"
            sx={{
              bgcolor: "#3b82f6",
              color: "black",
              "&:hover": { color: "white" },
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

export default Hero;
