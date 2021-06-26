module.exports = (sequelize, DataTypes) => {
    const DeliveryBoy = sequelize.define("DeliveryBoy", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
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
