import React, { useState } from "react";
import "./AcceptedOrders.scss";
import ShopNavbar from "../../ShopNavbar/ShopNavbar";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {Baseurl} from "../../../App"
import axios from "axios"

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

const AcceptedOrders = () => {
    const [products, setproducts] = useState([
    ]);
    const [farmers,setfarmers] = React.useState([]);
    React.useEffect(()=>{
      const getallpendingorders = async () => {
        try{
          const result = await axios({
            method:"post",
            url:`${Baseurl}/pendingordersu`,
            data:{email:localStorage.getItem("username"),password:localStorage.getItem("password")}
          });
          console.log(result);
          setfarmers(result.data);

        }catch(error){
          console.log(error);
        }
      }
      getallpendingorders();
    },[]);
    const deleteproduct = async (id) => {
      try{
        const result = await axios({
          method:"post",
          url:`${Baseurl}/acceptordersu`,
          data:{email:localStorage.getItem("username"),password:localStorage.getItem("password"),id}
        });
        console.log(result);
      }catch(error){
        console.log(error);
      }
    }
    const classes = useStyles();
    return (
        <div>
            <ShopNavbar />
            <br />
            <br />
            <br />
            <div className="pendingOrdersHeading">
                <h1>Accepted Orders</h1>
            </div>
            {farmers.length !== 0 && farmers !== undefined ? (
                <div className="pendingOrdersProducts">
 {
               farmers.map((ele)=>(
                <Card className="" style={{width:"300px"}}>
                  <CardActionArea>
                    <CardContent>
                      <Typography  className="text-center" gutterBottom variant="h5" component="h2">
                        {ele.id}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p" className="text-center"
                        >
                          customerstatus = {(ele.farmerstatus)?"recieved":"pending"}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p" className="text-center"
                      >
                        DeliveryBoyEmail = {ele.DeliveryBoyEmail}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary"
                        style={{display:"block",width:"max-content"}}
                        className="mx-auto"
                      onClick={()=>{
                        deleteproduct(ele.id)
                      }}
                      >
                      accept
                    </Button>
                  </CardActions>
                </Card>
               ))
             } 
                </div>
            ) : (
                <d1v>
                    <h1>NO ORDERS</h1>
                </d1v>
            )}
        </div>
    );
};

export default AcceptedOrders;
