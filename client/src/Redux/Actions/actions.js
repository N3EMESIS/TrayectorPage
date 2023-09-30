import axios from "axios";

import {
	GET_ALL_COURSES,
	GET_COURSE_BY_ID,
	CLEAN_DETAIL,
	ADD_CART,
	UPDATE_CART,
	FILTER_NAME_COURSE,
	FILTER_PRICE_COURSE,
	SET_PAGE,
	CREATE_ORDER,
	GET_CLIENT_ORDERS,
	GET_ORDER_BY_ID,
	VALIDATE_LOGIN,
	REGISTER_USER,
	DELETE_ORDER,
	UPDATE_ORDER,
	GET_CLIENT_DATA,
	CLEAN_CLIENT_ID,
	UPDATE_CLIENT_DATA,
	ORDER_FILTER,
	DROP_COURSE,
	SET_COURSE_SEARCH,
	INCREMENT_COURSE,
	DECREMENT_COURSE,
	LOGIN,
	LOGOUT,
	GET_ALL_CLIENTS,
	DELETE_CLIENT,
	CLEAN_CART,
	GET_MP_LINK,
	CHANGE_LABEL,
	UPDATE_ADDRESS,
	CLEAN_ADDRESS,
	GET_ORDERS,
	GET_ALL_ADMIN_CLIENTS,
	GET_ALL_COURSES_CLIENTS,
	DELETE_COURSE_ADMIN,
	VALIDATE_ADMIN_LOGIN,
	ADMIN_LOG_OUT,
	UPDATE_COURSE,
} from "./types";

import Pop_up from "../../Utils/Pop_up/Pop_up";

export const createCourse = (course) => {
	return async function (dispatch) {
		try {
			const res = await axios.post(`/product`, course);
			const newOrder = res.data;
			Pop_up(
				"success",
				"Product created",
				"Your product is already published",
				"bottom"
			);
		} catch (error) {
			Pop_up("error", "There was a mistake", `${error.response.data}`);
		}
	};
};

/*TODOS LOS CURSOS*/
export const getAllCourses = () => {
	return async function (dispatch) {
		try {
			const res = await axios.get(`/course`);
			const courses = res.data;
			dispatch({ type: GET_ALL_COURSES, payload: courses });
		} catch (error) {
			alert(error.response.data);
		}
	};
};

export function setCourseSearch(searchResult) {
	return {
		type: SET_COURSE_SEARCH,
		payload: searchResult,
	};
}

/*OBTENER CURSO POR ID*/
export const getCourseById = (id_course) => {
	return async function (dispatch) {
		try {
			const res = await axios.get(`/course/${id_course}`);
			const course = res.data;
			dispatch({ type: GET_COURSE_BY_ID, payload: course });
		} catch (error) {
			alert(error.response.data);
		}
	};
};

/* LIMPIAR DETAILS */
export const cleanDetail = () => ({ type: CLEAN_DETAIL });

/* OBETENER COMENTARIOS DE LOS CLIENTES */
// export const getCustomerComments = () => {
// 	return async function (dispatch) {
// 		try {
// 			const res = await axios.get(`/pagereview`);
// 			const comm = res.data;
// 			dispatch({ type: GET_CUSTOMER_COMMENTS, payload: comm });
// 		} catch (error) {
// 			alert(error.response.data);
// 		}
// 	};
// };

/* AÑADIR CURSO A LA CART, CURSO */
export const addCartCourse = (course) => ({
	type: ADD_CART,
	payload: course,
});

/* ACTUALIZA CART*/
export const newCart = (updateCart) => ({
	type: UPDATE_CART,
	payload: updateCart,
});

export const cleanCart = () => ({
	type: CLEAN_CART,
	payload: [],
});

/* ELIMINAR CURSO POR ID */
export const dropCourse = (id) => ({ type: DROP_COURSE, payload: id });

export const incrementCourse = (id) => ({
	type: INCREMENT_COURSE,
	payload: id,
});

