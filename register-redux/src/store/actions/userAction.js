import store from '../index'

function setAll(payload) {

    console.log();

    store.dispatch({
        type: "SET_ALL",
        payload: {
            firstName: payload.firstName,
            lastName: payload.lastName,
            email: payload.email,
            phoneNumber: payload.phoneNumber,
            password: payload.password
        }
    })
}

function setFirstName(payload) {
    store.dispatch({
        type: "SET_FIRST_NAME",
        firstName: payload
    })
}

function setLastName(payload) {
    store.dispatch({
        type: "SET_LAST_NAME",
        lastName: payload
    })
}

function setEmail(payload) {
    store.dispatch({
        type: "SET_EMAIL",
        email: payload
    })
}

function setPhoneNumber(payload) {
    store.dispatch({
        type: "SET_PHONE_NUMBER",
        phoneNumber: payload
    })
}
function setPassword(payload) {
    store.dispatch({
        type: "SET_PASSWORD",
        password: payload
    })
}

export default {
    setAll,
    setFirstName,
    setLastName,
    setEmail,
    setPhoneNumber,
    setPassword
}