export const initialState = {
    good:0,
    netural:0,
    bad:0
}

export const feedbackReducer = (state , action)=>{
    switch(action.type){
        case "good" :
            return {...state , good:state.good + 1}

        case "netural":
            return {...state , netural:state.netural + 1}    
        case "bad":
            return {...state , bad:state.bad + 1}    
    }
}