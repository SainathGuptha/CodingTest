import './App.css';
import { useState } from 'react';
import Team from './Data';
function App() {
  const [name,setName]= useState("hello")
  console.log(name);
  return (
    <div className="App">
      <Team/>
    </div>
  );
}

export default App;
