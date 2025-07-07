export const initialState = {
    page: 1,
    name: '',
    email: '',
    city: '',
    pincode: '',
};



export const FormReducer = (state, action) => {
    if (action.type === "update_field") {
        return {...state, [action.field]:[action.value]}

    }
    else if(action.type==="nextfield"){
        return {...state,page:state.page+1}  
    }
    else if(action.type==="prefield"){
        return {...state,page:state.page-1}
    }
    else {
        return state
    }
}

