import './Gallery.css'
import { useEffect, useState } from 'react'

import Detail from '../Detail/Detail';
import { Link, useNavigate } from "react-router-dom";



export default function Gallery() {

    const [CatImg, setCatImg] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        fetch('https://europe-west1-matters-test.cloudfunctions.net/getCats')
        .then(response => {
            console.log(response);
            return response.json()
        })
        .then(data => {
            console.log(data);
            setCatImg(data)
            
        })
    },[])

    return (

        <div className="Gallery-content">
            <h1>Cats Gallery </h1> 
                <div className="list-group">

                    {CatImg.map((item) => {
                    return(
                    
                        <div 
                        name={item.name} 
                        key={item.id} 
                        img={item.picturePath} 
                        birthdate = {item.birthdate}
                        gender={item.gender}
                        breed={item.breed}>

                            {/* <button onClick={() => navigate("/detail/:id")} className="container-cat">
                            <h2>{item.name }</h2>
                            <img className="img-cat" src={item.picturePath} alt={item.name}/>
                            </button> */}

                            <Link to="/detail/:id" className="container-cat" 
                            state={[{id : item.id,name : item.name, image : item.picturePath, birthdate: item.birthdate, gender : item.gender, breed:item.breed}]}>

                            <h2>{item.name }</h2>
                            <img className="img-cat" src={item.picturePath} alt={item.name}/>
                            </Link>
                        </div>
                    )
                    })}
                    <p></p>
                </div>
        </div>
    )
}