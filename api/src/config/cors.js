const cors = require("cors");

const allowedOrigins = ["http://localhost:3000"];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Akses ditolak oleh kebijakan CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

const corsConfig = cors(corsOptions);

export default corsConfig;
