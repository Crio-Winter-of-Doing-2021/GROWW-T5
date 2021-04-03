// import { createStore } from "redux";
// import reducer from "./reducer";

// const store = createStore(reducer);

// export default store;

import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";

// import rootReducer from './rootReducer'
import reducer from "./reducer";

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
