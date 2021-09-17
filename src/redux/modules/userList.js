import getUsersList from "../../service/fireStore/getUsersList";

const USERLIST = "userList/USERLIST";
const USERLIST_SUCCESS = "userList/USERLIST_SUCCESS";
const USERLIST_ERROR = "userList/USERLIST_ERROR";

export const getUserListAsync = () => async (dispatch) => {
  await dispatch({ type: USERLIST });
  try {
    getUsersList(dispatch, USERLIST_SUCCESS);
  } catch (error) {
    await dispatch({ type: USERLIST_ERROR, error });
  }
};

const initialState = {
  userList: {
    loading: false,
    data: [],
    error: null,
  },
};

export default function userList(state = initialState, action) {
  switch (action.type) {
    case USERLIST:
      return {
        ...state,
        userList: {
          loading: true,
        },
      };
    case USERLIST_SUCCESS:
      return {
        ...state,
        userList: {
          loading: false,
          data: action.list,
        },
      };
    case USERLIST_ERROR:
      return {
        ...state,
        userList: {
          error: action.error,
        },
      };

    default:
      return state;
  }
}
