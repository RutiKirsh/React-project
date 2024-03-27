export const addQty = (Product,quantity)=>{
    return{
        type:"ADDQTY",
        Product,
        quantity
    }
}

export const decreaseQty = (id)=>{
    return{
        type:"DECREASEQTY",
        id
    };
};