export const decrementCourse = (id) => ({
	type: DECREMENT_COURSE,
	payload: id,
});

export const filterNameCourse = (course) => ({
	type: FILTER_NAME_COURSE,
	payload: course,
});

/* FILTRAR POR PRECIO DEL CURSO */
export const filterPriceCourse = (course) => ({
	type: FILTER_PRICE_COURSE,
	payload: course,
});

//! CAMBIAR PAGINA
export const changePage = (number) => {
	return { type: SET_PAGE, payload: number };
};

export const updateAddress = (address) => {
	return { type: UPDATE_ADDRESS, payload: address };
};

export const cleanAddress = () => {
	return { type: CLEAN_ADDRESS };
};

/* CREAR ORDEN */
export const createOrder = (order) => {
	return async function (dispatch) {
		try {
			const res = await axios.post(`/order`, order);
			const newOrder = res.data;
			return dispatch({ type: CREATE_ORDER, payload: newOrder });
		} catch (error) {
			alert(error.response.data);
		}
	};
};

/* OBTENER LAS ORDENES DEL CLIENTE POR ID */
export const getClientOrders = (id_client) => {
	//El id del cliente
	return async function (dispatch) {
		try {
			const res = await axios.get(`/client/orders/${id_client}`);
			const orders = res.data;
			return dispatch({ type: GET_CLIENT_ORDERS, payload: orders });
		} catch (error) {
			console.log(error.response.data);
		}
	};
};
export const getOrders = () => {
	//El id del cliente
	return async function (dispatch) {
		try {
			const res = await axios.get(`/order`);
			const allOrders = res.data;
			return dispatch({ type: GET_ORDERS, payload: allOrders });
		} catch (error) {
			console.log(error.response.data);
		}
	};
};
/* OBTENER DETALLES DE LAS ORDENES POR ID */
export const getOrderDetail = (id_order) => {
	return async function (dispatch) {
		try {
			const res = await axios.get(`/order/${id_order}`);
			const order = res.data;
			return dispatch({ type: GET_ORDER_BY_ID, payload: order });
		} catch (error) {
			console.log(error.response.data);
		}
	};
};

/* VALIDACION DEL LOGIN */
export const validateLogin = (user) => {
	return async function (dispatch) {
		try {
			const res = await axios.post(`/client/checkclient`, user);
			const userDB = res.data;
			return dispatch({ type: VALIDATE_LOGIN, payload: userDB });
		} catch (error) {
			console.log(error.response.data);
		}
	};
};
export const validateAdminLogin = (admin) => {
	return async function (dispatch) {
		try {
			const res = await axios.post(`/admin/checkadmin`, admin);
			const adminDB = res.data;
			return dispatch({ type: VALIDATE_ADMIN_LOGIN, payload: adminDB });
		} catch (error) {
			console.log(error.response.data);
		}
	};
};

export const adminLogOut = () => {
	return async function (dispatch) {
		try {
			return dispatch({ type: ADMIN_LOG_OUT });
		} catch (error) {
			console.log(error.response.data);
		}
	};
};
export const getUserDataByEmail = (email) => {
	return async function (dispatch) {
		try {
			const res = await axios.get(`/client?email=${email}`);
			const userData = res.data;
			return dispatch({ type: VALIDATE_LOGIN, payload: userData });
		} catch (error) {
			console.log(error.response.data);
		}
	};
};

/* REGISTRAR USUARIO */
export const registerUser = (user) => {
	return async function (dispatch) {
		try {
			const res = await axios.post(`/client`, user);
			const userDB = res.data;
			return dispatch({ type: REGISTER_USER, payload: userDB });
		} catch (error) {
			console.log(error.response.data);
		}
	};
};

