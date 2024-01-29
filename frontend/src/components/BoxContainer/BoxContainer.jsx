import React, { useEffect, useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';


const BoxContainer = () => {

  const [marketData, setMarketData] = useState([]);
  console.log(marketData)

  const getAllData = async ()=>{
    try {
      const response = await axios.get('http://localhost:3000/api/v1/market/getData');
      // const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/getData`);
      // console.log(response)
      if(response.data.success){
        setMarketData(response.data.getData);
      }
      else{
        console.log('something went wrong ');
      }
      
    } catch (error) {
      if(error.resonse){
        toast.error(error.resonse.data.message)
      }
      else{
        toast.error('something went wrong')

      }
      
    }
  }

  useEffect(()=>{
    getAllData();
  },[])


  return (
    <>
      <section className='boxContainers'>

        <div className='boxData'>
          <div className=''>
            {
              marketData.map((data)=>(
                <div>
                <p>{data.price}</p>
               <p>{data.title}</p>
                </div>
              ))
            }
          </div>
          <div>
            <p>-12.12 lac</p>
            <p>Unrealised Gain</p>
          </div>
        </div>

        <div className='boxData'>
          <div>
            <p>+18,234.10</p>
            <p>Day's Gyan</p>
          </div>
          <div>
            <p>-12.12 lac</p>
            <p>Unrealised Gain</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default BoxContainer