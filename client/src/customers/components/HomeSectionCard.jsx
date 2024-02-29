import { Button } from "@mui/material";

const HomeSectionCard = ({ name, description, price, photo }) => {
  return (
    <div className="card card-compact w-[15rem]  rounded-md  shadow-4xl hover:shadow-lg mb-12">
      <figure>
        <img src={photo} alt="Shoes" className="h-[12rem]" />
      </figure>
      <div className="card-body hover:-translate-y-1 duration-500 bg-[#ffffff]   ">
        <h2 className="card-title text-[#111827]">{name}</h2>
        <p className="text-gray-700">{description}</p>{" "}
        <p className="text-gray-700 text-xl">{price}</p>
        <div className="card-actions justify-end">
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
        </div>
      </div>
    </div>
  );
};

export default HomeSectionCard;
