const studentService  = require("../../service/studentService");
const userController = require("./userController");

module.exports={
    getStudents:async(req,res)=>{
        const data =await studentService.getStudents();
        res.send(data)

    },
    createStudent: async (req,res)=>{
        const {firstName,lastName,email,phoneNumber, ...student} =req.body;
        const user = await userController.createUser({
            firstName:firstName,
            lastName:lastName,
            email:email,
            phoneNumber:phoneNumber,
    
        });
            
        const data = await studentService.createStudent({
            semester:student.semester,
            department:student.department,
            rollNo:student.rollNo,
            userId : user.id,
        });
        console.log(student);
        res.send (data);


    }
}
