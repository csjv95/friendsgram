const PROGRESS_BAR = "progressBar/PROGRESS_BAR";

export const barState = (dispatch, getState) => {
  dispatch({ type: PROGRESS_BAR });
  try {
    console.log(getState().progressBar.progressState);
  } catch (e) {}
};

const initialState = {
  progressState: 0,
};

export default function progressBar(state = initialState, action) {
  switch (action.type) {
    case PROGRESS_BAR:
      return {
        ...state,
        progressState: action.bar,
      };

    default:
      return state;
  }
}
