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
            productPic: "https://picsum.photos/500/200",
            productName: "Potato",
            quantity: 5,
            cost: 1000,
            phone: "99992342349",
            location: "this that location where you cant find me!",
        },
        {
            productPic: "https://picsum.photos/500/200",
            productName: "tomato",
            quantity: 5,
            cost: 1000,
            phone: "99992342349",
            location: "this that location where you cant find me!",
        },
        {
            productPic: "https://picsum.photos/500/200",
            productName: "onion",
            quantity: 5,
            cost: 1000,
            phone: "99992342349",
            location: "this that location where you cant find me!",
        },
    ]);
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
                                    image={product.productPic}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                        {product.productName}
                                    </Typography>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                        ₹{product.cost}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        Only {product.quantity} Left!
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        Phone no: {product.phone}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        Location: {product.location}
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
