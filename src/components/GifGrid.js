import React, { Fragment, useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [images, setimages] = useState([]);

    // useEffect(()=>{
    //     getGifs(category).then(setimages)
    // },[category])

    const {data,loading} = useFetchGifs(category);

 

    return (<Fragment>
        <h3>{category}</h3>
        {loading&&<p>Loading</p>}
        <div className='card-grid'>
   
         {
                data.map(img => {
                    return <GifGridItem key={img.id} {...img}/>
                })}
         
        </div>
        </Fragment>
    )
}
