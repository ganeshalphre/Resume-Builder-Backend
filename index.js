import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import authRoute from "./Routes/authRoute.js"
import connectDb from "./Middlewares/dbConnection.js";

const app = express();
const port = process.env.PORT || 3002

dotenv.config();
connectDb();

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", authRoute);

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})