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
        console.log(result);
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
                    "FarmerEmail",
                    "phone"
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

const getpendingorders = async (args,req) => {
    console.log(req.get("authorization"));
    let data = req.get("authorization");
    data=JSON.parse(data);
    console.log(data.email,data.password)
    if(await customerauth(data.email,data.password)){
        try{
            const result = await db.orders.findAll({
                where:{
                    isaccepted:false
                },
                include:[
                    {
                        model:db.farmerproducts,
                    },
                ],
            });
            console.log(result);
            return result;
        }catch(error){
            console.log(error);
            throw new Error("cannot get");
        }
    }else{
        throw new Error("user not authenticated");
    }
}

module.exports = {
    getallproducts,
    customerauth,
    getpendingorders
}