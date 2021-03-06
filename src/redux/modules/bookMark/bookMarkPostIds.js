import getBookMarkPostIds from "../../../service/bookMark/getBookMarkPostIds";

const BOOKMARKPOSTIDS = "bookMarkPostIds/BOOKMARKPOSTIDS";
const BOOKMARKPOSTIDS_SUCCESS = "bookMarkPostIds/BOOKMARKPOSTIDS_SUCCESS";
const BOOKMARKPOSTIDS_ERROR = "bookMarkPostIds/BOOKMARKPOSTIDS_ERROR";

export const getBookMarkPostIdAsync = () => async (dispatch) => {
  await dispatch({ type: BOOKMARKPOSTIDS });
  try {
    getBookMarkPostIds(dispatch, BOOKMARKPOSTIDS_SUCCESS);
  } catch (error) {
    dispatch({ type: BOOKMARKPOSTIDS_ERROR });
  }
};

const initialState = {
  bookMarkPostIds: {
    loading: false,
    bookMarkPostIds: [],
    error: null,
  },
};

export default function bookMarkPostIds(state = initialState, action) {
  switch (action.type) {
    case BOOKMARKPOSTIDS:
      return {
        ...state,
        bookMarkPostIds: {
          loading: true,
        },
      };
    case BOOKMARKPOSTIDS_SUCCESS:
      return {
        ...state,
        bookMarkPostIds: {
          loading: false,
          bookMarkPostIds: action.bookMarks,
        },
      };
    case BOOKMARKPOSTIDS_ERROR:
      return {
        ...state,
        bookMarkPostIds: {
          error: action.error,
        },
      };
    default:
      return state;
  }
}
