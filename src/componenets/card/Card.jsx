import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'

const Card = ({formdata}) => {


  const {inputdata,selectdata} = formdata;

  const getData=async()=>{

    console.log(inputdata)
    console.log(selectdata)

    try {

      const response =await axios(`https://www.googleapis.com/books/v1/volumes?q=${inputdata}&printType=${selectdata}&key=AIzaSyB8EuIUIR7k4A4DuNiVFgn94c6t0iu-i_Q`)

      console.log(response)

    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {

    getData();
  

  }, [inputdata,selectdata])
  



  return (
    
    <div>

    </div>
  )
}

export default Card