import { Fragment, useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


const GifExpertApp = ()=>{

    // const categories = ['One punch man','DragonBall','Pokemon']
    //    const handleAdd = () => {
    //        //se puede cambiar el orden
    //        setcategories([...categories,'Pedro'])
    //    }

  const [categories, setCategories] = useState(['DragonBall']);


   return <Fragment>
    <h2>GifExpertApp</h2>
    <hr/>
   <AddCategory setCategories={setCategories}/>
    <ol>
    {
        categories.map(category=>{
            return <GifGrid key={category} category={category}/>
        })
    
    }
    </ol>
  
   </Fragment>
}
export default GifExpertApp;