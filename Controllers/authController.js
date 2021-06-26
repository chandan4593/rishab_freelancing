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
exports.postFarmerSingIn = async(req, res, next) => {
    try {
        const data = req.body.data;
        console.log(data);
        let farmer = await db.farmers.findAll({
            where: {
                [Op.or]: [{ username: data.username }, { email: data.email }],
            },
        });
        if (farmer.length === 0) {
            console.log("ADDING Farmer");
            farmer = await db.farmers.create({
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
exports.postFarmerLogIn = async(req, res, next) => {try {
    const data = req.body.data;
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
    const data = req.body.data;
    console.log(data);
    let deliveryBoy = await db.deliveryBoys.findAll({
        where: {
            [Op.and]: [{ email: data.email }, { password: data.password }],
        },
    });
    console.log(deliveryBoy);
    if (deliveryBoy.length === 1) {
        return res.send("SUCCESS");
    }
    return res.send("ERROR");
} catch (error) {
    console.log(error);
}};