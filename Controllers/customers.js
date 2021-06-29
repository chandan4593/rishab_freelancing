const db = require("../database/connect");
const {Op} = require("sequelize");
const {customerauth} = require("../graphql/resolver/customers");

const buyproduct = async (req,res) => {
    try{
        const data = req.body;
        if(customerauth(data.email,data.password)){
            const result1 = await db.orders.findAll({
                where:{
                    farmerproductId:data.id,
                }
            });
            if(result1.length==0){
                const result = await db.orders.create({
                    UserEmail:data.email,
                    farmerproductId:data.id,
                    isaccepted:false
                });
                console.log(result);
                return res.status(200).send("product added")
            }else{
                return res.status(400).send("already booked")
            }
        }else{
            return res.status(400).send("invalid user")
        }
    }catch(error){
        console.log(error);
        return res.status(400).send("cannot buy product")
    }
}


const pendingorders = async (req, res) => {
    try{
        console.log(req.body)
        if(await customerauth(req.body.email,req.body.password)){
            const result = await db.pendings.findAll({
                where:{
                    [Op.and]:{
                        UserEmail:req.body.email,
                        customerstatus:false
                    }
                }
            })
            return res.status(200).send(result);
        }
    }catch(error){
        console.log(error);
        return res.status(400).send("cannot get product");
    }
}

const acceptorders = async (req,res) => {
    try{
        if(await customerauth(req.body.email,req.body.password)){
        const result = await db.pendings.update({
            customerstatus:true
        },{
            where:{
                id:req.body.id,
                UserEmail:req.body.email
            }
        })
        console.log(result);
        return res.status(200).send("success");
    }else{
        return res.status(400).send("error");
    }
    }catch(error){
        console.log(error);
        return res.status(400).send("error");
    }
}


module.exports = {
    buyproduct,
    pendingorders,
    acceptorders
}