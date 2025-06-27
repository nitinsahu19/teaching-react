export const initialFeedback ={
  good:0,
  neutral:0,
  bad:0,
}

export const FeedbackReducer = (state, action) => {
  switch (action.type) {
    case "Good":
      return {...state, good: state.good+1 };
    case "Neutral":
      return {...state, neutral: state.neutral+1 };
    case "Bad":
      return {...state, bad: state.bad+1 };
    case 'Reset':
        return initialFeedback;
    default:
        state;
  }
};
