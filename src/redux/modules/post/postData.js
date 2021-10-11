const POSTDATA = "postData/POSTDATA";
const POSTDATA_SUCCESS = "postData/POSTDATA_SUCCESS";
const POSTDATA_ERROR = "postData/POSTDATA_ERROR";
const ONE_POST = "postData/ONE_POST";

export const onePost = (post) => ({
  type: ONE_POST,
  post,
});

export const postDataAsync = (postData) => async (dispatch) => {
  await dispatch({ POSTDATA });
  try {
    await dispatch({ POSTDATA_SUCCESS, postData });
  } catch (error) {
    await dispatch({ POSTDATA_ERROR, error });
  }
};

const initialState = {
  postData: {
    postData: [],
    loading: false,
    error: null,
    post: [],
  },
};

export default function postData(state = initialState, action) {
  switch (action.type) {
    case ONE_POST:
      return {
        ...state,
        post: action.post,
      };
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
