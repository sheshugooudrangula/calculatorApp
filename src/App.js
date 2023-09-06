import React, { useState } from 'react';
import './index.css'

function App() {
  const[value, setValue] = useState('');

  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className="display">
            <input type="text" value={value} />
          </div>
          <div>
            <input
              type="button"
              value="Ac"
              onClick={e => setValue('')}
              className="operator"
            />
            <input
              type="button"
              value="De"
              onClick={e => setValue(value.slice(0,-1))}             
              className="operator"
            />
            <input
              type="button"
              value="."
              onClick={e => setValue(value + e.target.value)}             
               className="operator"
            />
            <input
              type="button"
              value="/"
              onClick={e => setValue(value + e.target.value)}
              className="operator"
            />
          </div>
          <div>
            <input
              type="button"
              value="7"
              onClick={e => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="8"
              onClick={e => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="9"
              onClick={e => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="*"
              onClick={e => setValue(value + e.target.value)}
              className="operator"
            />
          </div>
          <div>
            <input
              type="button"
              value="4"
              onClick={e => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="5"
              onClick={e => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="6"
              onClick={e => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="-"
              onClick={e => setValue(value + e.target.value)}
              className="operator"
            />
          </div>
          <div>
            <input
              type="button"
              value="1"
              onClick={e => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="2"
              onClick={e => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="3"
              onClick={e => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="+"
              onClick={e => setValue(value + e.target.value)}
              className="operator"
            />
          </div>
          <div>
            <input
              type="button"
              value="00"
              onClick={e => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="0"
              onClick={e => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="="
              onClick={e => setValue(eval(String(value)))}
              className="equal operator"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
