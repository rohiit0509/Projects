import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Mycontext from './context';
import Test from './components/Test';
import Test2 from './components/Test2';
import Table from './components/Table';

function App() {
  const [formdata, setFormdata] = useState({})
  return (
    <div>
 <Mycontext.Provider value={{formdata,setFormdata}}>
      <Login/>
      <Test status={"error"}/>
      <Test2>this is children of react Component</Test2>
      <Table/>
 </Mycontext.Provider>
    </div>
  );
}

export default App;
