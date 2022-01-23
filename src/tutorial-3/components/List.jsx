import React, {useState} from 'react';
import data from '../mock.json'
import './style.css'
const List = () => {
    const [active, setActive] = useState(false)
    const handleActive = (id) => {
      setActive(id)
    
    }
    return (
      
      <div id="app">
        <div class="app-container">
          <h1 class="app-title">FAQ</h1>
          <div class="app-tabs">
            {data.map(item=> {
              return(
                
                <div class={(item.id === active ? 'tab active' : 'tab')}>
                <input id="tab-two" type="checkbox" name="tabs" />
                <label onClick={() => handleActive(item.id)} for="tab-two">{item.title}</label>
                <div class="tab-content">
                  <p>
                    {item.description}
                  </p>
                </div>
              </div>
              )
            })}
   
          </div>
        </div>
      </div>
    );
  }

export default List;
