import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import ShowProducts from "./ShowProducts"
import { About } from "./about"
import { Home } from "./home"
import { ShowCart } from "./ShowCart"
import { FinalPay } from "./finalPay"


export default function Navigator() {
  return (
    <BrowserRouter>
      <center>
        <div>
          <div style={{ "display": "flex", "justify-content": "space-evenly" ,"margin": "2%"}}>
            <button class="btn btn-secondary" >
              <Link style={{ "color": "white" }} to="/">Home</Link>
            </button>
            <button class="btn btn-secondary">
              <Link style={{ "color": "white" }} to="/About">About</Link>
            </button>
            <button class="btn btn-secondary">
              <Link style={{ "color": "white" }} to="/ShowProducts">Show Products</Link>
            </button>
            <button class="btn btn-secondary">
              <Link style={{ "color": "white" }} to="/showCart">Show cart</Link>
            </button>
            <br />
          </div>

          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/About' element={<About />} />
            <Route exact path='/ShowProducts' element={<ShowProducts />} />
            <Route exact path='/showCart' element={<ShowCart />} />
            <Route exact path='/finalPay' element={<FinalPay />} />

          </Routes>
        </div>
      </center>
    </BrowserRouter>
  )
}