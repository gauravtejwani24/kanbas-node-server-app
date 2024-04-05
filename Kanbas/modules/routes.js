import db from "../Database/index.js";
import * as dao from "./dao.js";

function ModuleRoutes(app) {
  const getModules = async (req, res) => {
    const { cid } = req.params;
    const modules = await dao.findModulesByCourse(cid);
    res.json(modules);
  };

  const createModule = async (req, res) => {
    const { cid } = req.params;
    const newModule = {
      ...req.body,
      course: cid,
      id: new Date().getTime().toString(),
    };
    const newM = await dao.createModule(newModule);
    res.json(newM);
  };

  const deleteModule = async (req, res) => {
    const { mid } = req.params;
    const status = await dao.deleteModule(mid);
    res.json(status);
  };

  const updateModule = async (req, res) => {
    const { mid } = req.params;
    const status = await dao.updateModule(mid, req.body);
    res.json(status);
  };

  app.get("/api/courses/:cid/modules", getModules);
  app.post("/api/courses/:cid/modules", createModule);
  app.delete("/api/modules/:mid", deleteModule);
  app.put("/api/modules/:mid", updateModule);
}
export default ModuleRoutes;
