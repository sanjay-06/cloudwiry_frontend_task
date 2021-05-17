import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Accordian from './accordian'

interface produce 
{
    _id:string,
    title: string,
    image: string,
    price: number
}
function Reports() {
  let [list,setlist]=useState<produce[]>([])
  const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json',"Access-Control-Allow-Origin": "*", 'Accept': 'application/json' },
  };
  const getData=()=>{
      fetch('http://localhost:8000/getvalues',requestOptions)
        .then(function(response){
          console.log(response)
          return response.json();
        })
        .then(function(myJson) {
          setlist(myJson["product"])
        });
    }
    useEffect(()=>{
      getData()
    },[])
    const call= (props:{_id:any}) =>{
      console.log(props._id)
      if(window.confirm("Are you sure to delete the product?"))
      {
          const requestOptions = {
              method: 'DELETE',
              headers: { 'Content-Type': 'application/json',"Access-Control-Allow-Origin": "*", 'Accept': 'application/json' },
          };
          fetch('http://localhost:8000/delete/'+props._id,requestOptions)
        .then(function(response){
          console.log(response)
          window.location.reload()
        })
      }
      else
      {
          alert('product not deleted')
      }
  }
  return (
      <>
       <Navbar />
       <Accordian call={call} list={list}/>
      </>
  );
}

export default Reports;