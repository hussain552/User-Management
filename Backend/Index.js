import express from "express";
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file
import cors from "cors";
import mongoose from "mongoose";
import { User } from "./UserModels.js";
import validateUser from './middlewares/validateUser.js';



const app = express();
app.use(cors());
app.use(express.json()); // To parse JSON data in requests


const PORT = process.env.PORT || 8000; 
const mongoDBURL = process.env.MONGO_DB_URL; // Use environment variable for MongoDB URL

// Route to check server status
// app.get("/", async (req, res) => {
//   const data = await User.find({});
//   res.json({ message: "Server is running" });
// });

app.get("/users", async (req, res) => {
  try {

    const users = await User.find();
    res.json(users);
    console.log(req.body);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
});


app.post("/create",validateUser,async (req, res) => {
 

  try {
    const data = new User(req.body);

    // Save the user data to the database
    await data.save();
    res.status(201).json({ message: " Data successfully submitted" });
    
  } 

  catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ message: "Failed to create user", error: error.message });
  }
});


app.put("/update/:id", validateUser,async (req, res) => {
  // const { id } = req.params;
  console.log(req.body);
  const data = await User.updateOne({ _id: req.params.id }, req.body);
  res.json({ message: "succesfully hussain", data: data });
});




app.delete("/delete/:id", async (req, res) => {
  const result = await User.findByIdAndDelete(req.params.id);
  res.json({ message: "Successfully deleted", data: result });
});










// Connect to MongoDB
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");

    app.listen(PORT, () => {
      console.log(`App is listening on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to database:", error);
  });
console.log(User);