/* ELIMINAR ORDEN POR ID */
export const deleteOrder = (order_id) => {
	return async function (dispatch) {
		try {
			const res = await axios.delete(`/order/${order_id}`);
			const orderDB = res.data;
			return dispatch({ type: DELETE_ORDER, payload: orderDB });
		} catch (error) {
			console.log(error.response.data);
		}
	};
};

export const validateUserExistenceInDb = (email) => {
	return async function (dispatch) {
		try {
			const res = await axios.post(`/client/checkclient/`, email);
			const userData = res.data;
			console.log(userData);
			return dispatch({ type: VALIDATE_LOGIN, payload: userData });
		} catch (error) {
			console.log(error.response.data);
		}
	};
};

/* MODIFICAR ORDEN POR ID */
export const updateOrder = (newOrder) => {
	return async function (dispatch) {
		try {
			const res = await axios.patch(`/order/`, newOrder);
			const orderDB = res.data;
			return dispatch({ type: UPDATE_ORDER, payload: orderDB });
		} catch (error) {
			alert(error.response.data);
		}
	};
};

/* OBTENER INFO DEL CLIENTE */
export const getClientData = (client_id) => {
	return async function (dispatch) {
		try {
			const res = await axios.get(`/client/${client_id}`);
			const clientDB = res.data;
			return dispatch({ type: GET_CLIENT_DATA, payload: clientDB });
		} catch (error) {
			console.log(error.response.data);
		}
	};
};

export const cleanClient_Id = () => {
	return { type: CLEAN_CLIENT_ID };
};

/* MODIFICAR DATA DEL CLIENTE */
export const updateClientData = (client_id, newData) => {
	return async function (dispatch) {
		try {
			const res = await axios.patch(`/client/${client_id}`, newData);
			const clientDataDB = res.data;
			return dispatch({ type: UPDATE_CLIENT_DATA, payload: clientDataDB });
		} catch (error) {
			alert(error.response.data);
		}
	};
};

/* ELIMINAR CLIENTE */
export const deleteClient = (client_id) => {
	return async function (dispatch) {
		try {
			const res = await axios.delete(`/client/${client_id}`);
			const clientDB = res.data;
			return dispatch({ type: DELETE_CLIENT, payload: clientDB });
		} catch (error) {
			alert(error.response.data);
		}
	};
};

/* CREAR COMENTARIO DE CLIENTE */
// export const createReview = (newReview) => {
// 	return async function (dispatch) {
// 		try {
// 			const res = await axios.post(`/review`, newReview);
// 			const reviewDB = res.data;
// 			return dispatch({ type: CREATE_REVIEW, payload: reviewDB });
// 		} catch (error) {
// 			alert(error.response.data);
// 		}
// 	};
// };

/* MODIFICAR COMENTARIO */
// export const updateReview = (review__id, newReview) => {
// 	return async function (dispatch) {
// 		try {
// 			const res = await axios.patch(`/review/${review__id}`, newReview);
// 			const reviewDB = res.data;
// 			return dispatch({ type: UPDATE_REVIEW, payload: reviewDB });
// 		} catch (error) {
// 			alert(error.response.data);
// 		}
// 	};
// };

/* ELIMINAR COMENTARIO */
// export const deleteReview = (review__id) => {
// 	return async function (dispatch) {
// 		try {
// 			const res = await axios.delete(`/review/${review__id}`);
// 			const reviewDB = res.data;
// 			return dispatch({ type: DELETE_REVIEW, payload: reviewDB });
// 		} catch (error) {
// 			alert(error.response.data);
// 		}
// 	};
// };

// OBTENER COMENTARIOS DEL CLIENTE POR ID
// export const getClientReviews = (id_client) => {
// 	return async function (dispatch) {
// 		try {
// 			const res = await axios.get(`/review/client/${id_client}`);
// 			const reviewsDB = res.data;
// 			return dispatch({ type: GET_CLIENT_REVIEWS, payload: reviewsDB });
// 		} catch (error) {
// 			console.log(error.response.data);
// 		}
// 	};
// };

