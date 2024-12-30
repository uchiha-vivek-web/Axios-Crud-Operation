import { Route, Routes } from "react-router-dom"
import Form from "./Pages/Form"
import Navbar from "./components/Navbar"
import Home from "./Pages/Home"
import Read from "./components/Read"
import Update from "./components/Update"



function App(){
  return (
    <>
    <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/form" element={<Form/>} />  
    <Route path="/read" element = {<Read/>}/>
    <Route path="/update" element={<Update/>}/>
   </Routes>

    </>
  )
}
export default App