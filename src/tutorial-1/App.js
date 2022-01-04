import React from 'react'
import Profile from './components/ProfileFunction'
import ProfileClassComponent from './components/ProfileClassComponent'
const App = () => {
    return (
        <div>
           <Profile name='Вася Пупкин' registredAt={new Date(2022,0,3)} />
           <ProfileClassComponent name='Сергей Иванов' registredAt={new Date(2022,0,3)} />
        </div>
    )
}

export default App
