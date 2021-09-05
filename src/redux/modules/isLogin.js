const LOGIN = "isLogin/login";

export const login = () => ({ type: LOGIN });

const initialState = {
  isLogin: false,
};

export default function loginState(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: true,
      };
    default:
      return state;
  }
}
