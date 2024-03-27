import img1 from '../../img/1.jpeg'
import img2 from '../../img/2.jpeg'
import img3 from '../../img/3.jpeg'
import img4 from '../../img/4.jpeg'
import img5 from '../../img/5.jpeg'
import img6 from '../../img/6.jpeg'
import img7 from '../../img/7.jpeg'
import img8 from '../../img/8.jpeg'
import img9 from '../../img/9.jpeg'
import img14 from '../../img/14.jpeg'
import img13 from '../../img/13.jpeg'
import img15 from '../../img/15.jpeg'
import img17 from '../../img/17.jpeg'
import img18 from '../../img/18.jpeg'
import img20 from '../../img/20.jpeg'
import img21 from '../../img/21.jpeg'
import img22 from '../../img/22.jpeg'
import img29 from '../../img/29.jpeg'
import img30 from '../../img/30.jpeg'
import img31 from '../../img/31.jpeg'
import img32 from '../../img/32.jpeg'
import img38 from '../../img/38.jpeg'
import img39 from '../../img/39.jpeg'
import img40 from '../../img/40.jpeg'
import img41 from '../../img/41.jpeg'
import img42 from '../../img/42.jpeg'
import img43 from '../../img/43.jpeg'
import img19 from '../../img/19.jpeg'

const initialState =[
    {id:"45345",name:"earings for girls",qty:10,image:img29,price:80,description:"fits to sweet girls."},
{id:"4343",name:"earings for girls",qty:37,image:img30,price:80,description:"fits to sweet girls."},
{id:"1111",name:"earings for girls",qty:40,image:img31,price:80,description:"fits to sweet girls."},
{id:"4313",name:"earings for girls",qty:48,image:img42,price:180,description:"fits to sweet girls."},
{id:"65432",name:"necklace with name",qty:30,image:img32,price:80,description:"fits to gift."},
{id:"76654",name:"bracelet",qty:100,image:img39,price:140,description:"Special bracelet."},
{id:"3423",name:"bracelet",qty:123,image:img40,price:500,description:"Special bracelet."},
{id:"12345", name:"ring", qty:10, image:img6, price:350, description:"so beautiful, fits to special events."},
{id:"6548", name:"ring", qty:30, image:img5, price:150, description:"so beautiful, fits to special events."},
{id:"0962", name:"ring", qty:15, image:img17, price:250, description:"so beautiful, fits to special events."},
{id:"3232", name:"ring", qty:33, image:img22, price:50, description:"so beautiful, fits to special events."},
{id:"64664",name:"ring",qty:30,image:img19,price:580,description:"Special ring."},
{id:"4533",name:"love necklace",qty:13,image:img13,price:200,description:"give a gift to someone that you love!."},
{id:"54321",name:"bracelet",qty:100,image:img9,price:150,description:"fits to birthday." },
{id:"67899",name:"necklace",qty:50,image:img15,price:230,description:"link necklacewith the option of engraving a nane."},
{id:"99876",name:"set jewelry",qty:15,image:img4,price:1000,description:"fits to holyday."},
{id:"56435",name:"set jewelry",qty:45,image:img1,price:1050,description:"fits to holyday."},
{id:"34343",name:"set jewelry",qty:15,image:img2,price:1300,description:"fits to holyday."},
{id:"76739",name:"set jewelry",qty:35,image:img3,price:1200,description:"fits to holyday."},
{id:"2369",name:"set jewelry",qty:15,image:img7,price:900,description:"fits to holyday."},
{id:"23333",name:"set bracelet",qty:20,image:img8,price:800,description:"fits to holyday."},
{id:"1357",name:"set for children",qty:25,image:img14,price:450,description:"fits to Bat-Mitzva."},
{id:"13523",name:"Jerusalem of gold",qty:25,image:img21,price:250,description:"Jerusalem of gold-No more words are needed."},
{id:"4253",name:"Sol-key",qty:25,image:img20,price:100,description:"Sol-key."},
{id:"11237",name:"crown ring",qty:30,image:img18,price:80,description:"crown-ring."},
{id:"2222",name:"bracelet for girls",qty:60,image:img41,price:90,description:"fits to sweet girls."},
{id:"64646",name:"bracelet for girls",qty:20,image:img38,price:90,description:"fits to sweet girls."},
{id:"56435",name:"bracelet for girls",qty:35,image:img43,price:130,description:"fits to sweet girls."}
] 

export const productsReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case("ADDQTY"):
            if (state.length > 0) {
                const add_state = [...state]
                const afterAdd = add_state.filter((product) => (product.id == action.Product.id))
                if (afterAdd.length > 0) {
                    afterAdd[0].qty += action.quantity;
                    return add_state
                }
            }
            const prod = action.Product
            prod.qty=action.quantity
            return [...state, prod];

        case("DECREASEQTY"):
            const dec_state = [...state]
            const afterDecras= dec_state.filter((product) => (product.id === action.id))
          
            if (afterDecras.length==0||afterDecras[0].qty == 1 ) {
                    return state.filter((product) => product.id != action.id)
                }
                afterDecras[0].qty -=1;
            return dec_state
    }
    return state;
 } 
