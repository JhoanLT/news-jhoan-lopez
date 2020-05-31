import { Api } from "../../services/ApiService";

export const SET_DATA = "SET_DATA";
export const SET_CATEGORY_TITLE = "SET_CATEGORY_TITLE";
export const SET_LOADING = "SET_LOADING";
export const SET_SEARCH = "SET_SEARCH";

export const setData = (payload) => ({
	type: SET_DATA,
	payload,
});

export const setCategoryTitle = (payload) => ({
	type: SET_CATEGORY_TITLE,
	payload,
});

export const setLoading = (payload) => ({
	type: SET_LOADING,
	payload,
});

export const setSearch = (payload) => ({
	type: SET_SEARCH,
	payload,
});

/**
 * Esta función envía peticiones al servicio de API
 * @author Jhoan López <jhoanlt19@gmail.com>
 * @param {*} endpoint
 * @param {*} data
 * @param {*} method
 */
export const getData = (endpoint, data = {}, method = "GET") => async (
	dispatch
) => {
	const request = async () => {
		try {
			dispatch(setLoading(true));
			const response = await Api.fetch(endpoint, data, method);
			if (response.status) {
				dispatch(setData(response.data));
			} else {
				dispatch(setData([]));
			}
			dispatch(setLoading(false));
			return response;
		} catch (err) {
			return false;
		}
	};
	return await request();
};
