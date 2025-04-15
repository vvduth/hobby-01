import mongoose from "mongoose"
export const connectDB = async ()=> {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI)
        console.log("connneted to db" , connection.connection.host)
    } catch (error) {
        console.error(`error, ${error.message}`)
        process.exit(1)
    }
}