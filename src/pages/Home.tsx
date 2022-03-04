import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { getDatas } from '../datas/data'
import { AiFillPlusCircle } from 'react-icons/ai';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux'
import { setDatas } from '../store/actionCreators'

const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const response = getDatas()
  const datas =  useSelector ((state:RootStateOrAny) => state.datas )
  
  useEffect(() => {
    
    if(datas.length <= 0){
      setTimeout(() => {
        dispatch(setDatas(response))     
      }, 500);
    }
    // eslint-disable-next-line
  }, [])
  
  const handleClick = (fullName: string) => {
    const selected = datas.find(
        (val:any) => val.full_name === fullName
      )
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
      datas.map((data: any) => { 
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
          onClick={() => handleClick(data.full_name)}
          key={data.id}
          >
          <h1>{data.full_name}</h1>
          <p>Expert Skills:</p>
          <p style={{textTransform: 'capitalize',}}>
            {data.expert_skills.length > 0 ? data.expert_skills.join(', ') : '-'}
          </p>
        </div>
      })
    }
    <div style={{position: 'absolute', margin:'auto', bottom:'0', right:'50%', marginBottom:'3rem'}}>
      <AiFillPlusCircle style={{width:'50px', height:'50px', cursor:'pointer' }} 
      onClick={() => navigate(`/create`)}
      />
    </div>
  </div>
  )
}

export default Home
