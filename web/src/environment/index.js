import dotenv from "dotenv";

dotenv.config();

const env = {
  API_URL: "http://localhost:9000/" || process.env.API_URL,
};

export { env };
