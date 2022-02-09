import React, { useState } from "react";
import axios from 'axios'

const App = () => {
  const [users, setUsers] = useState([]);
  const [uploading, setUploading] = useState(false)
  const getUsers =  async() => {
   const res = await axios.get('https://61ffc1cb5e1c4100174f6f2f.mockapi.io/users')
   setUsers(res.data)
   
  };
  const createUser = () => {
      const elemEmail = document.querySelector('#email')
      const elemName = document.querySelector('#name')
      const data = {
          email:elemEmail.value,
          name: elemName.value
      }
      axios.post ('https://61ffc1cb5e1c4100174f6f2f.mockapi.io/users', data)
  }
  const uploadFile = async() => {
    const elemFile= document.querySelector('#file')
    const file = elemFile.files[0]
    setUploading(true)
    const formData = new FormData()
    formData.append('file', file)
    await axios.post("http://localhost:9999", formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    setUploading(false)
  }
  return (
    <>
      <ul>
        {users.map((obj) => (
          <li key={obj.id}>{obj.name}</li>
      
        ))}
      </ul>
      <button onClick={getUsers}>Получить список пользователей</button>

      <br/>
      <br/>
        <div>
            <h4>Send to server Data</h4>
            <input id="email" placeholder="email" />
            <input id="name" placeholder="name" />
            <button onClick={createUser}>Send</button>
        </div>
        <br />
       <div>
           <h4>Download File:</h4>
           <input id="file" type="file" />
           <button disabled={uploading} onClick={uploadFile}>Send File</button>
           {uploading &&  <p>Downloading...</p> }
          
       </div>
    </>
    
  );
};

export default App;
