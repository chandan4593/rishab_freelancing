const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
    "rishab",
    process.env.DB_USERNAME,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: "mysql",
        dialectOptions: {
            ssl: {
                require: true,
            },
        },
    }
);

sequelize
.authenticate()
.then(() => {
    console.log("Connection to DataBase Established");
})
.catch((error) => {
    console.log(error);
});

let db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("../models/users")(db.sequelize, DataTypes);
db.farmers = require("../models/farmers")(db.sequelize, DataTypes);
db.deliveryBoys = require("../models/deliveryBoys")(db.sequelize, DataTypes);

sequelize
    .sync({ })
    .then(() => {
        console.log("Tables Synced!");
    })
    .catch((error) => {
        console.log(error);
    });

module.exports = db;