const LOCATION = "location/LOCATION";

export const changeLocation = (location) => ({ type: LOCATION, location });

const initialState = {
  location: null,
};

export default function location(state = initialState, action) {
  switch (action.type) {
    case LOCATION: {
      return {
        ...state,
        location: action.location,
      };
    }
    default:
      return state;
  }
}
