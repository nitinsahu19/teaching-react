export const initialstate = {
  name: "",
  email: "",
  address: "",
  city: "",
  page: 1,
};

export function Formreduce(state, action) {
  switch (action.type) {
    case "UPDATE_DATA":
      return {
        ...state,
        [action.name]: action.value,
      };
    case "NEXT_PAGE":
      return {
        ...state,
        page: state.page + 1,
      };
    case "PREV_PAGE":
      return {
        ...state,
        page: state.page - 1,
      };
    case "RESET":
      return initialstate;
    default:
      return state;
  }
}
