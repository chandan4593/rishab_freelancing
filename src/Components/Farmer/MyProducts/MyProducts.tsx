import React from "react";
import Header from "../../Header/Header";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AddProducts from "../AddProducts/AddProducts";
import SoldProducts from "../SoldProducts/SoldProducts";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Notifications from "../Notifications/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { useSelector,useDispatch } from "react-redux";
import { rootState } from "../../../redux/store";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Graphql,Baseurl} from "../../../App";
import axios from "axios";

const MyProducts = () => {
  const [currentstate, setcurrentState] = React.useState<string>("my products");
  const [notifications, setnotifications] = React.useState<number>(0);
  const [ondelete,setondelete] = React.useState<boolean>(true);
  const farmers = useSelector((state: rootState) => state.farmers);
  const dispatch = useDispatch();
  const ButtonGroupCSS: React.CSSProperties = {
    width: "max-content",
    display: "flex",
    flexWrap: "wrap",
  };
  React.useEffect(()=>{
    console.log("hello");
    const getmyproducts = async () => {
      try{
        const body = {
          query:`
            mutation getfarmerpro($email:String!,$password:String!){
              getfarmerpro(farmer:{
                email:$email,
                password:$password
              }){
                productpic
                productname
                quantity
                cost
                phone
                location
                id
              }
            }
          `,
          variables : {
            email:localStorage.getItem('username'),
            password:localStorage.getItem('password')
          }
        }
        const result = await axios({
          method:"post",
          url:Graphql,
          headers:{
            accept:"application/json",
            "Content-Type":"application/json"
          },
          data:body
        });
        console.log(result);
        if(result.data.data.getfarmerpro){
          dispatch({
            type:"addallfarmers",
            payload:result.data.data.getfarmerpro
          });
        }
      }catch(error){
        console.log(error);
      }
    }
    getmyproducts();
  },[ondelete]);
  let changeState = <T extends string>(value: T) => {
    setcurrentState(value);
  };
  const deleteproduct = async (id:string) => {
    const data = {id,email:localStorage.getItem("username"),password:localStorage.getItem("password")};
    try{
      const result = await axios({
        method:"post",
        url:`${Baseurl}/deletefarmerpro`,
        data
      });
      console.log(result);
      setondelete((pre)=>{
        return !pre;
      })
    }catch(error){
      console.log(error);
    }
  }
  return (
    <div className="MyProducts">
      <Header name={currentstate} todo="logout" />
      <div className="container mb-3" style={{ marginTop: "6rem" }}>
        <div className="mx-auto" style={ButtonGroupCSS}>
          <ButtonGroup
            size="large"
            color="primary"
            aria-label="large outlined primary button group"
          >
            <Button onClick={() => changeState<string>("my products")}>
              My
            </Button>
            <Button onClick={() => changeState<string>("add products")}>
              Add
            </Button>
            <Button onClick={() => changeState<string>("sold")}>sold</Button>
            <Button onClick={() => changeState<string>("notifocations")}>
              <NotificationsNoneIcon />
              {notifications}
            </Button>
          </ButtonGroup>
        </div>
          <p className="text-center font-italic text-muted mb-3 mt-4">{localStorage.getItem("username")}</p>
        {currentstate === "my products" ? (
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
                {
                  farmers.map((ele)=>(
                    <Card className="" style={{width:"300px"}}>
                      <CardActionArea>
                        <div style={{ width: "300px" }}>
                          <img
                            loading="lazy"
                            src={ele.productpic}
                            style={{ height: "200px", width: "100%" }}
                          />
                        </div>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {ele.productname}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            cost = {ele.cost} rupees
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            quantity = {ele.quantity} Kg
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            phone = {ele.phone}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            location = {ele.location}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="secondary"
                          onClick={()=>{
                            deleteproduct(ele.id)
                          }}>
                          delete
                        </Button>
                      </CardActions>
                    </Card>
                  ))
                }
              </div>
            </div>
          </div>
        ) : currentstate === "add products" ? (
          <AddProducts />
        ) : currentstate === "sold" ? (
          <SoldProducts />
        ) : (
          <Notifications />
        )}
      </div>
    </div>
  );
};

export default MyProducts;
