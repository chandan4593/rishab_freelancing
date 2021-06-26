import React from 'react';
import Button from '@material-ui/core/Button';
import {useSelector,useDispatch} from "react-redux";
import {rootState} from "../../../redux/store";
import TextField from '@material-ui/core/TextField';
import Alert, { Color } from '@material-ui/lab/Alert';
import InputAdornment from '@material-ui/core/InputAdornment';

const AddProducts = () => {
    type alert = {
        visible: boolean,
        background : Color | undefined,
        msg : string
    }
    const products = useSelector((state:rootState) => state.farmers);
    const [open,setopen] = React.useState<alert>({
        visible:false,
        background:"success",
        msg : "This is a success alert — check it out!"
    });
    const alertstyle : React.CSSProperties = {
        display:(open.visible)?"flex":"none",
    }
    interface adddata {
        productpic : object|null,
        productname:string,
        quantity:number,
        cost:number,
        location:string,
        phone:string
    }
    const [data,setdata] = React.useState<adddata>({
        productpic:null,
        productname:"",
        quantity:0,
        cost:0,
        location:"",
        phone:""
    });
    const close = (data:alert) => {
        setopen(data);
    }
    const handlechange = (e:React.ChangeEvent<HTMLInputElement>) => {
        let value : string | number | object = e.target.value;
        if(e.target.name=="productpic"){
            if(e.target.files != null){
                value=e.target.files[0]!;
            }
        }else{
            if(e.target.name=="quantity"|| e.target.name=="cost"){
                if(value==""){
                    value=0;
                }
                else{
                    value=parseFloat(value);
                }
            }
        }
        setdata((pre:adddata)=>{
            return {
                ...pre,
                [e.target.name]:value
            }
        })
    }
    console.log(data);
    return (
        <div className="AddProducts mt-5">
            <div className="container">
                <Alert style={alertstyle} severity={open.background} onClose={()=>close({
                    visible:false,
                    background:"success",
                    msg : ""
                })
                }>{open.msg}</Alert>
                <div className="card shadow-sm pt-4 pb-5">
                <div className="mx-auto my-2 " style={{width:"max-content"}}>
                    {/* <label className="mr-4">upload a product pic </label> */}
                    <Button
                        variant="outlined"
                        component="label"
                        >
                        upload product
                        <input
                            type="file"
                            hidden
                            name="productpic"
                            onChange={handlechange}
                        />
                    </Button>
                    </div>
                    <div className="mx-auto " >
                        <div className="my-2" style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
                            <TextField className="mx-4 my-2" name="productname" value={data.productname}
                                onChange={handlechange}
                                label="product name" />
                            <TextField
                                label="quantity"
                                className="mx-4 my-2"
                                name="quantity"
                                value={data.quantity}
                                onChange={handlechange}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                                }}
                                />
                        </div>
                        <div className="my-2" style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
                           <TextField className="mx-4 my-2"
                                value={data.phone}
                                onChange={handlechange}
                                name="phone"
                                label="phone" />
                            <TextField
                                label="cost"
                                className="mx-4 my-2"
                                value={data.cost}
                                name="cost"
                                onChange={handlechange}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">₹</InputAdornment>,
                                }}
                                />
                        </div>
                        <div className="mx-4" >
                            <TextField className=""
                                value={data.location}
                                onChange={handlechange}
                                name="location"
                                style={{width:"100%"}}  label="location" />
                        </div>
                        <div className="mx-4 mt-5">
                            <Button
                            variant="outlined"
                            component="label"
                            style={{display:"block"}}
                            className="mt-2 text-center"
                            >
                            add product</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProducts