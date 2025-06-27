export const initialstate={
    page:1,
    name:'',
    email:'',
    city:'',
    address:'',
} 

export const ReducerFunction=(state,action)=> {
    switch (action.type) {
        case 'UPDATE_DATA':
            return {...state,[action.key]:action.value}
        case 'NEXT_PAGE':
            return {...state,page: state.page+1}
        case 'PREV_PAGE':
            return {...state,page: state.page-1}
        case 'RESET':
            return initialstate;
        default:
            return state
    }
}


