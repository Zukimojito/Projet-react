import React,{useState,useEffect} from "react"
import './Navbar.css'




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
                <li className="item-nav">Home</li>
                <li className="item-nav">Write</li>
                <li className="item-nav">Contact</li>

            </ul>
            )}

            <button onClick={toggleNav} className="btn-nav">BTN</button>
            

        </nav>
    )
}