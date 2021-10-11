const USER_IMG = "uesrImg/USER_IMG";

export const getUserImgAync = (img) => async (dispatch) => {
  await dispatch({ type: USER_IMG, img });
};

const initialState = {
  userImg: null,
};

export default function userImg(state = initialState, action) {
  switch (action.type) {
    case USER_IMG:
      return {
        ...state,
        userImg: action.img,
      };
    default:
      return state;
  }
}
