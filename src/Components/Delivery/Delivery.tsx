import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Header from "../Header/Header";
import Orders from "./Orders/Orders";
import Pending from "./Pending/Pending";


const Delivery = () => {
  const [currentstate, setcurrentState] = React.useState<string>("orders");
  const ButtonGroupCSS: React.CSSProperties = {
    width: "max-content",
    display: "flex",
    flexWrap: "wrap",
  };
  let changeState = <T extends string>(value: T) => {
    setcurrentState(value);
  };
  return (
    <div className="Delivery">
      <Header name={currentstate} todo="logout" />
      <div className="container mb-3" style={{ marginTop: "6rem" }}>
        <div className="mx-auto" style={ButtonGroupCSS}>
          <ButtonGroup
            size="large"
            color="primary"
            aria-label="large outlined primary button group"
          >
            <Button onClick={() => changeState<string>("orders")}>
            orders
            </Button>
            <Button onClick={() => changeState<string>("pending")}>
            pending
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <p className="text-center  text-muted mb-3 mt-4">{localStorage.getItem("username")}</p>
      {currentstate === "orders" ? (
           <Orders/>
        ) : currentstate === "pending" ? (
            <Pending/>
        ) : ""
      }
    </div>
  );
};

export default Delivery;
