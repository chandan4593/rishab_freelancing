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

const Pending = () => {
    const [farmers,setfarmers] = React.useState<any>([]); 
    React.useEffect(()=>{
      const getallpendingorders = async () => {
        try{
          const result = await axios({
            method:"post",
            url:`${Baseurl}/pendingorders`,
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
    return (
        <div className="DevOrders">
        <div className="container">
        <div className="card my-4 p-3">
          {/* <div
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
          </div> */}
          <p className="text-center my-3">
            number of products = 
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
                        customerstatus = {(ele.customerstatus)?"recieved":"pending"}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary"
                        style={{display:"block",width:"max-content"}}
                        className="mx-auto"
                    //   onClick={()=>{
                    //     deleteproduct(ele.id)
                    //   }}
                      >
                      pending
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

export default Pending
