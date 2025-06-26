export const intailvalue = {
    step:1,
    name:"",
    email:"",
    city:"",
    pincode:"",
}

export const fromReducer = (state,action) =>{
if(action.type==="update"){
    return {...state,[action.key]:action.value}
}else if(action.type==="next"){
    return {...state,step:state.step+1}
} else if(action.type==="pre"){
    return {...state,step:state.step-1}

}else if(action.type==="reset"){
    return intailvalue
}else{
    return state
}
}