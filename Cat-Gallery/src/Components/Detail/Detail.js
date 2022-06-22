import { useEffect, useState } from "react"
import './Detail.css'
import { useParams,useLocation } from "react-router-dom"
import Modal from "../Modal/Modal"


export default function Detail(){

    const [catData, setCatData] = useState([])

    const Param = useParams();
    // console.log(Param);
    const location = useLocation();
    // console.log(location);

    useEffect(() => {
        setCatData(location.state)
    },[])

    console.log(catData);

    return(
        <div className="detail-content">
            <h1>Cats Gallery</h1>
                {catData.map((item) => {
                    return(
                        <div key={item.id}>
                            <div className="cat-container">
                                <img src={item.image}  className="img-cat-detail" />
                                <div className="cat-infos">
                                    <h2>{item.name}</h2>
                                    <p>{item.birthdate}</p>
                                    <p>{item.gender}</p>
                                    <p>{item.breed}</p>
                                    <Modal/>
                                </div>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}