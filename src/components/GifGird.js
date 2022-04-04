import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GitGrid } from './GitGrid'


export const GifGird = ({category}) => {

//   const [Images, setImages] = useState([])

const {data: images, loading} = useFetchGifs(category);


 
// useEffect(() => {

// getGif(category).then(setImages)

// },[category])


    
  return (

    <>
    <h3>{category}</h3>

    {loading && <p>Loading</p>}

    <div className="card-grid">
      

{
  
  images.map((img) =>{

   return  <GitGrid key={img.id} {...img} />
  })

}

    
    </div> 

    </>
  )



}
