import { createStore, applyMiddleware, compose } from "redux";
import Init from "../reducers/index";
import { forbiddenWordsMiddleware } from "../middleware";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    Init,
    storeEnhancers(applyMiddleware(forbiddenWordsMiddleware))
);

export default store;