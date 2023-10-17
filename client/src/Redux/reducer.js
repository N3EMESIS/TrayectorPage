import {
	GET_ALL_COURSES,
	GET_COURSE_BY_ID,
	FILTER_NAME_COURSE,
	GET_CLIENT_DATA,
	SET_PAGE,
	GET_CLIENT_ORDERS,
	GET_ORDER_BY_ID,
	CREATE_ORDER,
	DROP_COURSE,
	DELETE_ORDER,
	VALIDATE_LOGIN,
	ORDER_FILTER,
	SET_COURSE_SEARCH,
	LOGOUT,
	LOGIN,
	GET_ALL_CLIENTS,
	DELETE_CLIENT,
	GET_MP_LINK,
	CHANGE_LABEL,
	GET_ORDERS,
	GET_ALL_ADMIN_CLIENTS,
	GET_ALL_COURSES_CLIENTS,
	DELETE_COURSE_ADMIN,
	VALIDATE_ADMIN_LOGIN,
	ADMIN_LOG_OUT,
    UPDATE_COURSE,
} from "./Actions/types";
const coursesa = JSON.parse(localStorage.getItem("courses")) || [];

const initialState = {
	courses: [],
	filteredCourses: [],
	course: coursesa,
	currentPage: 0,
	itemsPerPage: 1,
	allOrders: [],
	orders: [],
	order: {},
	success: {},
	user: {},
	clientOrders: [],
	orderDelete: [],
	isAuthenticated: false,
	allClients: [],
	deletedClient: "",
	MPLink: "",
	labels: {
		Graph: false,
		Clients: false,
		Courses: false,
		Orders: false,
	},

	clientsAdmin: [],
	coursesAdmin: [],
	deleteCourse: [],
	admin: {},
    updatedCourse : ''
};

export default function rootReducer(state = initialState, action) {
	switch (action.type) {
		case GET_CLIENT_DATA:
			return {
				...state,
				user: action.payload,
			};

		case GET_ALL_COURSES:
			return {
				...state,
				courses: [...action.payload],
				filteredCourses: [...action.payload],
			};
		case GET_COURSE_BY_ID:
			return { ...state, course: [action.payload] };

		case VALIDATE_LOGIN:
			return {
				...state,
				user: action.payload,
			};
		case LOGIN:
			return {
				...state,
				isAuthenticated: true,
				// Reset other relevant authentication state properties upon logout
			};
		case LOGOUT:
			return {
				...state,
				isAuthenticated: false,
				user: {},
				// Reset other relevant authentication state properties upon logout
			};
		// Other authentication-related action cases

		case FILTER_NAME_COURSE:
			const filterCourses = state.courses.filter((course) => {
				const courseName = course.nombre.toLowerCase();
				if (action.payload === "") return state.courses;
				return courseName.includes(action.payload.toLowerCase());
			});
			return { ...state, courses: filterCourses };

		case DROP_COURSE:
			return {
				...state,
				cart: [
					...state.cart.filter(
						(course) => Number(course.id) !== Number(action.payload)
					),
				],
			};

		case SET_PAGE:
			return { ...state, currentPage: [action.payload] };

		case CREATE_ORDER:
			return { ...state, success: action.payload };

		case GET_ORDER_BY_ID:
			return { ...state, order: [action.payload] };

		case GET_ORDERS:
			return {
				...state,
				allOrders: [...action.payload],
			};

		case GET_CLIENT_ORDERS:
			return { ...state, clientOrders: action.payload };

		case DELETE_ORDER:
			return {
				...state,
				clientOrders: [
					...state.clientOrders.filter((order) => order.id !== action.payload),
				],
				orderDelete: [action.payload],
			};

		case ORDER_FILTER:
			return {
				...state,
				courses: [...action.payload],
			};

		case SET_COURSE_SEARCH:
			return {
				...state,
				courses: action.payload,
			};

		case GET_ALL_CLIENTS:
			return {
				...state,
				allClients: [...action.payload],
			};
		case DELETE_CLIENT:
			return {
				...state,
				deletedClient: action.payload,
			};
		case GET_MP_LINK:
			return {
				...state,
				MPLink: action.payload,
			};

		case CHANGE_LABEL:
			return {
				...state,
				labels: {
					Graph: false,
					Clients: false,
					Courses: false,
					Orders: false,
					[action.payload]: true,
				},
			};

		case GET_ALL_ADMIN_CLIENTS:
			return {
				...state,
				clientsAdmin: action.payload,
			};

		case GET_ALL_COURSES_CLIENTS:
			return {
				...state,
				coursesAdmin: action.payload,
			};

		case DELETE_COURSE_ADMIN:
			return {
				...state,
				deleteCourse: action.payload,
			};

		case VALIDATE_ADMIN_LOGIN:
			return {
				...state,
				admin: action.payload,
			};

		case ADMIN_LOG_OUT:
			return {
				...state,
				admin: "",
			};

		case UPDATE_COURSE:
			return { ...state, updatedCourse: action.payload };

		default:
			return { ...state };
	}
}
