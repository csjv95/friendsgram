const UPLOAD = "modalState/UPLOAD";
const LOCATION = "modalState/LOCATION";
const POST = "modalState/POST";
const FOLLOW = "modalState/FOLLOW";
const SEND = "modalState/SEND";
const SEARCH = "modalState/SEARCH";
const MOBILE_MENU = "modalState/MOBILE_MENU";

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

export const changeSearchModalState = () => ({
  type: SEARCH,
});

export const changeMobileMenuModalState = (list) => ({
  type: MOBILE_MENU,
  list,
});

const initialState = {
  uploadModal: false,
  locationModal: false,
  postModal: false,
  followModal: false,
  sendModal: false,
  searchModal: false,
  mobileMenuModal: {
    state: false,
    list: null,
  },
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

    case SEARCH:
      return {
        ...state,
        searchModal: !state.searchModal,
      };

    case MOBILE_MENU:
      return {
        ...state,
        mobileMenuModal: {
          state: !state.mobileMenuModal.state,
          list: action.list,
        },
      };
    default:
      return state;
  }
}
