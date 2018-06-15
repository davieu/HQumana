import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
    // payload will either be the user or false
      return action.payload.data || false;
    default:
      return state;
  }
}


// export default function(state = {}, action) {
//     switch (action.type) {
//       default:
//         return state;
//     }
//   }