import {
	SET_DATA,
	SET_CATEGORY_TITLE,
	SET_LOADING,
	SET_SEARCH,
} from "../actions/news.actions";

const defaultState = {
	data: [],
	categoryTitle: "Hoy",
	loading: false,
	search: "",
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case SET_DATA:
			return {
				...state,
				data: action.payload,
			};
		case SET_CATEGORY_TITLE:
			return {
				...state,
				categoryTitle: action.payload,
			};
		case SET_LOADING:
			return {
				...state,
				loading: action.payload,
			};
		case SET_SEARCH:
			return {
				...state,
				search: action.payload,
			};
		default:
			return { ...state };
	}
};
