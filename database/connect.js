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
db.farmerproducts = require("../models/farmerproducts")(db.sequelize, DataTypes);
db.pendings= require("../models/pendings")(db.sequelize, DataTypes);

db.orders = require("../models/orders")(db.sequelize,DataTypes);

db.farmers.hasMany(db.farmerproducts);

db.farmerproducts.belongsTo(db.farmers);

db.farmers.hasMany(db.pendings);

db.deliveryBoys.hasMany(db.pendings);

db.users.hasMany(db.pendings);

db.pendings.belongsTo(users);

db.pendings.belongsTo(farmers);

db.pendings.belongsTo(deliveryBoys);


sequelize
    .sync({ })
    .then(() => {
        console.log("Tables Synced!");
    })
    .catch((error) => {
        console.log(error);
    });

module.exports = db;