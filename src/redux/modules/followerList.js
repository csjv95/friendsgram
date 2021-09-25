import getFollowerList from "../../service/follow/getFollowerList";

const FOLLOWERLIST = "follwerList/FOLLOWERLIST";
const FOLLOWERLIST_SUCCESS = "follwerList/FOLLOWERLIST_SUCCESS";
const FOLLOWERLIST_ERROR = "follwerList/FOLLOWERLIST_ERROR";

export const getFollowerListAsync = () => async (dispatch) => {
  await dispatch({ type: FOLLOWERLIST });
  try {
    getFollowerList(dispatch, FOLLOWERLIST_SUCCESS);
  } catch (error) {
    await dispatch({ type: FOLLOWERLIST_ERROR, error });
  }
};

const initialState = {
  followerList: {
    loading: false,
    followerList: [],
    error: null,
  },
};

export default function followerList(state = initialState, action) {
  switch (action.type) {
    case FOLLOWERLIST:
      return {
        ...state,
        followerList: {
          loading: true,
        },
      };

    case FOLLOWERLIST_SUCCESS:
      return {
        ...state,
        followerList: {
          loading: false,
          followerList: action.followerList,
        },
      };

    case FOLLOWERLIST_ERROR:
      return {
        ...state,
        followerList: {
          error: action.error,
        },
      };
    default:
      return state;
  }
}
