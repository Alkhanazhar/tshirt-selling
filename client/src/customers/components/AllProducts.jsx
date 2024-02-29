import axios from "axios";
import React, { useEffect, useState } from "react";
import HomeSectionCard from "./HomeSectionCard";

const AllProducts = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const { data } = await axios.get("/products/show-products");
      setData(data.products);
      
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>AllProducts</div>

  );
};

export default AllProducts;
