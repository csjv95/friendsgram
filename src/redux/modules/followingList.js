const FLLOWINGLIST = "followingList/FLLOWINGLIST";
const FLLOWINGLIST_SUCCESS = "followingList/FLLOWINGLIST_SUCCESS";
const FLLOWINGLIST_ERROR = "followingList/FLLOWINGLIST_ERROR";

export const getFollowingListAsync = () => async (dispatch) => {
  await dispatch({ type: FLLOWINGLIST });
  try {
    getFollowingListAsync(dispatch, FLLOWINGLIST_SUCCESS);
  } catch (error) {}
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
    case FLLOWINGLIST:
      return {
        ...state,
        followingList: {
          loading: true,
        },
      };

    case FLLOWINGLIST_SUCCESS:
      return {
        ...state,
        followingList: {
          loading: false,
          followingList: action.data,
        },
      };
    case FLLOWINGLIST_ERROR:
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
