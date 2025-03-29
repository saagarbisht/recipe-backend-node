import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pkg from 'body-parser';

import recipeRoute from "./routes/recipe.routes.js";
import dbConnect from "./lib/connect.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const { json, urlencoded } = pkg

dbConnect();

const allowedOrigins = ["https://recipe-frontend-react-three.vercel.app"];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS policy does not allow this origin!"));
      }
    },
    credentials: true,
  })
);
app.use(json());
app.use(urlencoded({ extended: false }));

app.use("/recipe", recipeRoute)

app.listen(port, () => {
  console.log("server is live at port ", port)
})
