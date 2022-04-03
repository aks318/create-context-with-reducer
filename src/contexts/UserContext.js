import createDataContext from "../createDataContext";

const userReducer = (state , actions) => {
    switch (actions.type){
        case "add_error":
        return { ...state, errorMessage: actions.payload };
        case "clear_error":
        return { ...state, errorMessage: actions.payload };
        case "set_user":
        return { ...state, user: actions.payload };
        default:
        return state;
    }
}

const FetchUserData = (dispatch) => {
    return async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const userData = await response.json()
            dispatch({
                type : "set_user",
                payload : userData
            })
        } catch (err) {
            console.log(err)
        }
    }
}


const clearSnackBarMessage = (dispatch) => {
    return () => {
      dispatch({
        type: "add_error",
        payload: { error: "", snackBarStatus: false },
      });
    };
  };

export const { Provider, Context } = createDataContext(
    userReducer,
  {
    FetchUserData,
    clearSnackBarMessage
  },
  {
    loading: false,
    errorMessage: { error: "", type: null, snackBarStatus: false },
    user: []
  }
);