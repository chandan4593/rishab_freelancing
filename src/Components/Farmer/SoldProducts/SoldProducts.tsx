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


const SoldProducts = () => {
  const farmers = useSelector((state: rootState) => state.famersoldproducts);
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
          <Card className="" style={{width:"300px"}}>
            <CardActionArea>
              <div style={{ width: "300px" }}>
                <img
                  loading="lazy"
                  src="https://source.unsplash.com/random"
                  style={{ height: "200px", width: "100%" }}
                />
              </div>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  productname
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  cost = 10 rupees
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  quantity = 10 Kg
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  phone = 999999999
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  location = Hyderebad
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  date = date
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </div>
        </div>
      </div>
    )
}

export default SoldProducts;