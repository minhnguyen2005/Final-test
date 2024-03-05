
import{Route, Routes,} from 'react-router-dom'
import './App.css'

import All from './pages/All'
import Active  from './pages/Active'
import Complete from './pages/Completed'
import Navbar from './compunent/Navbar'
function App() {


  return (
  
    
    <div>
    

      
      <div className='logo'>
      <h1>#todo</h1>
    </div>
      <Navbar/>
      <Routes>
         <Route path='/All' element={<All/>}></Route>
         <Route path='/Active' element={<Active/>}></Route>
         <Route path='/Completed' element={<Complete/>}></Route>
      </Routes>
    </div>

  )
}

export default App
