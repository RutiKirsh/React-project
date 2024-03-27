import { useEffect } from "react";
import { useSelector } from "react-redux";

export const FinalPay = ()=> {
    
    const cart = useSelector((state) => state.cartReducer);
    var payment = 0;
    cart.map((item) => (
        payment += item.price*item.qtyInCart
     ))
     var visiter = false;
     useEffect(() => {
         if(!visiter){
         alert("Are you sure you want to pay??")
         visiter = true
     }
     }, []);
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
                    </tr>
                    </thead>
                    {cart.map((item) => (
                        
                        <tr>
                            <th style={{"text-align": "center" , fontSize:"25px"}} scope="row">{item.name}</th>
                            <td style={{"text-align": "center" }}><img style={{ "width": "25%" }} src={item.image}></img></td>

                            <td style={{"text-align": "center", fontSize:"20px"}}>{item.qtyInCart} * {item.price}$</td>
                            <td style={{"text-align": "center", fontSize:"20px"}}>{item.qtyInCart}</td>
                        </tr>
                     ))}
                     </table>                     
                 </div>
                 <center><h1>The final price: {payment}$</h1></center>
                 <button style={{width:"200px", height:"60px", "fontSize":"40px", marginLeft:"1000px"}}>For Pay</button>

             </>
         )}