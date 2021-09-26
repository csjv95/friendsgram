import getBookMarkPostIds from "../../service/bookMark/getBookMarkPostIds";

const BOOKMARKPOSTID = "bookMarkPostId/BOOKMARKPOSTID";
const BOOKMARKPOSTID_SUCCESS = "bookMarkPostId/BOOKMARKPOSTID";
const BOOKMARKPOSTID_ERROR = "bookMarkPostId/BOOKMARKPOSTID_ERROR";

export const getBookMarkPostIdAsync = () => async (dispatch) => {
  await dispatch({ type: BOOKMARKPOSTID });
  try {
    getBookMarkPostIds(dispatch, BOOKMARKPOSTID_SUCCESS);
  } catch (error) {
    dispatch({ type: BOOKMARKPOSTID_ERROR });
  }
};

const initialState = {
  bookMarkPostId: {
    loading: false,
    bookMarkPostId: null,
    error: null,
  },
};

export default function bookMarkPostId(state = initialState, action) {
  switch (action.type) {
    case BOOKMARKPOSTID:
      return {
        ...state,
        bookMarkPostId: {
          loading: true,
        },
      };
    case BOOKMARKPOSTID_SUCCESS:
      return {
        ...state,
        bookMarkPostId: {
          loading: false,
          bookMarkPostId: action.bookMark,
        },
      };
    case BOOKMARKPOSTID_ERROR:
      return {
        ...state,
        bookMarkPostId: {
          error: action.error,
        },
      };
    default:
      return state;
  }
}
