import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import friends, { NAME as friendsName } from 'features/friends';

export default combineReducers({
  [friendsName]: friends,
  router: routerReducer
});
