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

app.use(cors({
  origin: "https://recipe-frontend-react-three.vercel.app/", // Change this to match your frontend URL
  methods: "GET,POST,DELETE,PUT,PATCH",
  allowedHeaders: "Content-Type,Authorization",
}));
app.use(json());
app.use(urlencoded({ extended: false }));

app.use("/recipe", recipeRoute)

app.listen(port, () => {
  console.log("server is live at port ", port)
})
