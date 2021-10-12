const USER_IMG = "uesrImg/USER_IMG";
const USER_IMG_SUCCESS = "userImg/USER_IMG_SUCCESS";
const USER_ERROR_ERROR = "userImg/USER_ERROR_ERROR";

export const getUserImgAync = (img) => async (dispatch) => {
  await dispatch({ type: USER_IMG });
  try {
    await dispatch({ type: USER_IMG_SUCCESS, img });
  } catch (error) {
    await dispatch({ type: USER_ERROR_ERROR, error });
  }
};

const initialState = {
  userImg: {
    loading: false,
    userImg: null,
    error: null,
  },
};

export default function userImg(state = initialState, action) {
  switch (action.type) {
    case USER_IMG:
      return {
        ...state,
        userImg: {
          loading: false,
        },
      };

    case USER_IMG_SUCCESS:
      return {
        ...state,
        userImg: {
          loading: true,
          userImg: action.img,
        },
      };

    case USER_ERROR_ERROR:
      return {
        ...state,
        userImg: {
          error: action.error,
        },
      };
    default:
      return state;
  }
}
