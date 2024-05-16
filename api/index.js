import path from "path";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import multer from "multer";
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import supportRoutes from "./routes/supportRoutes.js";
import articleRoutes from "./routes/articleRoutes.js";
import riddleRoutes from "./routes/riddleRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import getCurrentTime from "./utils/getCurrentTime.js";
import generateCart from "./utils/generateCart.js";
import User from "./models/userModel.js";
import Cart from "./models/cartModel.js";

import { fileURLToPath } from "url";

const port = process.env.PORT || 5000;

connectDB();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, getCurrentTime() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// async function SummonCart(req, res, next) {
//   const allusers = await User.find({});
//   allusers.forEach(async (user) => {
//     const hasCart = await Cart.findOne({ user: user._id });
//     if (!hasCart) {
//       await generateCart(user._id);
//     }
//   });
//   next();
// }
// app.use(SummonCart);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use("/public", express.static(path.join(__dirname, "/public")));
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single("image"));

app.use("/api/categories", categoryRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/supports", supportRoutes);
app.use("/api/articles", articleRoutes);
app.use("/api/riddles", riddleRoutes);
app.use("/api/carts", cartRoutes);

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "/client/dist")));

  app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "client", "dist", "index.html")));
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
