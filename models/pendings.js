const pendings = (sequelize,DataTypes) => {
    return sequelize.define("pending",{
        farmerstatus:{
            type:DataTypes.Boolean
        },
        customerstatus:{
            type:DataTypes.Boolean
        },
    });
}

module.exports = pendings;