import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);

// res.cokkkie(token).send(token)

function stringCheck(str1,str2){
  if(str1.length === str2.length){
    return false
  }
  else{
    for(let i=0;i<str1.length;i++){
      if(str1[i]!=str2[i]){
        return false
      }
    }
    return true
  }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
