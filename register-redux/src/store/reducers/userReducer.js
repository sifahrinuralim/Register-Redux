const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: 0,
    password: "",
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_FIRST_NAME":
            return {
                ...state,
                firstName: action.firstName
            }
        case "SET_LAST_NAME":
            return {
                ...state,
                lastName: action.lastName
            }
        case "SET_EMAIL":
            return {
                ...state,
                email: action.email
            }
        case "SET_PHONE_NUMBER":
            return {
                ...state,
                phoneNumber: action.phoneNumber
            }
        case "SET_PASSWORD":
            return {
                ...state,
                password: action.password
            }
        case "SET_ALL":

            console.log("Changing all user state", action);

            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email,
                phoneNumber: action.payload.phoneNumber,
                password: action.payload.password
            }
        default:
            return state
    }
}

export default userReducer