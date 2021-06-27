require('dotenv').config();
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const {graphqlHTTP} = require("express-graphql");
const {buildSchema} = require("graphql");
const schema = require("./graphql/schema/schema");
const rootValue = require('./graphql/resolver/merge');
const userRoutes = require("./routes/userRoutes");
const fileUpload = require("express-fileupload");
var cloudinary = require('cloudinary').v2;

cloudinary.config({
    api_key:process.env.api_key,
    api_secret:process.env.api_secret,
    cloud_name:process.env.cloud_name
})

const app = express();
app.use(cors());
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({limit: "5mb", extended: true }));
app.use(userRoutes);
app.use("/static",express.static(__dirname+"/static/"));
const port = process.env.PORT || 8000;

app.listen(port,(error)=>{
    console.log((error)?error:`listening to port ${port}`);
});

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        rootValue,
        graphiql:true
    })
);