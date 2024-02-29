import express from "express";
import { createProductController, showProductController } from "../controllers/productController.js";
import cloudinary from "cloudinary"
import ExpressFormidable from "express-formidable"

cloudinary.config({
    cloud_name: 'dhbz08p8u',
    api_key: '642611493243887',
    api_secret: 'CD2nNYPWdPxS-Wy_OoVex1nEDNw'
});
const router = express.Router();


router.post(
    "/create-product",
    createProductController
);

// router.get("/create-product/:id",getSingleProductController);
router.get("/show-products",showProductController);

router.post("/upload", ExpressFormidable({ maxFieldsSize: 5 * 2024 * 2024 }), async (req, res) => {
    try {
        console.log("Upload")
        const result = await cloudinary.uploader.upload(req.files.image.path)
        res.json({
            url: result.secure_url,
            public_id: result.public_id
        })

    } catch (error) {
        console.error(error.message);
    }
})





export default router;