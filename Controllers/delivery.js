const db = require("../database/connect");
const {Op} = require("sequelize");

const deliveryauth = async (email,password) => {
    try{
        const result = await db.deliveryBoys.findOne({
            where:{
                email:email,
                password:password
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

const acceptorder = async (req,res) => {
    try{
        console.log(req.body)
        if(await deliveryauth(req.body.email,req.body.password)){
            let result = await db.orders.update({
                isaccepted:true
            },{
                where:{
                    id:req.body.id
                }
            });
            console.log(result);
            result = await db.farmerproducts.findOne({
                where:{
                    id:req.body.farmerproductId
                },
                raw:true
            });
            result = await db.pendings.create({
                farmerstatus:false,
                customerstatus:false,
                FarmerEmail:result["FarmerEmail"],
                UserEmail:req.body["UserEmail"],
                DeliveryBoyEmail:req.body.email
            });
            console.log(result);
            return res.status(200).send(result);
        }
    }catch(error){
        console.log(error);
        return res.status(400).send("cannot accept this product");
    }
}

const pendingorders = async (req, res) => {
    try{
        console.log(req.body)
        if(await deliveryauth(req.body.email,req.body.password)){
            const result = await db.pendings.findAll({
                where:{
                    [Op.and]:{
                        DeliveryBoyEmail:req.body.email,
                        [Op.or]:{
                            farmerstatus:false,
                            customerstatus:false
                        }
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

module.exports = {
    acceptorder,
    deliveryauth,
    pendingorders
}