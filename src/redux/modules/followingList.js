import { firebaseAuth, firebaseStore } from "../../service/firebase";

const FOLLOWINGLIST = "followingList/FOLLOWINGLIST";
const FOLLOWINGLIST_SUCCESS = "followingList/FOLLOWINGLIST_SUCCESS";
const FOLLOWINGLIST_ERROR = "followingList/FOLLOWINGLIST_ERROR";

/// followinglist home에서만 해보기
export const getFollowingListAsync = () => async (dispatch) => {
  await dispatch({ type: FOLLOWINGLIST });
  try {
    // getFollowingListAsync(dispatch, FOLLOWINGLIST_SUCCESS);

    const getFollowingList = () => {
      const currentUserUid = firebaseAuth.currentUser.uid;
      const followingData = firebaseStore
        .collection("follow")
        .where("uid", "==", currentUserUid);

      followingData.onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data().following;
          dispatch({ type: FOLLOWINGLIST_SUCCESS, data });
        });
      });
    };
    getFollowingList();
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
