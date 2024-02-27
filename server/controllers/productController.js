import productModel from "../models/Product.js";
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

        const products = new productModel({ name: name, description: description, price: price, quantity: quantity, photo: photo });

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

// //get all products
// export const getProductController = async (req, res) => {
//     try {
//         const products = await productModel
//             .find({})
//             .populate("category")
//             .select("-photo")
//             .limit(12)
//             .sort({ createdAt: -1 });
//         res.status(200).send({
//             success: true,
//             counTotal: products.length,
//             message: "ALlProducts ",
//             products,
//         });
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({
//             success: false,
//             message: "Erorr in getting products",
//             error: error.message,
//         });
//     }
// };
// // get single product
// export const getSingleProductController = async (req, res) => {
//     try {
//         const product = await productModel
//             .findOne({ slug: req.params.slug })
//             .select("-photo")
//             .populate("category");
//         res.status(200).send({
//             success: true,
//             message: "Single Product Fetched",
//             product,
//         });
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({
//             success: false,
//             message: "Eror while getitng single product",
//             error,
//         });
//     }
// };


// //payment gateway api
// //token
