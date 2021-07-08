import './styles/App.css'
import { React, useEffect } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'


function App() {
  return (
    <div className="App">
      hi i'm an app
      <Login/>
      <Register/>
    </div>
  );
}

export default App;
