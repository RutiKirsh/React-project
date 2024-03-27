export const addToCart = (Product) => {
    return{
    type:"ADDTOCART",
    Product
    };
};


export const deleteFromCart = (id) =>
{
    return{
        type:"DELETEFROMCART",
        id
    };
};

export const decreaceFromCart = (id) =>
{
    return{
        type:"DECREACEFROMCART",
        id
    };
};