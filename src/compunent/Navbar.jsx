import React from 'react'
import{Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='container '>
    <div className='navbar '>  
     <ul>
       <li>
          <Link to='/All' >All</Link>
       </li>
       <li>
          <Link to='/Active' >Active</Link>
       </li>
       <li>
          <Link to='/Completed'>Completed</Link>
       </li>
     </ul>
    </div>
   </div>
  )
}

export default Navbar