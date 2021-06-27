import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom";
interface param {
    todo:string,
    name:string
}
const Header = (params:param) => {
    const H = useHistory();
    return (
        <>
            <AppBar className="fixed-top" style={{ background: "#474646" }}>
                <Toolbar>
                    <Typography variant="h6"
                    >
                        {params.name}
                    </Typography>
                    <Button color="inherit"
                        style={{ marginLeft: "auto" }}
                        onClick={()=>{
                            localStorage.removeItem("username");
                            localStorage.removeItem("password");
                            H.push("/")
                        }}
                    >
                        {params.todo}
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header
