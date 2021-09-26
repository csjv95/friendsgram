import getFollowingList from "../../service/follow/getFollowingList";

const FOLLOWINGLIST = "followingList/FOLLOWINGLIST";
const FOLLOWINGLIST_SUCCESS = "followingList/FOLLOWINGLIST_SUCCESS";
const FOLLOWINGLIST_ERROR = "followingList/FOLLOWINGLIST_ERROR";

export const getFollowingListAsync = () => async (dispatch) => {
  await dispatch({ type: FOLLOWINGLIST });
  try {
    getFollowingList(dispatch, FOLLOWINGLIST_SUCCESS);
  } catch (error) {
    dispatch({ type: FOLLOWINGLIST_ERROR, error });
  }
};

const initialState = {
  followingList: {
    loading: false,
    followingList: [],
    error: null,
  },
};

export default function followingList(state = initialState, action) {
  switch (action.type) {
    case FOLLOWINGLIST:
      return {
        ...state,
        followingList: {
          loading: true,
        },
      };

    case FOLLOWINGLIST_SUCCESS:
      return {
        ...state,
        followingList: {
          loading: false,
          followingList: action.data,
        },
      };

    case FOLLOWINGLIST_ERROR:
      return {
        ...state,
        followingList: {
          error: action.error,
        },
      };

    default:
      return state;
  }
}
