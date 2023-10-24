var express = require("express");
const { getStudents,createStudent } = require("../controller/user/studentController");

var router = express.Router();
/* GET users listing. */
router.get("/getStudents", getStudents);
router.post("/createStudent", createStudent);
console.log("studentrouter");
module.exports = router;