export const initalValue = {
    good: 0,
    neutral: 0,
    bad: 0
}



export const feedbackReducre = (state, action) => {
    if (action.type === "updateGood") {
        return { ...state, good: state.good + 1 }
    }
    else if (action.type === 'updateNeutral') {
        return { ...state, neutral: state.neutral + 1 }
    } else if (action.type === 'updateBad') {
        return { ...state, bad: state.bad + 1 }
    }else if (action.type === "reset") {
        return initalValue;
    }
    else {
        return state;
    }
}