import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



// function clock() {
//   const element = (
//     <div>
//       <h1>La hora es: {new Date().toLocaleTimeString()}</h1>
//     </div>
//   )
//   ReactDOM.render(element, document.getElementById('root'))
// }

// setInterval(clock, 1000)



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
