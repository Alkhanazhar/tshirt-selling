import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL).then(() => {
            console.log("mongodb connection succesfully")
        })
    } catch (error) {
        console.log("mongo is not connected")
    }

}
export default connectDB