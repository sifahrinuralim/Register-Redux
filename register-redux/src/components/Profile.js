import React from 'react'
import store from '../store/index'

function Profile() {

    const {
        firstName,
        lastName,
        phoneNumber,
        email,
        password
    } = store.getState()

    return (
        <div>
            <h1>Profile</h1>
            <h3>{firstName}</h3>
            <h3>{lastName}</h3>
            <h3>{phoneNumber}</h3>
            <h3>{email}</h3>
            <h3>{password}</h3>
        </div>
    )
}

export default Profile