import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes/index.js";
import connectDatabase from "./config/database.js";

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({limit: '100mb', extended: true}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/v1/', routes);

if (process.env.NODE_ENV !== "PRODUCTION") {
    dotenv.config({path: "./config/key.env"});
}

connectDatabase();

app.listen(port, () => {
    console.log(`Server Started on PORT: ${port}`);
});