/* OBTENER COMENTARIO DE CLIENTE POR ID  */
// export const getClientReview = (id_review) => {
// 	return async function (dispatch) {
// 		try {
// 			const res = await axios.get(`/review/${id_review}`);
// 			const reviewDB = res.data;
// 			return dispatch({ type: GET_CLIENT_REVIEW, payload: reviewDB });
// 		} catch (error) {
// 			console.log(error.response.data);
// 		}
// 	};
// };

//ORDENAMIENTO Y FILTRADO
export const orderAndFilter = (filterByType, sort) => {
	return async function (dispatch) {
		try {
			const res = await axios.get(
				`/product?filterByType=${filterByType}&sort=${sort}`
			);
			const filterProducts = res.data;
			return dispatch({ type: ORDER_FILTER, payload: filterProducts });
		} catch (error) {
			console.log(error.response.data);
		}
	};
};

//OBTENER FAVORITOS
// export const getFavorites = (id_client) => {
//   return async function (dispatch) {
//     try {
//       const res = await axios.get(`/favorite/client/${id_client}`);
//       const clientFavorites = res.data;
//       return dispatch({ type: GET_FAVORITES, payload: clientFavorites });
//     } catch (error) {
//       console.log(error.response.data);
//     }
//   };
// };

//CREAR FAVORITOS
// export const createFavoriteAction = (favorite) => {
// 	return async function (dispatch) {
// 		try {
// 			const res = await axios.post(`/favorite`, favorite);
// 			const favoriteDB = res.data;
// 			return dispatch({ type: CREATE_FAVORITE, payload: favoriteDB });
// 		} catch (error) {
// 			console.log(error.response.data);
// 		}
// 	};
// };

//ELIMINAR FAVORITOS
// export const deleteFavoriteAction = (product_id) => {
// 	return async function (dispatch) {
// 		try {
// 			const res = await axios.delete(`/favorite/${product_id}`);
// 			const favorite = res.data;
// 			return dispatch({ type: DELETE_FAVORITE, payload: favorite.id });
// 		} catch (error) {
// 			console.log(error.response.data);
// 		}
// 	};
// };

// export const getClientAllFavorites = (client_id) => {
// 	return async function (dispatch) {
// 		try {
// 			const res = await axios.get(`/favorite/client/${client_id}`);
// 			const favorites = res.data;
// 			return dispatch({ type: GET_CLIENT_FAVORITE, payload: favorites });
// 		} catch (error) {
// 			console.log(error.response.data);
// 		}
// 	};
// };

export const loginUser = () => {
	return {
		type: LOGIN,
	};
};

export const logoutUser = () => {
	return {
		type: LOGOUT,
	};
};

// export const getCourseReviews = (id_course) => {
// 	return async function (dispatch) {
// 		try {
// 			const res = await axios.get(`/review/course/${id_course}`);
// 			const productReviews = res.data;
// 			return dispatch({ type: GET_PRODUCT_REVIEWS, payload: productReviews });
// 		} catch (error) {
// 			console.log(error.response.data);
// 		}
// 	};
// };
// export const getAllReviews = () => {
// 	return async function (dispatch) {
// 		try {
// 			const res = await axios.get(`/review`);
// 			const reviews = res.data;
// 			return dispatch({ type: GET_REVIEWS, payload: reviews });
// 		} catch (error) {
// 			console.log(error.response.data);
// 		}
// 	};
// };
// export const getAllPageReviews = () => {
// 	return async function (dispatch) {
// 		try {
// 			const res = await axios.get(`/pagereview`);
// 			const pageReviews = res.data;
// 			return dispatch({ type: GET_PAGE_REVIEWS, payload: pageReviews });
// 		} catch (error) {
// 			console.log(error.response.data);
// 		}
// 	};
// };

