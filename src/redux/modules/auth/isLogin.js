const LOGIN = "isLogin/login";

export const login = () => ({ type: LOGIN });

const initialState = {
  isLogin: false,
  loding: true,
};

const loginState = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: true,
        loading: false,
      };
    default:
      return state;
  }
};

export default loginState;
