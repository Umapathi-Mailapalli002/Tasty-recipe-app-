import { useState } from "react";
import {Routes, Route, Outlet} from 'react-router-dom'
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer";
import Nav from "./components/Nav.jsx";
import Header from "./components/Header";
import RecipeDetails from "./pages/RecipeDetails";


function Layout(){
  return (
    <>
      <Nav/>
        <Outlet/>
      <Footer className="text-white text-center"/>
    </>
  )
}

function App() {
  return (
    <>
    
    <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='recipes/:id' element={<RecipeDetails />} />
        </Route>
      </Routes>
    
    </>
  );
}

export default App;
