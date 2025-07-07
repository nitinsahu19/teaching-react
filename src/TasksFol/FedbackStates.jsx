
export const initialState = {
    good: 0,
    neutral: 0,
    bad: 0,
}


export function reducer(state, action) {

    if (action.type === 'GOOD') {
        return { ...state, good: state.good + 1 }
    }
    else if (action.type === 'NEUTRAL') {
        return { ...state, neutral: state.neutral + 1 }
    }
    else if (action.type === 'BAD') {
        return { ...state, bad: state.bad + 1 }
    }
    else if (action.type === 'RESET') {
        return initialState
    } else {
        return state
    }
}
