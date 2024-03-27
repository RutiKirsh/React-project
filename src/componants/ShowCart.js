import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaceFromCart, deleteFromCart } from "../redux/actions/CartAction";
import { addQty, decreaseQty } from "../redux/actions/ProductsAction";
import { useNavigate } from "react-router-dom";

export const ShowCart = () => {
    const cart = useSelector((state) => state.cartReducer);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    return (
        <>

            <div class="all">
                
                <table style={{"table-layout" :"fixed", "margin": "auto", width: "80%"}} class="table align-middle">
                
                    <thead class="thead-dark">
                        <tr>
                            <th className="table_tytle" scope="col">Name</th>
                            <th className="table_tytle" scope="col">Image</th>
                            <th className="table_tytle" scope="col">Price</th>
                            <th className="table_tytle" scope="col">Qty</th>
                            <th className="table_tytle" scope="col"></th>
                        </tr>
                    </thead>
                    {cart.map((item) => (
                        <tr>
                            <th scope="row" style={{"text-align": "center" , fontSize:"25px"}}>{item.name}</th>
                            <td style={{"text-align": "center" }}><img style={{ "width": "60%" }} src={item.image}></img></td>
                            <td style={{"text-align": "center", fontSize:"20px"}}>{item.price}$ </td>
                            <td>
                                <div style={{display : "flex","justify-content": "space-around"}} id="plusAndMinus">
                            
                                <button id={item.id} onClick={(e) => { e.preventDefault(); dispatch(decreaceFromCart(item.id)); dispatch(addQty(item,1)); }} type="button" class="btn btn-secondary">-</button>
                                <h5>{item.qtyInCart}</h5>
                                <button id={item.id} onClick={(e) => { e.preventDefault(); dispatch(addToCart(item)); dispatch(decreaseQty(item.id)); }} type="button" class="btn btn-secondary" >+</button>
                            </div>
                           
                            </td>
                            <td style={{"text-align": "center" }}><button id={item.id} onClick={(e) => { e.preventDefault(); dispatch(deleteFromCart(item.id)); dispatch(addQty(item, item.qtyInCart)); }} type="button" class="btn btn-secondary">remove</button></td>
                        </tr>
                    ))}
                </table>
                
            </div>
            <center><button style={{width:"200px", height:"100px", "fontSize":"40px"}} onClick={() => navigate("/finalPay")} class="btn btn-secondary">Final Pay</button></center>

        </>
    )
}