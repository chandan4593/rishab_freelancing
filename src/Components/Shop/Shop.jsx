import React, { useState, useEffect } from "react";
import "./Shop.scss";
import ShopNavbar from "../ShopNavbar/ShopNavbar";
import shopTitle from "../assets/shoptitle.jpeg";
import SeachBar from "./SearchBar/SearchBar";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import organic from "../assets/organic.jpeg";
import fromFarmer from "../assets/fromFarmer.jpeg";
import fromfarm from "../assets/fromfarm.jpeg";
import axios from "axios";
import {Baseurl,Graphql} from "../../App";

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

const Shop = () => {
    const [products, setproducts] = useState([
        // {
        //     productpic: "https://picsum.photos/500/200",
        //     productname: "Potato",
        //     quantity: 5,
        //     cost: 1000,
        //     phone: "99992342349",
        //     location: "this that location where you cant find me!",
        // },
        // {
        //     productpic: "https://picsum.photos/500/200",
        //     productname: "tomato",
        //     quantity: 5,
        //     cost: 1000,
        //     phone: "99992342349",
        //     location: "this that location where you cant find me!",
        // },
    ]);
    React.useEffect(()=>{
        const getallproducts = async () => {
            const body = {
                query:`
                    query{
                        getallproducts{
                            id
                            productpic
                            productname
                            quantity
                            cost
                            phone
                            location
                            FarmerEmail
                        }
                    }
                `
            }
            try{
                const result = await axios({
                    method:"post",
                    url:Graphql,
                    headers:{
                        accept:"application/json",
                        "Content-type": "application/json"
                    },
                    data:body
                });
                console.log(result.data);
                if(result.data.error){

                }
                else{
                    setproducts(result.data.data.getallproducts);                    
                }
            }catch(error){
                console.log(error);
            }
        }
        getallproducts();
    },[]);
    const [displayProducts, setdisplayProducts] = useState([]);
    const [searchField, setsearchField] = useState("");
    const classes = useStyles();
    const filter = () => {
        setdisplayProducts([]);
        console.log("query: ", searchField, ".")
        products.forEach((product) => {
            if (product.productname.includes(searchField)) {
                setdisplayProducts((i) => [...i, product]);
            }
        });
        console.log(displayProducts);
    };
    useEffect(() => {
        filter();
    }, [searchField,products]);
    const buyproduct = async (product) => {
        product["email"]=localStorage.getItem("username");
        product["password"]=localStorage.getItem("password");
        console.log(product)
        try{
            const result = await axios({
                url:`${Baseurl}/buyproduct`,
                method:"post",
                data:product
            });
            console.log(result);
        }catch(error){
            console.log(error);
        }
    }
    return (
        <div className="ShopMainDiv">
            <ShopNavbar />
            <h1>KISAN!</h1>
            <br />
            <div className="ShopTitle">
                <div className="ShopTitleOne">
                    <h1>The First Wealth is Health</h1>
                    <p>
                        A healty diet is the one that can help you to maintain
                        or improve your overall health
                    </p>
                </div>
                <div className="ShopTitleTwo">
                    <img src={shopTitle}></img>
                </div>
            </div>
            <SeachBar onChange={setsearchField} />
            {displayProducts.length !== 0 && products !== undefined ? (
                <d1v className="ShopProducts">
                    {displayProducts.slice(0, 9).map((product) => (
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={product.productpic}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                        {product.productname}
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
                            <CardActions>
                                <Button size="small" color="primary" onClick={()=>{
                                    buyproduct(product)
                                }}>
                                    Buy Now
                                </Button>
                            </CardActions>
                        </Card>
                    ))}
                </d1v>
            ) : (
                <h1>NO products found!</h1>
            )}

            <div
                id="carouselExampleFade"
                class="carousel slide carousel-fade"
                data-ride="carousel"
                style={
                    {
                        // border: "black 2px solid",
                    }
                }
            >
                <div
                    class="carousel-inner"
                    style={
                        {
                            // border: "red 2px solid",
                        }
                    }
                >
                    <div class="carousel-item active">
                        <div className="corouselItemDivParent d-block w-100">
                            <div
                                className="corouselItemDiv"
                                style={{
                                    padding: "1rem",
                                    // border: "green 2px solid",
                                }}
                            >
                                <div
                                    className="corouselItemDivImg"
                                    style={{
                                        display: "inline-block",
                                        width: "fit-content",
                                        maxWidth: "40%",
                                        marginRight: "1rem",
                                    }}
                                >
                                    <img
                                        src={organic}
                                        class=""
                                        alt="..."
                                        style={{
                                            height: "100%",
                                            width: "100%",
                                        }}
                                    ></img>
                                </div>
                                <div
                                    className="corouselItemDivScript"
                                    style={{
                                        display: "inline-block",
                                    }}
                                >
                                    <h4
                                        style={{
                                            display: "inline-block",
                                        }}
                                    >
                                        Straight from the Farmers
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="corouselItemDivParent d-block w-100">
                            <div
                                className="corouselItemDiv"
                                style={{
                                    padding: "1rem",
                                    // border: "green 2px solid",
                                }}
                            >
                                <div
                                    className="corouselItemDivImg"
                                    style={{
                                        display: "inline-block",
                                        width: "fit-content",
                                        maxWidth: "40%",
                                        marginRight: "1rem",
                                    }}
                                >
                                    <img
                                        src={fromFarmer}
                                        class=""
                                        alt="..."
                                        style={{
                                            height: "100%",
                                            width: "100%",
                                        }}
                                    ></img>
                                </div>
                                <div
                                    className="corouselItemDivScript"
                                    style={{
                                        display: "inline-block",
                                    }}
                                >
                                    <h4
                                        style={{
                                            display: "inline-block",
                                        }}
                                    >
                                        Straight from the Farmers
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="corouselItemDivParent d-block w-100">
                            <div
                                className="corouselItemDiv"
                                style={{
                                    padding: "1rem",
                                    // border: "green 2px solid",
                                }}
                            >
                                <div
                                    className="corouselItemDivImg"
                                    style={{
                                        display: "inline-block",
                                        width: "fit-content",
                                        maxWidth: "40%",
                                        marginRight: "1rem",
                                    }}
                                >
                                    <img
                                        src={fromfarm}
                                        class=""
                                        alt="..."
                                        style={{
                                            height: "100%",
                                            width: "100%",
                                        }}
                                    ></img>
                                </div>
                                <div
                                    className="corouselItemDivScript"
                                    style={{
                                        display: "inline-block",
                                    }}
                                >
                                    <h4
                                        style={{
                                            display: "inline-block",
                                        }}
                                    >
                                        Straight from the Farm!
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a
                    class="carousel-control-prev"
                    href="#carouselExampleFade"
                    role="button"
                    data-slide="prev"
                >
                    <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a
                    class="carousel-control-next"
                    href="#carouselExampleFade"
                    role="button"
                    data-slide="next"
                >
                    <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            {displayProducts.length !== 0 && products !== undefined ? (
                <d1v className="ShopProducts">
                    {displayProducts
                        .slice(9, displayProducts.length)
                        .map((product) => (
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={product.productpic}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h2"
                                        >
                                            {product.productname}
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
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Buy Now
                                    </Button>
                                </CardActions>
                            </Card>
                        ))}
                </d1v>
            ) : (
                <h1>NO products found!</h1>
            )}
        </div>
    );
};

export default Shop;
