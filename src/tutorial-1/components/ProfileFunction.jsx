import React from 'react'

const Profile = props => {
    const name = props.name.split(' ')[0]
    const date = props.registredAt.toLocaleString("ru", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    return (
        <div>
            <p>Привет, <b>{name}!</b></p>
            <p>Дата регистрации: {date}</p>
        </div>
    )
}

export default Profile
