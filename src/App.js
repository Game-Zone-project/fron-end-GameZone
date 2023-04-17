import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import AddToProfileLibrary from "./components/AddToProfileLibrary/AddToProfileLibrary";
import AddToWishList from "./components/AddToWishList/AddToWishList";
import AboutUs from "./components/AboutUs/AboutUs";


function App() {
  return (
    <>
    <NavBar/>
      {/* <h1>Lets start!!</h1> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddToProfileLibrary" element={<AddToProfileLibrary />} />
        <Route path="/AddToWishList" element={<AddToWishList/> }/>
        <Route path="/AboutUs" element={<AboutUs/> }/>
    </Routes>
    </>
  );
}

export default App;