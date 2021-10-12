const POSTDATA = "postData/POSTDATA";
const POSTDATA_SUCCESS = "postData/POSTDATA_SUCCESS";
const POSTDATA_ERROR = "postData/POSTDATA_ERROR";

export const postDataAsync = (postData) => async (dispatch) => {
  await dispatch({ type: POSTDATA });
  try {
    await dispatch({ type: POSTDATA_SUCCESS, postData });
  } catch (error) {
    await dispatch({ type: POSTDATA_ERROR, error });
  }
};

const initialState = {
  postData: {
    postData: [],
    loading: true,
    error: null,
  },
};

export default function postData(state = initialState, action) {
  switch (action.type) {
    case POSTDATA:
      return {
        ...state,
        postData: {
          loading: true,
        },
      };
    case POSTDATA_SUCCESS:
      return {
        ...state,
        postData: {
          loading: false,
          postData: action.postData,
        },
      };
    case POSTDATA_ERROR:
      return {
        ...state,
        postData: {
          error: action.error,
        },
      };

    default:
      return state;
  }
}
