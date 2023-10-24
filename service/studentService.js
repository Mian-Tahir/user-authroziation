const { models } = require("../models/definiations");
module.exports = {
  getStudents: async() => {
    const result = await models.student.findAll();
    return result;
  },
  createStudent: async (data) => {
    const result = await models.student.create(data);
    console.log("studentservice")
    return result;
  },
}