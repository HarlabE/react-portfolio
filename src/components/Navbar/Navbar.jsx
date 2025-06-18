
import './Navbar.css'
import { useState } from 'react'
import img1 from '../../assets/my-logo.png'
export const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav>
        <a href="#about"><img width="20%"  src={img1} alt="" /></a>
        <div className='menu' onClick={()=>{
            setMenuOpen(!menuOpen)
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
        <li><a href="#about"> About me</a></li> 
        <li><a href="#skills">Skills</a></li> 
        <li><a href="#portfolio">Portfolio</a></li> 
           
           
        </ul>
    </nav>
  )
}
