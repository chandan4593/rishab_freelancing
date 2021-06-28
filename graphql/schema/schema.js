const {buildSchema} = require("graphql");

const getfarmerpro = `
    type getfarmerpro {
        productpic:String,
        productname:String,
        quantity:String,
        cost:Float,
        phone:String,
        location:String,
        id:ID!
    }
    input getfarmerproInput{
        email:String!
        password:String!
    }
`

const getallproducts = `
    type getallproducts {
        id:ID
        productpic:String,
        productname:String,
        quantity:Float,
        cost:Float,
        location:String,
        FarmerEmail:String
    }
`

const getallorders = `
    type getallorders {
        id:ID
        farmerproductId:[getallproducts!]
        UserEmail:String
    }
`

const schema = buildSchema(`
    ${getfarmerpro}
    ${getallproducts}
    ${getallorders}
    type mutation {
        getfarmerpro(farmer:getfarmerproInput!):[getfarmerpro]
    }
    type query{
        get:String!
        getallproducts:[getallproducts!]
        getallorders:[getallorders!]
    }
    schema {
        mutation : mutation
        query:query
    }
`);

module.exports = schema;