import createDataContext from "../createDataContext";

const authReducer = (state, actions) => {
  switch (actions.type) {
    case "add_error":
      return { ...state, errorMessage: actions.payload };
    case "clear_error":
      return { ...state, errorMessage: actions.payload };
    case "set_user":
      return { ...state, user: actions.payload };
    default:
      return state;
  }
};

const loginWithEmail = (dispatch) => {
  return async () => {
    console.log("Aakash")
  };
};

const clearSnackBarMessage = (dispatch) => {
    return () => {
      dispatch({
        type: "add_error",
        payload: { error: "", snackBarStatus: false },
      });
    };
  };

export const { Provider, Context } = createDataContext(
  authReducer,
  {
    loginWithEmail,
    clearSnackBarMessage
  },
  {
    loading: false,
    errorMessage: { error: "", type: null, snackBarStatus: false },
  }
);
