import { Button } from "@mui/material";

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

          <Button
            variant="outlined"
            sx={{
              bgcolor: "#3b82f6",
              color: "black",
              marginTop: "2rem",
              fontWeight: "bold",
              "&:hover": { color: "white" },
            }}
            className="btn bg-[#3b82f6] font-extrabold"
          >
            lets Try
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
