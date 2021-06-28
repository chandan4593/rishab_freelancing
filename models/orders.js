const orders = (sequelize, DataTypes) => {
    return sequelize.define("order",{
        productname:{
            type:DataTypes.STRING
        },
        farmerlocation:{
            type:DataTypes.STRING
        },
        farmerphone:{
            type:DataTypes.STRING
        },
        customerlocation:{
            type:DataTypes.STRING
        },
        customerphone:{
            type:DataTypes.STRING
        },
        isaccepted:{
            type:DataTypes.BOOLEAN
        }
    });
} 

module.exports = orders;