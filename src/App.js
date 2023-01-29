import logo from './logo.svg';
import './App.css';
import { useMemo, useState } from 'react';

function App() {
  const [num , setnum] = useState(0);
  const [data , setdata] = useState(0);

  // const nm = useMemo(() => {
  //   function 
  //     console.log(num*10)
  // },[num])

const nm = useMemo((
  function test()
  {
    console.log(num*10)
  }
),[num])
  return (
    <div className="App">
     
      <h1>{num}</h1>
      <h1>{data}</h1>
      {nm}

      <input type="button" value='+' onClick={() =>  setnum(num+1)} />
      <input type="button" value='+' onClick={() =>  setdata(data+1)} />
    </div>
  );
}

export default App;
