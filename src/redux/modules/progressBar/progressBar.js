const PROGRESS_BAR = "progressBar/PROGRESS_BAR";

export const barState = (bar) => ({
  type: PROGRESS_BAR,
  bar,
});

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
