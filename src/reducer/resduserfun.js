export const initialState = {
    step:1,
    name:"",
    email:"",
    city:"",
    pincode:"",

};

export const fromReducer=(state,action)=>{
if(action.type==="updated-filed"){
    return {...state,[action.field]:action.value};
}else if(action.type==='next-step'){
    return {...state,step:state.step+1};
}else if(action.type==="pre-step"){
        return {...state,step:state.step-1};
}else if(action.type==="reset"){
        return initialState;
}else{
    return state;
}
}