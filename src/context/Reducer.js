const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN START":
      return {
        user: false,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: false,
        isFetching: true,
        error: false,
      };
    case "LOGOUT":
      return {
        user: false,
        isFetching: false,
        error: true,
      };
    case "UPDATE START":
      return {
        ...state,
        isFetching: true,
      };
    case "UPDATE_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "UPDATE_FAILURE":
      return {
        user: state.user,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};

export default Reducer;
