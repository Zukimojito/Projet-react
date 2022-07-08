import React from "react";
import {useLocation} from 'react-router-dom'
import './Articles.css'

export default function Articles(){

    const Location = useLocation();
    console.log(Location);

    return(
        <div className="article-content">
            <h2>Your Article : {Location.state.title}</h2>

            <p>{Location.state.body}</p>

            
        </div>
    )
}