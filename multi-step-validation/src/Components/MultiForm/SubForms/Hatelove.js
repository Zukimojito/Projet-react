import React, {useState} from 'react'
import './SubForm.css'

export default function Hatelove(props) {

    const [formData,setformData] = useState({
        pref : {
            love : "",
            hate : ""
        }
    })

    const preventfunc = e => {
        e.preventDefault();
        props.modifyIndex(6, formData);

    }

    const handleReturn = () => {
        props.modifyIndex(4);
    }

    const handletextarea = (e, pref) => {
        if(pref === 'love'){
            setformData({
                prefs:{
                    ...formData.prefs,
                    love : e.target.value
                }
            })
        }
        else if(pref === 'hate'){
            setformData({
                prefs:{
                    ...formData.prefs,
                    hate : e.target.value
                }
            })
        }
    }


  return (
    <form className='preferences-form'
    onSubmit={preventfunc}
    >

        <p>Parle-nous des aliments que tu préfère et tu détestes !</p>

        <label htmlFor="prefer"> Tes aliments préférés, séparés par une virgule : </label>
        <textarea onChange={e => handletextarea(e, 'love')} id="prefer" cols="20" rows="5" placeholder='un ou plusieurs, si tu en as'></textarea>

        <label htmlFor="hate">Les aliments que tu ne supportes pas, séparés par une virgule : </label>
        <textarea onChange={e => handletextarea(e, 'hate')}  id="hate" cols="20" rows="5" placeholder='un ou plusieurs, si tu en as'></textarea>

        <div className="container-nav-btns">
            <button onClick={handleReturn} type='button' className='prev'>Précédent</button>
            <button >Valider</button>

        </div>

    </form>
  )
}
