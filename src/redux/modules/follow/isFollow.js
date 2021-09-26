const ISFOLLOW = "isFollow/ISFOLLOW";

export const isFollowState = (isFollow) => ({ type: ISFOLLOW, isFollow });

const initialState = {
  isFollow: null,
};

export default function isFollow(state = initialState, action) {
  switch (action.type) {
    case ISFOLLOW:
      return {
        ...state,
        isFollow: action.isFollow,
      };
    default:
      return state;
  }
}
