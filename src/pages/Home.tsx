// import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { getDatas } from '../datas/data'
import useFetch from '../hooks/useFetch';

const Home = () => {
  const navigate = useNavigate()
  const response = getDatas()
  const data = useFetch(response)

  const handleClick = (fullName: string) => {
    const selected = data.find(
      (val:any) => val.full_name === fullName
      );
      // console.log(selected)
      navigate(`/profile/${fullName}`, {state: selected})
  }
   
  return (
    <div style={
      {
        display:'grid', 
        gridTemplateColumns:  '50% 50%',
        gap: '10px', 
        padding: '1rem',
     }
    }>
    {
      data.map((val: any) => { 
        return <div style={
            {
            backgroundColor: 'cadetblue',
            borderRadius:'4px',
            textAlign: 'center',
            padding:'2rem',
            color: 'white',
            cursor:'pointer'
            }
          }
          onClick={() => handleClick(val.full_name)}
          key={val.id}
          >
          <h1>{val.full_name}</h1>
          <p>Expert Skills:</p>
          <p style={{textTransform: 'capitalize',}}>
            {val.expert_skills.length > 0 ? val.expert_skills.join(', ') : '-'}
          </p>
        </div>
      })
    }
  </div>
  )
}

export default Home
