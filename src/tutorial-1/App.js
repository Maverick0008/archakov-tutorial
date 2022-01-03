import React from 'react'
import Profile from './components/ProfileFunction'
import ProfileClassComponent from './components/ProfileClassComponent'
const App = () => {
    return (
        <div>
           <Profile name='Вася' registredAt={new Date(2022,0,3)} />
           <ProfileClassComponent name='Сергей' registredAt={new Date(2022,0,3)} />
        </div>
    )
}

export default App
