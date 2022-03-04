import { useState, useEffect } from 'react'
import { useInput } from '../hooks/useInput'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCreateNewPerson } from '../store/actionCreators'

export default function Create() {
  const { value:name, bind:bindName, reset:resetName } = useInput('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [newSkills, setNewSkills] = useState<any>()
  const skillList = [{name:'javascript', id:1}, {name:'python', id:2}, {name:'golang', id:3}, {name:'php', id:4}]
  const [checkedState, setCheckedState] = useState(
    new Array(skillList.length).fill(false)
  );

  const handleOnChange = (position:any) => {
    const updateCheckedState = checkedState.map((item:any, idx:number) => {
     return idx === position ? !item : item
    })
    setCheckedState(updateCheckedState)
    
  }
  
  useEffect(() => {
     
    const result = checkedState.map((selected, index) => {
      if(selected === true){
        return skillList[index].name
      } 
      return undefined
    })
    
    const selectedResult = result.filter(selected => selected !== undefined)
    setNewSkills(selectedResult)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkedState])
  
  const handleSubmit = (event:any) => {
    event.preventDefault()
    dispatch(setCreateNewPerson({
      full_name: name,
      expert_skills: newSkills
    }))
    resetName()
    navigate('/')
  }
    
  return (
    <div style={{display:'flex', justifyContent:'center', padding:'8px'}}>
      <div style={{ width:'40vw', height:'98vh', borderRadius:'8px', backgroundColor:'rgb(223, 168, 86)', color:'rgb(255, 255, 255)'}}>
          <h1 style={{letterSpacing: '8px', textTransform: 'capitalize', textAlign:'center' }}>Create Person</h1>
          <form
          onSubmit={handleSubmit} 
          style={{ padding:'20px', display: 'flex', flexDirection:'column', alignItems:'center'}}>
            <h2>Name</h2>
              <input 
              type="text" 
              id='inputName'
              {... bindName}
              style={
                {
                  width: '250px', 
                  height: '30px', 
                  border: 'none',
                  borderRadius: '4px',
                  padding : '8px',
                  marginBottom: '24px'
                }}
              />
            <h2 style={{margin: '0', padding: '0'}}>Expert Skills</h2>
            <div style={{paddingBottom: '12px'}}>
              <ul style={{listStyle: 'none', padding: '0'}}>
              {skillList.map((skill:any, idx:number) => {
                return <li key={idx}>
                    <input
                    type="checkbox"
                    value={skill.name}
                    name={skill.name}
                    checked={checkedState[idx]}
                    onChange={() => handleOnChange(idx)} 
                  /> 
                  <label style={{fontSize: '22px'}}>{skill.name}</label>
                </li>
              })
             }
              </ul>
              </div> 
            <button style={{width: '100px', height: '30px', backgroundColor:'#ffdba5'}} type='submit'>Submit</button>
          </form>
      </div>
    </div>
  )
}
