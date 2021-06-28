const pendings = (sequelize,DataTypes) => {
    return sequelize.define("pending",{
        farmerstatus:{
            type:DataTypes.BOOLEAN
        },
        customerstatus:{
            type:DataTypes.BOOLEAN
        },
    });
}

module.exports = pendings;