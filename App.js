import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import cors from "cors";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import AssignmentRoutes from "./Kanbas/assignments/routes.js";
import mongoose from "mongoose";
import UserRoutes from "./Users/routes.js";
import session from "express-session";
import "dotenv/config";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas'
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);

const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
      domain: "kanbas-node-server-app-ut56.onrender.com"
    };
  }
  
app.use(session(sessionOptions));

app.use(express.json());
Hello(app);
Lab5(app);
ModuleRoutes(app);
CourseRoutes(app);
UserRoutes(app);
AssignmentRoutes(app);
app.listen(4000 || process.env.PORT);
