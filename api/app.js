import path from "path";
import express from "express";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";
import config from "./src/config/environment.js";

// Import Routes
import userRoutes from "./src/routes/userRoutes.js";
import categoryRoutes from "./src/routes/categoryRoutes.js";
import productRoutes from "./src/routes/productRoutes.js";
import supportRoutes from "./src/routes/supportRoutes.js";
import articleRoutes from "./src/routes/articleRoutes.js";
import riddleRoutes from "./src/routes/riddleRoutes.js";
import cartRoutes from "./src/routes/cartRoutes.js";
import orderRoutes from "./src/routes/orderRoutes.js";

// Import Middleware & Utils
import { notFound, errorHandler } from "./src/middleware/errorMiddleware.js";

// Inisialisasi Express
const app = express();

// Konfigurasi __dirname untuk ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Konfigurasi folder statis untuk gambar
app.use("/public", express.static(path.join(__dirname, "/public")));

// Konfigurasi Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Definisi Rute API
app.use("/api/v1/categories", categoryRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/supports", supportRoutes);
app.use("/api/v1/articles", articleRoutes);
app.use("/api/v1/riddles", riddleRoutes);
app.use("/api/v1/carts", cartRoutes);
app.use("/api/v1/orders", orderRoutes);

// Konfigurasi untuk Production (Serve Frontend)
if (config.nodeEnv === "production") {
  const productionDirname = path.resolve();
  app.use(express.static(path.join(productionDirname, "/client/dist")));

  app.get("*", (req, res) => res.sendFile(path.resolve(productionDirname, "client", "dist", "index.html")));
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

// Middleware untuk Error Handling (diletakkan paling akhir)
app.use(notFound);
app.use(errorHandler);

// Ekspor aplikasi yang sudah dikonfigurasi
export default app;
