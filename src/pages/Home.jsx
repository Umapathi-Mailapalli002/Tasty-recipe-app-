import React from 'react'
import Header from '../components/Header'
import Recipes from '../components/Recipes';


function Home() {
  return (
   <div>
      <Header title={
         <p>
         Dive into <br /> Tasty!
       </p>
      } type='home'/>
      <Recipes/>
   </div>
  )
}

export default Home
