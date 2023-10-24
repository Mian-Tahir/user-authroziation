const  DataTypes  = require('sequelize');
let sequelize = require('../../../common/dbconnection');

const user = sequelize.define('user',{
    id:{
        primaryKey : true,
        autoIncrement :true,
        type :DataTypes.INTEGER
    },
    firstName:{
        allowNull:true,
        type : DataTypes.STRING
    },
    lastName:{
        allowNull:true,
        type:DataTypes.STRING

    },email:{
        unique :true,
        allowNull:false,
        type:DataTypes.STRING,
        validate:{isEmail:true}

    },password:{
        allowNull:false,
        type:DataTypes.STRING,
    },

},{
    timestamps:true,
    paranoid:true,
    sequelize,
    modelName:"user",
})
module.exports= user