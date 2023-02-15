import express from "express";
import cors from "cors";

const app = express();

const port = process.env.PORT || 3002

app.use(cors());

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})