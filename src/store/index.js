import { createStore, combineReducers } from "redux";

// Reducer's
import personReducer from "./person/reducer";
// ...


const reducers = combineReducers({person:personReducer});

const store = createStore(reducers);


export default store;