const db = require("../database/connect");
const { Op } = require("sequelize");

exports.postUserSingIn = async(req, res, next) => {
    try {
        const data = req.body.data;
        console.log(data);
        let user = await db.users.findAll({
            where: {
                [Op.or]: [{ username : data.username}, {email: data.email}],
            },
        });
        if (user.length === 0) {
            console.log("ADDING USER");
            user = await db.users.create({
                email: data.email,
                username: data.username,
                password: data.password,
            });
            return res.send("SUCCESS");
        }
        return res.send("ERROR");
    } catch (error) {
        console.log(error);
    }
}
exports.postUserLoginIn = async(req, res, next) => {
    try {
        const data = req.body.data;
        console.log(data);
        let user = await db.users.findAll({
            where: {
                [Op.and]: [{ email: data.email}, {password:data.password}],
            }
        })
        console.log(user);
        if (user.length === 1) {
            return res.send("SUCCESS");
        }
        return res.send("ERROR");
    }
    catch (error) {
        console.log(error);
    }
}
exports.postFarmerSignUp = async(req, res, next) => {
    try {
        const data = req.body;
        console.log(data);
        if(data.password===data.conformpassword){
            data["conformpassword"] = undefined;
            const farmer = await db.farmers.create({
                email: data.email,
                password: data.password,
            });
            console.log(farmer);
            return res.status(200).send("SUCCESS");
        }else{
            return res.status(200).send("pass and conformpass are not matching");
        }
    } catch (error) {
        console.log(error);
        return res.status(400).send("ERROR invalid email");
    }
}
exports.postFarmerLogIn = async(req, res, next) => {try {
    const data = req.body;
    console.log(data);
    let farmer = await db.farmers.findAll({
        where: {
            [Op.and]: [{ email: data.email }, { password: data.password }],
        },
    });
    console.log(farmer);
    if (farmer.length === 1) {
        return res.send("SUCCESS");
    }
    return res.send("ERROR");
} catch (error) {
    console.log(error);
}};
exports.postDeliveryBoyLogIn = async(req, res, next) => {try {
    const data = req.body;
    console.log(data);
    let deliveryBoy = await db.deliveryBoys.findAll({
        where: {
            [Op.and]: [{ email: data.email }, { password: data.password }],
        },
    });
    console.log(deliveryBoy);
    if (deliveryBoy.length === 1) {
        return res.status(200).send("SUCCESS");
    }
    return res.status(400).send("ERROR");
} catch (error) {
    console.log(error);
}};