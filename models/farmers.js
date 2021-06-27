module.exports = (sequelize, DataTypes) => {
    const Farmer = sequelize.define("Farmer", {
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
    return Farmer;
};
