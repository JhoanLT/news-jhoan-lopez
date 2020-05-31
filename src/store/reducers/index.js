import { combineReducers } from "redux";
import news from "./news.reducers";

const createReducer = (asyncReducers) =>
	combineReducers({
		news,
	});

export default createReducer;
