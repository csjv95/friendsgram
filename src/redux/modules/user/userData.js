import getCurrentUserData from "../../../service/fireStore/getCurrentUserData";

const GET_USER_DATA = " userData/GET_USER_DATA ";
const GET_USER_DATA_SUCCESS = "userData/GET_USER_DATA_SUCCESS";
const GET_USER_DATA_ERROR = "userData/GET_USER_DATA_ERROR";

export const getUserDataAsync = () => async (dispatch) => {
  await dispatch({ type: GET_USER_DATA });
  try {
    await getCurrentUserData(dispatch, GET_USER_DATA_SUCCESS);
  } catch (error) {
    await dispatch({ type: GET_USER_DATA_ERROR, error });
  }
};

const initialState = {
  userData: {
    loading: false,
    data: [],
    error: null,
  },
};

export default function userData(state = initialState, action) {
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
          data: action.data,
        },
      };
    case GET_USER_DATA_ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
}
