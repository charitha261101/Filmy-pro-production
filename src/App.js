import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Director from './Director';
import Producer from './Producer';
function Dashboard(){
  const [togle,settoggle]=useState('false');
  return(
    <>
    <div className='t'>
    <div className='b'>
      <button onClick={()=>{settoggle(!togle)}}>---</button>
      </div>
    <div className='top'>
      <h1>DASHBOARD</h1>
    </div>
    </div>
    <div className={`sidebar ${togle ? 'open' : ''}`}>
    <ul>
      <li><Link to='/director' className="link" activeClassName="active">DIRECTOR</Link></li>
      <li><Link to='/producer' className="link" activeClassName="active">PRODUCER</Link></li>
    </ul>
    </div>
    </>
  )
}
function App() {
  return (
   <>
   <div>
    <BrowserRouter>
    <Dashboard/>
    <Routes>
      <Route path='/director' element={<Director/>} />
      <Route path='/producer' element={<Producer/>} />
    </Routes>
    </BrowserRouter>
   </div>
   </>
  )
}
export default App;
