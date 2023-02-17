import mongoose from "mongoose";

mongoose.set("strictQuery", false);
const connectDb = () => { return mongoose.connect(process.env.MONGO_CONNECTION_STRING).then(() => console.log('Connected!'))};

export default connectDb;