import {BrowserRouter,Routes,Route} from"react-router-dom"
import Home from "./compounten/Home"
import Order from "./compounten/Order"
import Addtocart from "./compounten/Addtocart"
import Viewtodetelis from "./compounten/Viewtodetelis"
import Login from "./compounten/Login"
// import Navebar from "./layout/Navebar"
import Adminnavbar from "./layout/Adminnavbar"
import Adminhome from "./Admincomponent/Adminhome"
import Allproduect from "./Admincomponent/Allproduect"
import Orderes from "./Admincomponent/Orderes"
import Navebarr from "./layout/Navebarr"
// import Fotersection from "./compounten/Fotersection"
// import Caroser from "./layout/Caroser"



function App() {
  return (
    <>
      <BrowserRouter>
    {/* <ToastContainer theme='dark'/>
    <Adiminnavebar/> */}
    {/* <Navebar/> */}
    <Navebarr/>
    <Adminnavbar/>
    {/* <Caroser/> */}
  
    <Routes>
      <Route path="/"element={<Home/>}/>
      {/* <Route path="/"element={<Home/>}/> */}
      {/* <Route path="/seach"element={<Home/>}/> */}
      <Route path="/Addtocart" element={<Addtocart/>}/>
      <Route path="/Order" element={<Order/>}/>
      <Route path="/Register" element={<Viewtodetelis/>}/>
      <Route path="/login" element={<Login/>}/>
      {/* <Route path="/Admin" element={<Adminpostproduect/>}/>
      <Route path="/show" element={<Showproduect/>}/> */}

  
      {/* admin routes */}
      <Route path="/Admin" element={<Adminhome/>}/> 
      <Route path="/Addtocartt" element={<Allproduect/>}/>
      <Route path="/Orderr" element={<Orderes/>}/>
    </Routes>
    {/* <Fotersection/> */}
    </BrowserRouter>
   
    </>
  )
}

export default App
