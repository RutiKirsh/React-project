
const cartState = [];
export const cartReducer = (state = cartState, action) => {
    switch (action.type) {

        case ("ADDTOCART"):
            if (state.length > 0) {
                const add_state = [...state]
                const afterAdd = add_state.filter((product) => (product.id === action.Product.id))
                if (afterAdd.length > 0) {
                    if(afterAdd[0].qty==0){
                        return add_state 
                    }
                    afterAdd[0].qtyInCart += 1;
                    return add_state
                }
            }
            const productInCart = action.Product
            productInCart.qtyInCart = 1;
            return [...state, productInCart];
        case ("DELETEFROMCART"):
            return state.filter((product) => product.id != action.id)
        case ("DECREACEFROMCART"):
            const dec_state = [...state]
            const afterDecras = dec_state.filter((product) => (product.id === action.id))
            afterDecras[0].qtyInCart -= 1;
            if (afterDecras[0].qtyInCart == 0) {
                return state.filter((product) => product.id != action.id)
            }
            return dec_state
    }
    return state;
}