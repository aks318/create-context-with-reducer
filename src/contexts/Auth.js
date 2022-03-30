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

// const loginWithEmail = (dispatch) => {
//   return async ({ email, password, navigate }) => {
//     try {
//       // const response = await Api.post('user/login' , { email, password })
//       const response = await axios.post(`${baseUrl}/user/login`, { email, password }, headers)

//       if (response.data.status) {
//         const authentication = await axios.get(`${baseUrl}/user/authentication`, headers)
//         localStorage.setItem("currentUser" , JSON.stringify(authentication.data))
//         dispatch({
//           type: "set_user",
//           payload: authentication.data
//         })
//         dispatch({
//           type: "add_error",
//           payload: {
//             error: response.data.message,
//             type: "success",
//             snackBarStatus: true,
//           },
//         });
//       }
//       if (response.data.status) {
//         navigate("/home" , {replace : true});
//       }
//       else{
//         dispatch({
//             type: "add_error",
//             payload: {
//               error: response.data.message,
//               type: "error",
//               snackBarStatus: true,
//             },
//           });
//       }
//     } catch (err) {
//        console.log("err" , err)
//     } 
//   };
// };


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
