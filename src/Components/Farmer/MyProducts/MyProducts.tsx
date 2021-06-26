import React from "react";
import Header from "../../Header/Header";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AddProducts from "../AddProducts/AddProducts";
import SoldProducts from "../SoldProducts/SoldProducts";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Notifications from "../Notifications/Notifications";

const MyProducts = () => {
    const [currentstate,setcurrentState] = React.useState<string>("my products");
    const [notifications,setnotifications] = React.useState<number>(0);
    const ButtonGroupCSS: React.CSSProperties = {
        width: "max-content",
        display: "flex",
        flexWrap: "wrap",
    };
    let changeState = <T extends string>(value:T) => {
        setcurrentState(value);
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
                <Button onClick={()=>changeState<string>("my products")}>My</Button>
                <Button onClick={()=>changeState<string>("add products")}>Add</Button>
                <Button onClick={()=>changeState<string>("sold")}>sold</Button>
                <Button onClick={()=>changeState<string>("notifocations")}><NotificationsNoneIcon/>{notifications}</Button>
            </ButtonGroup>
            </div>
            {
                (currentstate==="my products")?(
                    <h1>in myproducts</h1>
                ):(currentstate==="add products")?(
                    <AddProducts/>
                ):(currentstate==="add products")?(
                    <SoldProducts/>
                ):(
                    <Notifications/>
                )
            }
        </div>
        </div>
    );
};

export default MyProducts;
