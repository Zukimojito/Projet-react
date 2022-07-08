import React,{useState,useEffect} from "react"
import './Navbar.css'
import {Link } from 'react-router-dom'




export default function Navbar(){

    const [ToggleMenu,setToggleMenu] = useState(false);
    const [BaseWidth, setBaseWidth] = useState(window.innerWidth);

    const toggleNav = () =>{
        setToggleMenu(!ToggleMenu);

    }

    useEffect(() => {

        const changeWidth = () => {
            setBaseWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth);

        return() =>{
            window.removeEventListener('resize', changeWidth);
        }
    },[])

    return(
        <nav>
            {(ToggleMenu || BaseWidth > 500) && (
            
            <ul className="liste-nav">
                <li ><Link  className="item-nav" to="/">Home</Link></li>
                <li ><Link  className="item-nav" to="/write">Write</Link></li>
                <li ><Link  className="item-nav" to="/contact">Contact</Link></li>

            </ul>
            )}

            <button onClick={toggleNav} className="btn-nav">BTN</button>
            

        </nav>
    )
}