const db = require("../../database/connect");
const {Op} = require("sequelize");

const getallorders = async () => {
    try{
        const result = await db.orders.findAll({
            where:{
                isaccepted:false
            },
            include:[
                {
                    model:db.farmerproducts,
                },
                {
                    model:db.users,
                },
            ],
        });
        console.log(result);
        return result;
    }catch(error){
        throw new Error("failed to get orders")
    }
}

module.exports = {
    getallorders
}