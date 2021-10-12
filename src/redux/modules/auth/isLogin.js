const LOGIN = "isLogin/login";
const LOGIN_SUCCESS = "isLogin/LOGIN_SUCCESS";
const LOGIN_ERROR = "isLogin/LOGIN_ERROR";

export const loginAsync = () => async (dispatch) => {
  await dispatch({ type: LOGIN });
  try {
    await dispatch({ type: LOGIN_SUCCESS });
  } catch (error) {
    await dispatch({ type: LOGIN_ERROR, error });
  }
};

const initialState = {
  isLogin: false,
  loading: false,
  error: null,
};

const loginState = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogin: true,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default loginState;
