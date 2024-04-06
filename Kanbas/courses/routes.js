import Database from "../Database/index.js";
import * as dao from "./dao.js";
export default function CourseRoutes(app) {
  const findAllCourses = async (req, res) => {
    const courses = await dao.findAllCourses();
    res.json(courses);
  };

  const createCourse = async (req, res) => {
    const course = { ...req.body, id: new Date().getTime().toString() };
    const newCourse = await dao.createCourse(course);
    res.json(newCourse);
  };

  const deleteCourse = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const status = await dao.deleteCourse(id);

    res.json(status);
  };

  const updateCourse = async (req, res) => {
    const { id } = req.params;
    const course = req.body;
    const status = await dao.updateCourse(id, course);
    res.json(status);
  };

  const getCourse = async (req, res) => {
    const { id } = req.params;
    const course = await dao.findCourseById(id);
 
    if (!course) {
      res.status(404).send("Course not found");
      return;
    }
    res.send(course);
  };

  app.get("/api/courses", findAllCourses);
  app.post("/api/courses", createCourse);
  app.get("/api/courses/:id", getCourse);
  app.delete("/api/courses/:id", deleteCourse);
  app.put("/api/courses/:id", updateCourse);
}
