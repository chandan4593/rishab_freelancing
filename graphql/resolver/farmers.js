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

const getnotifications = async (args,req) => {
    console.log(req.get("authorization"));
    let data = req.get("authorization");
    data=JSON.parse(data);
    console.log(data.email,data.password)
    if(await farmerauth(data.email,data.password)){
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
    getfarmerpro,
    getnotifications
}