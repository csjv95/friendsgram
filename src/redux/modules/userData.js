import getCurrentUserData from "../../service/fireStore/getCurrentUserData";
const GET_USER_DATA = " userData/GET_USER_DATA ";
const GET_USER_DATA_SUCCESS = "userData/GET_USER_DATA_SUCCESS";
const GET_USER_DATA_ERROR = "userData/GET_USER_DATA_ERROR";

export const getUserDataAsync = async (dispatch) => {
  dispatch({ type: GET_USER_DATA });
  try {
    const currentUserData = await getCurrentUserData(); // API 호출
    dispatch({ type: GET_USER_DATA_SUCCESS, currentUserData }); // 성공
  } catch (error) {
    dispatch({ type: GET_USER_DATA_ERROR }, error);
  }
};

const initialState = {
  userData: {
    loading: false,
    data: [],
  },
};

const userData = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_DATA:
      return {
        ...state,
        userData: {
          loading: true,
        },
      };
    case GET_USER_DATA_SUCCESS:
      return {
        ...state,
        userData: {
          loading: false,
          data: action.currentUserData,
        },
      };
    case GET_USER_DATA_ERROR:
      return {
        ...state,
        userData: {
          loading: false,
          data: [],
          error: action.error,
        },
      };
    default:
      return {
        state,
      };
  }
};

export default userData;
