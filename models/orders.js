const orders = (sequelize, DataTypes) => {
    return sequelize.define("order",{
        isaccepted:{
            type:DataTypes.BOOLEAN
        }
    });
} 

module.exports = orders;