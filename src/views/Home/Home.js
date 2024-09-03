import React, { useEffect, useState } from 'react'
import "./Home.css"
import PlantCard from '../../components/PlantCard/PlantCard'
import axios from "axios"
import toast,{ Toaster } from 'react-hot-toast';


function Home() {

   const[plants,setPlants]=useState([])

   const loadPlants=async ()=>{
    toast.loading("Loading plants...")

    const response = await axios.get(`${process.env.REACT_APP_API_URL}/plants`)
    toast.dismiss()

    toast.success('Plants Fetched Successfully!!')
    
    setPlants(response.data.data)
   }

   useEffect(()=>{
    loadPlants()
   },[])
  return (
    <>
    <h1>Plants</h1>

    {
        plants.map((plant,i)=>{
            const {_id,
                name,
                category,
                image,
                price,
                description}=plant

            return (<PlantCard 
                key={i}
                _id={_id} 
            name={name} 
            category={category} 
            image={image} 
            price={price} 
            description={description} />)

        })
    }

    <Toaster/>  
    </>
  )
}

export default Home