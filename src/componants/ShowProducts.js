import { useDispatch, useSelector } from "react-redux"
import { addToCart} from "../redux/actions/CartAction";
import { addQty, decreaseQty } from "../redux/actions/ProductsAction";
import img from '../img/myCart.jpeg'
import { useNavigate } from "react-router-dom";
export default function ShowProducts() {
    const navigate = useNavigate()
    const products = useSelector((state) => state.productsReducer);
    const dispatch = useDispatch()
    return (
        <>
            <div class="all">
                {products.map((item) => (
                    <span className="card" style={{ "width": "18rem" }}>
                        <img src={item.image}></img>
                        <div className="card-body">
                            <center>
                                <h5 className="card-title">{item.name}</h5>
                            </center>
                            <p className="card-text">price: {item.price}$</p>
                            <p className="card-text">description: {item.description}</p>
                        </div>
                        <center>
                            <button style={{ "width": " 90px", "hight": " 90px" , "backgroundColor":"gray"}} id={item.id} onClick={(e) => { e.preventDefault(); dispatch(addToCart(item)); dispatch(decreaseQty(item.id)); }} type="button" class="btn btn-outline-success" ><img src={img} /></button>
                        </center>
                        <h5>Qty: {item.qty}</h5>
                    </span>
                ))}
            </div>
        </>
    )
}