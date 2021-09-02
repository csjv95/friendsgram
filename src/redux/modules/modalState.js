const CHANGE_UPLOADMODAL = "uploadModal/CHANGE_UPLOADMODAL";
const CHANGE_LOCATION = "locatioinModal/CHANGE_LOCATIONMODAL";
const CHANGE_POSTMODAL = "postModal/CHANGE_POSTMODAL";
const CHANGE_FOLLOW = "followModal/CHANGE_FOLLOW";
const CHANGE_SEND = "sendModal/CHANGE_SEND";

export const changeUploadModal = () => ({
  type: CHANGE_UPLOADMODAL,
});

export const changeLocationModal = () => ({
  type: CHANGE_LOCATION,
});

export const changePostModal = () => ({
  type: CHANGE_POSTMODAL,
});

export const changeFollowModal = () => ({
  type: CHANGE_FOLLOW,
});

export const changeSendModal = () => ({
  type: CHANGE_SEND,
});

const initialState = {
  upload: false,
  location: false,
  post: false,
  follow: false,
  send: false,
};

export default function modalState(state = initialState, action) {
  switch (action.type) {
    case CHANGE_UPLOADMODAL:
      return {
        ...state,
        upload: !state.upload,
      };

    case CHANGE_LOCATION:
      return {
        ...state,
        location: !state.location,
      };
    case CHANGE_POSTMODAL:
      return {
        ...state,
        post: !state.post,
      };
    case CHANGE_FOLLOW:
      return {
        ...state,
        follow: !state.follow,
      };
    case CHANGE_SEND:
      return {
        ...state,
        send: !state.send,
      };

    default:
      return {
        state,
      };
  }
}
