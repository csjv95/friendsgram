const CLICKEDPOSTID = "clickPost/CLICKEDPOSTID";
const CLICKEDPOSTUID = "clickPost/CLICKEDPOSTUID";

export const clickedPostId = (postId) => ({
  type: CLICKEDPOSTID,
  postId,
});

export const clickedPostUid = (postUid) => ({
  type: CLICKEDPOSTUID,
  postUid,
});

const initialState = {
  clickPostId: null,
  clickPostUid: null,
};

export default function clickPost(state = initialState, action) {
  switch (action.type) {
    case CLICKEDPOSTID:
      return {
        ...state,
        clickPostId: action.postId,
      };
    case CLICKEDPOSTUID:
      return {
        ...state,
        clickPostUid: action.postUid,
      };
    default:
      return state;
  }
}
