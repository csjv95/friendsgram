const ISLOGIN = "isLogin/isLogin";

export const loginState = () => ({
  type: ISLOGIN,
});

const initialState = {
  isLogin: false,
};

export default function isLogin(state = initialState, action) {
  switch (action.type) {
    case ISLOGIN:
      return {
        ...state,
        isLogin: !state.isLogin,
      };

    default:
      return {
        state,
      };
  }
}
