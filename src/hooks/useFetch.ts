import { useState, useEffect } from 'react'

const useFetch = (response: any) => {
  const [data, setData] = useState<any>([])
  // const [profile, setProfile] = useState<object>()
  useEffect(() => {
    setTimeout(() => {
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
    }, 500);
      // eslint-disable-next-line
  }, [])
  
  return data
}
export default useFetch