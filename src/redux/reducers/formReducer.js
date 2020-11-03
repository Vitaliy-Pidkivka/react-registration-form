import { SET_FORM_DATA } from '../types'

const initialState = {
	formData: null,
	users: []
}

const formReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_FORM_DATA:
			return {
				...state,
				userInfo: {
					...state.formData,
					...action.formData
				}
			}
		default:
			return state
	}
}

//selectors
export const getUserInfo = state => state.form.userInfo


export default formReducer
