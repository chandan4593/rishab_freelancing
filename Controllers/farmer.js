const db = require("../database/connect");
const {Op} = require("sequelize");
var cloudinary = require('cloudinary').v2;

const farmerauth = async (email, password)=>{
    data = {email,password}
    let result = await db.farmers.findOne({
        where:{
           email:data.email,
           password:data.password 
        }
    });
    console.log(result)
    if(result){
        return true;
    }else{
        return false;
    }
}

const addfarmerpro = async (req,res,next) => {
    try{
        const data = JSON.parse(req.body.data);
        console.log(data);
        const file = req.files.file;
        if(await farmerauth(data.email,data.password)){
            result = await db.farmerproducts.create({
                productpic:"",
                productname:data.productname,
                cost:data.cost,
                quantity:data.quantity,
                FarmerEmail:data.email,
                location:data.location,
                phone:data.phone
            });
            console.log(result);
            ans=result.dataValues;
            if(result){
                console.log(file);
                cloudinary.uploader.upload(file.tempFilePath,async (error,response)=>{
                    if(error){
                        console.log(error);
                        return res.status(200).send(ans);
                    }else{
                        try{
                            result = await db.farmerproducts.update({
                                productpic:response.secure_url,
                            },{
                                where:{
                                    id:result.dataValues.id
                                }
                            });
                            console.log(result)
                            console.log(response);
                            ans["productpic"]=response.secure_url;
                            return res.status(200).send(ans);
                        }catch(error){
                            console.log(error);
                            return res.status(200).send(ans);
                        }
                    }
                });
            }else{
                return res.status(200).send(ans);
            }
        }else{
            return res.status(400).send("invalid credentials");
        }
    }catch(error){
        console.log(error);
        return res.status(400).send("cannot add product");
    }
}

const deletefarmerpro = async (req,res) => {
    try{
        const data = req.body;
        console.log(data);
        if(farmerauth(data.email,data.password)){
            const id = data.id;
            const result = await db.farmerproducts.destroy({
                where:{
                    id
                }
            });
            console.log(result);
            return res.status(200).send("deleted");
        }else{
            return res.status(400).send("user not authenticated");
        }
    }catch(error){
        console.log(error);
        return res.status(400).send("cannot del product");
    }
}

module.exports = {
    addfarmerpro,
    farmerauth,
    deletefarmerpro
}