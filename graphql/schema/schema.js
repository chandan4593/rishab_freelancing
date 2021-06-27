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

const schema = buildSchema(`
    ${getfarmerpro}
    type mutation {
        getfarmerpro(farmer:getfarmerproInput!):[getfarmerpro]
    }
    type query{
        get:String!
    }
    schema {
        mutation : mutation
        query:query
    }
`);

module.exports = schema;