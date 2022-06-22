import React from "react"
import { useNavigate } from "react-router-dom";


export default function Error(){

    const back = useNavigate();

    return(
        <div>
            <h1>Not Found</h1>
            <button onClick={() => back("/")}>Retourne à la page d'accueil</button>
        </div>
    )
}