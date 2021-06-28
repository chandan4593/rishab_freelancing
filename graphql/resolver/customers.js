const db = require("../../database/connect");
const {Op} = require("sequelize");

const customerauth = async (email,password) => {
    try{
        const result = await db.users.findOne({
            where:{
                email,
                password
            }
        });
        if(result){
            return true;
        }else{
            return false;
        }
    }catch(error){
        return false;
    }
}

const getallproducts = async (args) => {
    try{
        if(true){
            const results = await db.farmerproducts.findAll({
                attributes:[
                    "id",
                    "productpic",
                    "productname",
                    "quantity",
                    "cost",
                    "location",
                    "FarmerEmail"
                ]
            });
            console.log(results);
            return results;
        }else{
            throw new Error("user not authenticated");
        }
    }catch(error){
        console.log(error);
        throw new Error("cannot get products");
    }
}

module.exports = {
    getallproducts,
    customerauth
}