import React, { useState } from 'react'
import { CategoryAdd } from './CategoryAdd';
import { GifGird} from './GifGird';




export const GiftExpertApp = () => {

   // const categorys = ["dragob ball z", "naruto", "avatar"]

   const [categorys, setCategorys] =  useState(['avatar'] );

   

    
  return (
       
    <>
    <h2>GiftExpertApp</h2>
    <CategoryAdd setCategorys= {setCategorys}/>


<ol>

 {

   categorys.map((category) => {


    return <GifGird  key={category} category = {category}/>


   })
 }



  
    </ol>


    </>

  )


}
