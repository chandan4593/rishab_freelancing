module.exports = (sequelize, DataTypes) => {
    const DeliveryBoy = sequelize.define("DeliveryBoy", {
        email: {
            type: DataTypes.STRING,
            primaryKey:true,
            trim: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return DeliveryBoy;
};
