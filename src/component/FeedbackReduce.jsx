
export const initialState = {
    good: 0,
    natural: 0,
    bad: 0
}

export const  Feedbacreduce = (state, action)=> {
    switch (action.type) {
        case ('GOOD'):
            return { ...state, good: state.good+1 }
        case ('natural'):
            return { ...state, natural: state.natural + 1 }
        case ('bad'):
            return { ...state, bad: state.bad + 1 }
        case ('reset'):
            return initialState
        default:
            return state
    }
}