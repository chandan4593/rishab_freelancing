interface farmersType  {
    [index:string]:string|number,
    productpic:string,
    productname:string,
    quantity:string,
    cost:number,
    phone:string,
    location:string,
    id:string
}

interface famersoldproductsType extends farmersType {
    createdAt:string
}

export const farmers = (state:farmersType[]=[],action:{payload:farmersType[],type:string}) => {
    switch(action.type){
        case "addfarmers":return [
            ...state,
            ...action.payload
        ]
        case "addallfarmers":return [
            ...action.payload,
        ]
        default : return state;
    }
}

export const famersoldproducts = (state:famersoldproductsType[]=[],action:{payload:famersoldproductsType,type:string}) => {
    switch(action.type){
        case "addfamersoldproducts":return {
            ...state,
            ...action.payload
        }
        default : return state;
    }
}
