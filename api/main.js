import app from "./app.js";
import connectDB from "./src/config/database.js";
import corsConfig from "./src/config/cors.js";
import config from "./src/config/environment.js";

// Jalankan koneksi ke database
connectDB();

// Konfigurasi CORS
app.use(corsConfig);

// Jalankan server
app.listen(config.port, () => console.log(`🚀 Server berjalan di mode ${config.nodeEnv} pada port ${config.port}`));
