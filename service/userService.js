const { models } = require("../models/definiations/");
const bcrypt = require("bcrypt")



module.exports = {
  getUsers: async() => {
    const result = await models.user.findAll();
    return result;
  },

  createUser: async (data) => {
  const salltround = 10;
  data.password = bcrypt.hashSync(data.password,salltround)
    const result = await models.user.create(data);
    return result;
  },
};


