import React from 'react';
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { useSelector } from "react-redux";
import { rootState } from "../../../redux/store";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {Graphql,Baseurl} from "../../../App";
import axios from "axios";

const Notifications = () => {
    const farmers = useSelector((state: rootState) => state.famersoldproducts);
    const [products, setproducts] = React.useState([
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
      const getnotifications = async () => {
        try{
          const body = {
            query:`
              query{
                getnotifications{
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
          const result = await axios({
            method:"post",
            url:Graphql,
            headers:{
              "Authorization":JSON.stringify({email:localStorage.getItem("username"),password:localStorage.getItem("password")})
            },
            data:body
          });
          console.log(result.data);
        }catch(error){
          console.log(error);
        }
      }
      getnotifications();
    },[]);
    return (
        <div className="container">
        <div className="card my-4 p-3">
          <div
            className="mx-auto rounded-lg p-2 shadow-sm"
            style={{
              display: "flex",
              background: "transparent",
              flexWrap: "wrap",
              width: "max-content",
            }}
          >
            <div>
              <SearchIcon />
            </div>
            <InputBase
              className="px-2"
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <p className="text-center my-3">
            number of products = {farmers.length}
          </p>
          <div className="" style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around"}}>
          {products.map((product) => (
                      <Card className="" style={{width:"300px"}}>
                      <CardActionArea>
                        <div style={{ width: "300px" }}>
                          <img
                            loading="lazy"
                            src={product.farmerproduct.productpic}
                            style={{ height: "200px", width: "100%" }}
                          />
                        </div>
                        <CardContent className="mx-auto" style={{width:"max-content"}}>
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
                                              fontWeight: 800,
                                              color: "green",
                                          }}
                                      >
                                          PENDING.....
                                      </Typography>
                    </Card>
                    ))}
          </div>
        </div>
      </div>
    )
}

export default Notifications
