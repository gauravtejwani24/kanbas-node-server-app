import model from "./model.js";
export const findModulesByCourse = (courseId) => {
  return model.find({ course: courseId });
};

export const deleteModule = (moduleId) => {
  return model.deleteOne({ _id: moduleId });
};
export const findAllModules = () => model.find();

export const findModuleById = (moduleId) => {
  return model.findById(moduleId);
};

export const updateModule = (moduleId, module) => {
  return model.updateOne({ _id: moduleId }, { $set: module });
};

export const createModule = (module) => {
  delete module._id;
  return model.create(module);
};
