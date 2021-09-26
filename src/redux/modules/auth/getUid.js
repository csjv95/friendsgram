import { authGetUid } from "../../../service/auth/authGetUid";

const CURRENTUID = "getUid/CURRENTUID";

export const getUserUid = () => (dispatch) => {
  authGetUid(dispatch, CURRENTUID);
};

const initialState = {
  currentUserUid: null,
};

export default function getUid(state = initialState, action) {
  switch (action.type) {
    case CURRENTUID:
      return {
        ...state,
        currentUserUid: action.currentUserUid,
      };
    default:
      return state;
  }
}
