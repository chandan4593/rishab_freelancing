const db = require("../database/connect");
const {Op} = require("sequelize");

const deliveryauth = async (email,password) => {
    try{
        const result = await db.deliveryBoys.findOne({
            where:{
                email:data.email,
                password:data.password
            }
        })
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

const acceptorder = (req,res) => {
    try{
        if(deliveryauth(req.body.email,req.body.password)){
            let result = await db.orders.update({
                isaccepted:true
            },{
                where:{
                    id:req.body.id
                }
            });
            return res.status(200).send(result);
        }
    }catch(error){
        console.log(error);
        return res.status(400).send("cannot accept this product");
    }
}

module.exports = {
    acceptorder,
    deliveryauth
}