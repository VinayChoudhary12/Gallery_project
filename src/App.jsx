import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { IoIosArrowDropleftCircle } from "react-icons/io"
import { IoIosArrowDroprightCircle } from "react-icons/io";


const App = () => {
  const [userData,setUserData]= useState([]);
  const [page ,setPage]=useState(1);

  async function handleClick(){
   const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=15`);
   console.log(response.data);
   setUserData(response.data);
  }
  useEffect(()=>{
 handleClick();
  },[page])

let userData1 = "No User Data Available";

if(userData.length>0){
  userData1 = userData.map((curr,ind)=>{

  return <a href="curr.url" target="_blank" key={ind}>
    <div className="gap-3 p-3 flex flex-col items-center justify-center">
    <div className='h-40 w-44 overflow-hidden rounded-xl'>
    <img className="h-full w-full object-cover" src={curr.download_url}></img>
    </div>
    <h2 className='font-bold text-lg text-white'>{curr.author}</h2>
    </div>
  </a>
})
}

  return (
    <div className="p-5 h-screen w-[100%] bg-black text-white overflow-auto">
       <div className="flex flex-wrap h-[82%]">{userData1}</div>
        <div className="flex justify-center gap-5 mt-5 p-5 rounded-lg ">
        <button className="active:scale-90" onClick={()=>{
          if(page>1){
            setPage(page-1);
          }
          <p className="px-3 py-1 bg-white font-black ">Page{page}</p>

        }}><IoIosArrowDropleftCircle size={50} className="bg-red-700 rounded-full"/></button>
        <p className="bg-white text-black w-22 px-2 py-2 rounded-sm flex font-bold text-green-900 items-center justify-center">Page {page}</p>
        <button className="active:scale-90" onClick={()=>{
          if(page<10){
            setPage(page+1);
          }

        }}><IoIosArrowDroprightCircle size={50} className='bg-red-700 rounded-full' /></button>
        </div>
    </div>
  )
}

export default App
