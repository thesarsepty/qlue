import { SET_DATAS, SET_NEWDATA } from '../constant/actionTypes'

  export const setDatas = (input:any) => {

    const dt = input.data.map((val:any) => {
      const expert_skills = []
      for (let key in val.skills){
        if(val.skills[key] === 'expert'){
          expert_skills.push(key)
        }
      }
      return {id: val.id, full_name: `${val.first_name} ${val.last_name}`, expert_skills}
    })
    return {
      type: SET_DATAS,
      payload: dt
    }
  }

  export const setCreateNewPerson = (input: any) => {
    return {
      type: SET_NEWDATA,
      payload: input
    }
  }