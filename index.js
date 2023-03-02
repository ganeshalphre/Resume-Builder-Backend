import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDb from "./Middlewares/dbConnection.js";
import authRoute from "./Routes/authRoute.js"
import resumeRoute from "./Routes/resumeRoute.js"
import smartCardRoute from "./Routes/smartCardRoute.js"

const app = express();
const port = process.env.PORT || 3002

dotenv.config();
connectDb();

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", authRoute);
app.use("/api", resumeRoute);
app.use("/api", smartCardRoute);

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})