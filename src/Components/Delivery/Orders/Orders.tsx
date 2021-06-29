import React from 'react';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { rootState } from "../../../redux/store";
import { Graphql, Baseurl } from "../../../App";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Button from '@material-ui/core/Button/Button';

const Orders = () => {
    const [orders,setorders] = React.useState<any>([]);
    React.useEffect(()=>{
      const getallorders = async () => {
        try{
          const body = {
            query:`
            query{
              getallorders{
                farmerproduct{
                 productpic
                  id
                  productname
                  quantity
                  cost
                  phone
                  location
                }
                User {
                  email
                  location
                  phone
                }
                id
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
          setorders(result.data.data.getallorders)
        }catch(error){
          console.log(error);
        }
      }
      getallorders();
    },[]);
    const buyproduct = async (ele:any) => {
      try{
        const body={
          email:localStorage.getItem("username"),
          password:localStorage.getItem("password"),
          id:ele.id,
          farmerproductId:ele.farmerproduct.id,
          UserEmail:ele.User.email
        }
        console.log(body);
        const result = await axios({
          url:`${Baseurl}/acceptorder`,
          method:"post",
          data:body
        });
        console.log(result);
      }catch(error){
        console.log(error);
      }
    }
    return (
        <div className="DevOrders">
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
                number of products = {orders.length}
              </p>
              <div className="" style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around"}}>
                {
                   orders.map((ele:any)=>(
                    <Card className="" style={{width:"300px"}}>
                      <CardActionArea>
                        <CardContent>
                          <Typography  className="text-center" gutterBottom variant="h5" component="h2">
                            ele.productname
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p" className="text-center"
                            >
                              farmerlocation = {ele.farmerproduct.location}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p" className="text-center"
                            >
                             farmerphone =  {ele.farmerproduct.phone}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p" className="text-center"
                          >
                              custlocation = {ele.User.location}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p" className="text-center"
                          >
                            customerno = {ele.User.phone}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary"
                            style={{display:"block",width:"max-content"}}
                            className="mx-auto"
                          onClick={()=>{
                            buyproduct(ele)
                          }}
                          >
                          Accept
                        </Button>
                      </CardActions>
                    </Card>
                   ))
                 } 
              </div>
            </div>
          </div>
        </div>
    )
}

export default Orders
