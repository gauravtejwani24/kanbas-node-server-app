import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import cors from "cors";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import AssignmentRoutes from "./Kanbas/assignments/routes.js";
import mongoose from "mongoose";
import UserRoutes from "./Users/routes.js";

mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
const app = express();
app.use(cors(
    {
    credentials: true,
    origin: "http://localhost:3000"
  }
  ));

app.use(express.json());
Hello(app);
Lab5(app);
ModuleRoutes(app);
CourseRoutes(app);
UserRoutes(app);
AssignmentRoutes(app);
app.listen(4000 || process.env.PORT);
