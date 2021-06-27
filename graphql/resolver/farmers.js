const db = require("../../database/connect");
const {Op} = require("sequelize");
const {farmerauth} = require("../../Controllers/farmer");

const getfarmerpro = async (args) => {
    console.log(args);
    try{
        if(farmerauth(args.farmer.email,args.farmer.password)){
            const result = await db.farmerproducts.findAll({
                where:{
                    FarmerEmail:args.farmer.email
                },
                raw:true,
                // attributes:["productname","productpic","cost","quantity","phone","location"]
            });
            console.log(result);
            return result;
        }else{
            throw new Error("invalid credentials");
        }
    }catch(error){
        console.log(error);
        throw new Error("cannot add product");
    }
}

module.exports = {
    getfarmerpro
}