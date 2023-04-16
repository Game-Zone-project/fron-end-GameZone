import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <h1>Lets start!!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/MyLibrary" element={<MyLibrary />} />
        <Route path="/WishList" element={<WishList/> }/>
        <Route path="/About Us" element={<AboutUs/> }/> */}
    </Routes>
    </>
  );
}

export default App;
