import { SET_MESSAGES, CREATE_MESSAGE } from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
    case SET_MESSAGES:
      return action.payload.messages;
    case CREATE_MESSAGE:
      let newState = state.slice(0);
      newState.push(action.payload);
      return newState;
    default:
      return state;
  }
}
