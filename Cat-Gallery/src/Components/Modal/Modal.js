import React, {useEffect, useState} from 'react'


import './Modal.css'


export default function Modal(){

    const [TModal, setTModal] = useState(false);
    const [RDV, setRDV] = useState({});



    const toggleModal = () => {
        setTModal(!TModal);
    }

    useEffect(() =>{

        // fetch('https://europe-west1-matters-test.cloudfunctions.net/getAdoptionAppointment')
        // .then(response => {
        //     console.log(response);
        //     return response.json()
        // })
        // .then(data => {
        //     console.log(data);

        // })

        fetch('https://europe-west1-matters-test.cloudfunctions.net/getAdoptionAppointment',{
            method : "POST",
            body : JSON.stringify({
                "catId": 15
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => {
            return response.json();
            console.log(response);
        })
        .then(data => {
            setRDV(data)
        })


    },[])

    console.log(RDV);

    return(
        <>
            <button onClick={toggleModal} className='btn-modal'>Make an apppointment to adopt</button>
            {TModal &&
            <div className='overlay'>
                <div className='modal'>
                    <div className='modal-content'>
                        <h2>Appointment request</h2>
                        <p>Thanks you ! </p>
                            <p>{RDV.appointment}</p>
                        <button onClick={toggleModal} className='close-modal'>X</button>
                    </div>
                </div>
            </div>
            }   
        </>
    )
}