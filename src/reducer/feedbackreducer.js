export const  intialValue = {
    good:0,
    bad:0,
    neutral:0
}
export const feedBackReducer = (state,action)=>{
if(action.type==="good"){
  return   {...state,good:state.good+1}
}else if(action.type==="bad"){
  return   {...state,bad:state.bad+1}
}else if(action.type==="neutral"){
  return   {...state,neutral:state.neutral+1}
}
}