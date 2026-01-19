import express from "express";
import mongoose from "mongoose";
import pantsRoutes from "./routes/pants.routes.js";
import shirtsRoutes from "./routes/shirts.routes.js";
import coatsRoutes from "./routes/coats.routes.js";

const app = express();

// ================= MIDDLEWARE =================
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================= DATABASE =================
mongoose
  .connect("mongodb://127.0.0.1:27017/lec7crud")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// ================= HOME ROUTE =================
app.get("/", (req, res) => {
  res.render("home");   // HOME FIRST
});

// ================= CRUD ROUTES =================
app.use("/pants", pantsRoutes);
app.use("/shirts", shirtsRoutes);
app.use("/coats", coatsRoutes);

// ================= SERVER =================
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
