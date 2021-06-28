import React, { useState } from "react";
import "./PendingOrders.scss";
import ShopNavbar from "../../ShopNavbar/ShopNavbar";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {Graphql} from "../../../App";
import axios from "axios";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        marginBottom: "2rem",
        // marginRight: "3rem",
        zIndex: "0",
    },
    media: {
        height: 140,
    },
});

const PendingOrders = () => {
    const [products, setproducts] = useState([
        {
            farmerproduct:{
                productpic: "https://picsum.photos/500/200",
                productname: "Potato",
                quantity: 5,
                cost: 1000,
                phone: "99992342349",
                location: "this that location where you cant find me!",
            },
        },
        {
            farmerproduct:{
                
                productpic: "https://picsum.photos/500/200",
                productname: "tomato",
                quantity: 5,
                cost: 1000,
                phone: "99992342349",
                location: "this that location where you cant find me!",
            },
        },
        {
            farmerproduct:{
                productpic: "https://picsum.photos/500/200",
                productname: "onion",
                quantity: 5,
                cost: 1000,
                phone: "99992342349",
                location: "this that location where you cant find me!",
            },
        },
    ]);
    React.useEffect(()=>{
        const getmyorders = async () => {
            try{
                const body = {
                    query:`
                        query{
                            getpendingorders{
                                farmerproduct{
                                    productpic
                                     id
                                     productname
                                     quantity
                                     cost
                                     phone
                                     location
                                   }
                            }
                        }
                    `
                }
                const details = {email:localStorage.getItem("username"),password:localStorage.getItem("password")}
                const result = await axios({
                    method:"post",
                    url:Graphql,
                    headers:{
                        "Authorization":JSON.stringify(details)
                    },
                    data:body
                });
                console.log(result.data);
                setproducts(result.data.data.getpendingorders)
            }catch(error){
                console.log(error);
            }
        }
        getmyorders();
    },[]);
    const classes = useStyles();
    return (
        <div>
            <ShopNavbar />
            <br />
            <br />
            <br />
            <div className="pendingOrdersHeading">
                <h1>Pending Orders</h1>
            </div>
            {products.length !== 0 && products !== undefined ? (
                <div className="pendingOrdersProducts">
                    {products.map((product) => (
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={product.farmerproduct.productpic}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                        {product.farmerproduct.productname}
                                    </Typography>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                        ₹{product.farmerproduct.cost}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        Only {product.farmerproduct.quantity} Left!
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        Phone no: {product.farmerproduct.phone}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        Location: {product.farmerproduct.location}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                                style={{
                                    margin: "1rem",
                                    fontWeight: "800",
                                    color: "green",
                                }}
                            >
                                PENDING.....
                            </Typography>
                        </Card>
                    ))}
                </div>
            ) : (
                <d1v>
                    <h1>NO ORDERS</h1>
                </d1v>
            )}
        </div>
    );
};

export default PendingOrders;
