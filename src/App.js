import React from 'react';
import './App.css';
import Button from './components/atoms/button/Button'
function App(props) {
  function onclick(){
    alert("firstProj");
  }
  return (
    <div>
      <Button className="class_name" onclick={onclick}>Hello</Button>
    </div>
  );
}

export default App;