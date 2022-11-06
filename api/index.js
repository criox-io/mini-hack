import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./app/db/index.js";
import ENV from "./app/env/index.js";
import userRoute from "./app/routes/user/user.route.js";
import authRoute from "./app/routes/auth/auth.route.js";

const app = express();

// middlewares
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: false }));
app.use(cors());

//routes
app.use("/user", userRoute);
app.use("/login", authRoute);

//initialization
const start = () => {
  connectDB(ENV.MONGO_CON).then(() => {
    console.log(`Database connected to ${ENV.MONGO_CON}`);

    app.listen(ENV.PORT, () => {
      console.log(`Server started on port ${ENV.PORT}`);
    });
  });
};

start();
