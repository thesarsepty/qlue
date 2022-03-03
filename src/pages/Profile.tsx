import { useState, useEffect } from 'react'
import imgUser from '../assets/image/user.png'
import { useLocation } from "react-router-dom";

const Profile = () => {
  const [profile, setProfile] = useState<any>()
  const { state } = useLocation()
  // console.log(state, 'params')
  useEffect(() => {
    if(state){
      setProfile(state)
    }
    // eslint-disable-next-line
  }, [])
  
  return (
    <>
    { profile !== undefined ?

      (<div style={{display:'flex', justifyContent:'center', padding:'8px'}}>
      <div style={{ width:'40vw', height:'98vh', borderRadius:'8px', backgroundColor:'rgb(223, 168, 86)', color:'rgb(255, 255, 255)'}}>
        <div style={{ padding:'20px', display: 'flex', flexDirection:'column', alignItems:'center'}}>
          <div>
            <img src={imgUser} alt="" style={{objectFit:'contain', width: '200px', height: '200px'}}/>
          </div>
          <h1 style={{letterSpacing: '8px', textTransform: 'uppercase' }}>{profile.full_name}</h1>
          <div>
          {profile.expert_skills.length > 0 && <h3>Expert Skills</h3>}
            <ul>
              {
                profile.expert_skills.map((skill:any, idx:number) => {  
                  return skill ? <li key={idx}><h4>{skill}</h4></li> : <></> 
                })
                
              }  
              </ul>
          </div>
          <p style={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, velit deleniti. Deleniti reprehenderit voluptas cumque eligendi doloribus animi, inventore quod pariatur exercitationem, ea voluptate aspernatur nisi sunt amet accusamus provident.
          Doloremque rem aspernatur magni necessitatibus at qui voluptate voluptatum illo? Temporibus excepturi mollitia nisi labore, dolorem aut perspiciatis officiis dolor, molestias ipsum ea! Voluptatibus, laudantium nihil reprehenderit nisi repellendus explicabo?
          Fuga labore culpa corporis incidunt fugit eum tempora omnis veritatis in nihil quam doloribus inventore magnam, reprehenderit, harum ipsam aut voluptatum facere dolor possimus esse beatae? Voluptatem facere autem vitae.</p>
        </div>
      </div>
    </div>) : (<p>Loading</p>)
  }
  </>
  )
}

export default Profile
