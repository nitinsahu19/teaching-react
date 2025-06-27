export const initialState = {
  step: 1,
  name: '',
  email: '',
  city: '',
  pincode: ''
};

export const formreducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };

    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };

    case "PREV_STEP":
      return { ...state, step: state.step - 1 };

    case "RESET":
      return initialState;

    default:
      return state;
  }
};
