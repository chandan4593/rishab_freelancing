type farmersType = {
    [index:string]:string|number,
    productpic:string,
    productname:string,
    quantity:string,
    cost:number,
    phoneno:string,
    location:string
}
export const farmers = (state:farmersType[]=[],action:{payload:farmersType,type:string}) => {
    switch(action.type){
        case "addfarmers":return {
            ...state,
            ...action.payload
        }
        default : return state;
    }
}