// export const createPageReview = (review) => {
// 	return async (dispatch) => {
// 		try {
// 			const res = await axios.post("/pagereview", review);
// 			// const pageReview = res.data;
// 			// return dispatch({ type: CREATE_PAGE_REVIEW, payload: pageReview });
// 		} catch (error) {
// 			console.log(error.response.data);
// 		}
// 	};
// };
// export const updatePageReview = (review) => {
// 	return async (dispatch) => {
// 		try {
// 			const res = await axios.patch("/pagereview", review);
// 			// const pageReview = res.data;
// 			// return dispatch({ type: CREATE_PAGE_REVIEW, payload: pageReview });
// 		} catch (error) {
// 			console.log(error.response.data);
// 		}
// 	};
// };

// export const getClientPageReviews = (id) => {
//   return async function (dispatch) {
//     try {
//       const res = await axios.get(`/pagereview/client/${id}`);
//       const clientPageReview = res.data;
//       dispatch({ type: GET_CLIENT_PAGE_REVIEW, payload: clientPageReview });
//     } catch (error) {
//       console.log(error.response.data);
//     }
//   };
// };

export const getAllClients = () => {
	return async function (dispatch) {
		try {
			const res = await axios.get(`/client`);
			const clients = res.data;
			dispatch({ type: GET_ALL_CLIENTS, payload: clients });
		} catch (error) {
			console.log(error.response.data);
		}
	};
};

export const getMercadoPagoLink = (emailAndProducts) => {
	return async function (dispatch) {
		try {
			const res = await axios.post(`/payment`, emailAndProducts);
			const MPLink = res.data;
			return dispatch({ type: GET_MP_LINK, payload: MPLink });
		} catch (error) {
			console.log(error.response.data);
		}
	};
};

export const sendEmail = (form, type) => {
	return async function (dispatch) {
		if (type) {
			form = { ...form, type };
		} else throw new Error("Type is missing.");
		try {
			const res = await axios.post(`/mail`, form);
		} catch (error) {
			console.log(error);
		}
	};
};

// export const getCreatedOrderId = (order) => {
//   return async (dispatch) => {
//     try {
//       const res = await axios.get(`/order`);
//       const orders = res.data;
//       const foundOrder = orders.find((o) => o.ClientId === order.ClientId);

//       const orderId = foundOrder ? foundOrder.id : null;
//       dispatch({ type: SET_CREATED_ORDER_ID, payload: orderId });
//     } catch (error) {
//       // Manejo de errores
//     }
//   };
// };

export const ChangeLabel = (id) => {
	return { type: CHANGE_LABEL, payload: id };
};

export const getAllClientsAdmin = () => {
	return async function (dispatch) {
		try {
			const res = await axios.get(`/getadmin/clients`);
			const clients = res.data;
			dispatch({ type: GET_ALL_ADMIN_CLIENTS, payload: clients });
		} catch ({response}) {
			Pop_up('error', 'Error', response.data.error)
		}
	};
};

export const getAllCoursesAdmin = () => {
	return async function (dispatch) {
		try {
			const res = await axios.get(`/getadmin/courses`);
			const courses = res.data;
			dispatch({ type: GET_ALL_COURSES_CLIENTS, payload: courses });
		} catch ({response}) {
			Pop_up('error', 'Error', response.data.error)
		}
	};
};

export const deleteCourseAdmin = (id) => {
	return async function (dispatch) {
		try {
			const res = await axios.delete(`/course/${id}`);
			const course = res.data;
			dispatch({ type: DELETE_COURSE_ADMIN, payload: course });
		} catch ({response}) {
			Pop_up('error', 'Error', response.data.error)

			// alert(error.response.data.error);
		}
	};
};

export const updateCourse = (updatedCourse, id) => {
	return async function (dispatch) {
		try {
			const res = await axios.patch(`/product/${id}`, updatedCourse);
			const course = res.data;
			dispatch({ type: UPDATE_COURSE, payload: course });
		} catch (error) {
			Pop_up('error', 'Error', error)
			// alert(response.data.error);
		}
	};
};
