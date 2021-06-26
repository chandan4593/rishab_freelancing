import {farmers} from "./reducers";
import {combineReducers,createStore} from "redux";

const Reducers = combineReducers({
    farmers
});

const Store = createStore(Reducers);

export type rootState = ReturnType<typeof Store.getState>

export default Store;
