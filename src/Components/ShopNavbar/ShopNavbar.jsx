import React, { useState } from "react";
import "./ShopNavbar.scss";
import logo from "../assets/logo.jpeg";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from "reactstrap";
import { useHistory } from "react-router-dom";

const ShopNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const history = useHistory();

    return (
        <div>
            <Navbar
                light
                expand="md"
                style={{
                    backgroundColor: "white",
                    position: "fixed",
                    width: "100%",
                    zIndex: "100",
                }}
            >
                <NavbarBrand href="/">
                    <img
                        src={logo}
                        alt="logo"
                        style={{
                            width: "6rem",
                            height: "3rem",
                        }}
                    ></img>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink
                                onClick={() => {
                                    history.push("../shop");
                                }}
                                style={{
                                    cursor: "pointer",
                                }}
                                activeClassName="linkIsActive"
                            >
                                Shop
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                onClick={() => {
                                    history.push("../pendingOrders");
                                }}
                                style={{
                                    cursor: "pointer",
                                }}
                                activeClassName="linkIsActive"
                            >
                                Pending Orders
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                onClick={() => {
                                    history.push("../acceptedOrders");
                                }}
                                style={{
                                    cursor: "pointer",
                                }}
                                activeClassName="linkIsActive"
                            >
                                Orders
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText className="ml-2">LogOut</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default ShopNavbar;
