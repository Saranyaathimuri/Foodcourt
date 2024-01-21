import { applyMiddleware,compose } from 'redux';
import {thunk} from 'redux-thunk';
// import { withExtraArgument } from 'redux-thunk';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './Reducer'; 

const middleware = [thunk];
const store = createStore(
  reducer,
  compose(applyMiddleware(...middleware))
);

export default store;
