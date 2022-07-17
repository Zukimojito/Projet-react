import React,{useState} from 'react'
import './SubForm.css'

export default function DietForm(props) {

    const preventFunc = e =>{
        e.preventDefault();
    }

    const [formData, setformData] = useState({
      dietForm : "nodiet"
    });

    const handleRadio = e => {
      setformData({
        dietForm : e.target.value
      })
    }

    console.log(formData);



  return (
    <div>
        <form
        onSubmit={preventFunc}
        className="diet-form">

            <p>Quelle est ton régime alimentaire ?</p>

            <label htmlFor="nodiet">Pas de régime particulier</label>
            <input onChange={handleRadio} type="radio" name='diet' id="nodiet" value="nodiet"/>

            <label htmlFor="homnivor">Homnivore</label>
            <input onChange={handleRadio} type="radio" name='diet' id="homnivor" value="homnivor"/>

            <label htmlFor="vegetarian">Végétarien</label>
            <input onChange={handleRadio} type="radio" name='diet' id="vegetarian" value="vegetarian"/>

            <label htmlFor="vegan">Vegan</label>
            <input onChange={handleRadio} type="radio" name='diet' id="vegan" value="vegan"/>

            <button type="button" onClick={() => props.modifyIndex(3, formData)}>Valider</button>
         </form>

    </div>
  )
}
