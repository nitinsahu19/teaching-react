export const intialvalue = {
  email: "",
  username: "",
  password: "",
  city: "",
  pincode: "",
  step: 1,
};

export const FormReducer = (state, action) => { 
  switch (action.type) {
   case "UpdateField":
      return { ...state, [action.field]: action.value };    
    case "NextStep":
      return { ...state, step: state.step + 1 };
    case "PreviousStep":
      return { ...state, step: state.step - 1 };
    case "Reset":
      return { ...intialvalue };
    default:
      return state;
  }
  
};
