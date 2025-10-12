import dotenv from "dotenv";
import path from "path";

// Memuat variabel dari file .env yang ada di root folder proyek
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

const config = {
  // Application Configuration
  nodeEnv: process.env.NODE_ENV || "development",
  port: process.env.PORT || 5000,
  debug: process.env.DEBUG === "true" || false,

  // URI untuk koneksi ke MongoDB
  mongoUri: process.env.MONGO_URI,

  // Konfigurasi untuk JSON Web Token (JWT)
  jwtAlgorithm: process.env.JWT_ALGORITHM || "HS256",
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "1h",
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET,
  jwtRefreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || "7d",

  // Konfigurasi untuk Email (SMTP)
  smtpHost: process.env.SMTP_HOST,
  smtpPort: process.env.SMTP_PORT,
  smtpUser: process.env.SMTP_USER,
  smtpPass: process.env.SMTP_PASS,
  emailFrom: process.env.EMAIL_FROM,

  // Konfigurasi untuk CORS
  corsOrigin: process.env.CORS_ORIGIN,
  corsMethods: process.env.CORS_METHODS,
  corsHeaders: process.env.CORS_HEADERS,
  corsCredentials: process.env.CORS_CREDENTIALS === "true" || false,
};

if (!config.nodeEnv || !config.port || config.debug === undefined) {
  console.error("FATAL ERROR: Konfigurasi App Belum Lengkap di file .env");
  process.exit(1); // Menghentikan aplikasi
}

if (!config.mongoUri) {
  console.error("FATAL ERROR: MONGO_URI tidak terdefinisi di file .env");
  process.exit(1); // Menghentikan aplikasi
}

if (!config.jwtSecret || !config.jwtRefreshSecret || !config.jwtAlgorithm || !config.jwtExpiresIn || !config.jwtRefreshExpiresIn) {
  console.error("FATAL ERROR: Konfigurasi JWT belum lengkap di file .env");
  process.exit(1); // Menghentikan aplikasi
}

if (!config.smtpHost || !config.smtpPort || !config.smtpUser || !config.smtpPass || !config.emailFrom) {
  console.error("FATAL ERROR: Konfigurasi SMTP belum lengkap di file .env");
  process.exit(1); // Menghentikan aplikasi
}

if (!config.corsOrigin || !config.corsMethods || !config.corsHeaders) {
  console.error("FATAL ERROR: Konfigurasi CORS belum lengkap di file .env");
  process.exit(1); // Menghentikan aplikasi
}

export default config;
