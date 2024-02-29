import Product from "../models/Product.js";
import dotenv from "dotenv";

dotenv.config();

//payment gateway

export const createProductController = async (req, res) => {
    try {
        const { name, description, price, quantity, photo } =
            req.body;

        // validation 
        switch (true) {
            case !name:
                return res.status(500).send({ error: "Name is Required" });
            case !description:
                return res.status(500).send({ error: "Description is Required" });
            case !price:
                return res.status(500).send({ error: "Price is Required" });

            case !quantity:
                return res.status(500).send({ error: "Quantity is Required" });
            case !photo:
                return res
                    .status(500)
                    .send({ error: "photo is Required" });
        }

        const products = new Product({ name: name, description: description, price: price, quantity: quantity, photo: photo });

        await products.save();
        res.status(201).send({
            success: true,
            message: "Product Created Successfully",
            products,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error in creating product",
        });
    }
};

export const showProductController = async (req, res) => {
    try {
        // Add logic here to fetch the dashboard data from the database
        const products = await Product.find();


        res.status(200).send({
            success: true,
            message: 'Fetched products successfully',
            products
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error while fetching products',
            error
        });
    }
};