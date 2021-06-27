const farmerproduct = (sequelize,Datatypes) => {
    return sequelize.define("farmerproduct",{
        productpic:{
            type:Datatypes.STRING,    
            unique:true
        },
        productname:{
            type:Datatypes.STRING,
        },
        quantity:{
            type:Datatypes.FLOAT,
        },
        cost:{
            type:Datatypes.FLOAT
        },
        phone:{
            type:Datatypes.STRING
        },
        location:{
            type:Datatypes.TEXT
        }
    });
}

module.exports = farmerproduct;