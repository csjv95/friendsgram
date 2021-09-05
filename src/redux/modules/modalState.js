const UPLOAD = "modalState/uploadModal";
const LOCATION = "modalState/locationModal";
const POST = "modalState/postMenuModal";
const FOLLOW = "modalState/followModal";
const SEND = "modalState/sendModal";

export const changeUploadModalState = () => ({
  type: UPLOAD,
});

export const changeLocationModalState = () => ({
  type: LOCATION,
});

export const changePostModalState = () => ({
  type: POST,
});

export const changeFollowModalState = () => ({
  type: FOLLOW,
});

export const changeSendModalState = () => ({
  type: SEND,
});

const initialState = {
  uploadModal: false,
  locationModal: false,
  postModal: false,
  followModal: false,
  sendModal: false,
};

export default function modalState(state = initialState, action) {
  switch (action.type) {
    case UPLOAD:
      return {
        ...state,
        uploadModal: !state.uploadModal,
      };
    case LOCATION:
      return {
        ...state,
        locationModal: !state.locationModal,
      };
    case POST:
      return {
        ...state,
        postModal: !state.postModal,
      };
    case FOLLOW:
      return {
        ...state,
        followModal: !state.followModal,
      };
    case SEND:
      return {
        ...state,
        sendModal: !state.sendModal,
      };
    default:
      return state;
  }
}
