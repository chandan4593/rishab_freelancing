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
import {Baseurl} from "../../../App"
import axios from "axios"

const SoldProducts = () => {
  const [farmers,setfarmers] = React.useState<any>([]);
    React.useEffect(()=>{
      const getallpendingorders = async () => {
        try{
          const result = await axios({
            method:"post",
            url:`${Baseurl}/pendingordersf`,
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
    const deleteproduct = async (id:any) => {
      try{
        const result = await axios({
          method:"post",
          url:`${Baseurl}/acceptordersf`,
          data:{email:localStorage.getItem("username"),password:localStorage.getItem("password"),id}
        });
        console.log(result);
      }catch(error){
        console.log(error);
      }
    }
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
          {
               farmers.map((ele:any)=>(
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
                          farmerstatus = {(ele.farmerstatus)?"recieved":"pending"}
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
        </div>
      </div>
    )
}

export default SoldProducts;