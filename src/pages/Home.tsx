import React, { useState, useEffect } from 'react'

const Home = () => {
  const [data, setData] = useState<any>([])
  const response = {
    message: 'Success to get data',
    data: [
      {
        id: '1',
        first_name: 'John',
        last_name: 'Doe',
        skills: {
          javascript: 'advanced',
          python: 'basic',
          golang: 'expert',
          php: 'expert'
        }
      },
      {
        id: '2',
        first_name: 'Will',
        last_name: 'Smith',
        skills: {
          javascript: 'expert',
          python: 'basic',
          golang: 'advanced',
          php: 'advanced'
        }
      },
      {
        id: '3',
        first_name: 'Jaden',
        last_name: 'Smith',
        skills: {
          javascript: 'expert',
          python: 'expert',
          golang: 'expert',
          php: 'expert'
        }
      },
      {
        id: '4',
        first_name: 'El',
        last_name: 'Professor',
        skills: {
          javascript: 'advanced',
          python: 'basic',
          golang: 'intermediate',
          php: 'intermediate'
        }
      },
    ]
  }

  const manipulate = (response: any) => {
    const dt = response.data.map((val:any) => {
      const expert_skills = []
      for (let key in val.skills){
        if(val.skills[key] === 'expert'){
          expert_skills.push(key)
        }
      }
      return {id: val.id, full_name: `${val.first_name} ${val.last_name}`, expert_skills}
    })
    setData(dt) 
  }

  useEffect(() => {
    manipulate(response)
  }, [])
  

  return (
    <>
    {
      data.map((val: any) => { 
        return <div style={{paddingBottom:'16px'}}>
          <p>{val.full_name}</p>
          <p style={{textTransform: 'capitalize'}}>
            {val.expert_skills.length > 0 ? val.expert_skills.join(', ') : '-'}
          </p>
        </div>
      })
    }
  </>
  )
}

export default Home
