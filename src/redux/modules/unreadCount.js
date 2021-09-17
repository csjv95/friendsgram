import unreadCount from "../../service/message/unreadCount";

const UNREAD = "unreadCount/UNREAD";
const UNREAD_SUCCESS = "unreadCount/UNREAD_SUCCESS";
const UNREAD_ERROR = "unreadCount/UNREAD_ERROR";

export const getUnreadAsync = () => async (dispatch) => {
  await dispatch({ type: UNREAD });
  try {
    unreadCount(dispatch, UNREAD_SUCCESS);
  } catch (error) {
    await dispatch({ type: UNREAD_ERROR, error });
  }
};

const initialState = {
  unread: {
    loading: false,
    unread: 0,
    error: null,
  },
};

export default function unread(state = initialState, action) {
  switch (action.type) {
    case UNREAD:
      return {
        ...state,
        unread: {
          loading: true,
        },
      };
    case UNREAD_SUCCESS:
      return {
        ...state,
        unread: {
          loading: false,
          unread: action.count,
        },
      };
    case UNREAD_ERROR:
      return {
        ...state,
        unread: {
          error: action.error,
        },
      };

    default:
      return state;
  }
}
