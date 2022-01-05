import React from 'react'

class ProfileClassComponent extends React.Component {
    constructor(props){
        const name = props.name.split(' ')[0]
        const date = props.registredAt.toLocaleString("ru", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
          super(props)
          this.name = name
          this.date = date
    }

    render () {
        return(
           <>
                <p>Привет,<b>{this.name}!</b></p>
                <p>Дата регистрации: {this.date}</p>
           </>
        )
    }
}

export default ProfileClassComponent
