import React,{useContext} from 'react'
import FrenchFlag from '../../assets/france.svg'
import SpainFlag from '../../assets/spain.svg'
import UnitedKingdomFlag from '../../assets/united-kingdom.svg'
import './ToggleLangs.css'
import {Context} from '../../context/langContext'




export default function ToggleLangs() {

    const {changeLang} = useContext(Context)            //same name as changeLang on langContext


  return (
    <div className='container-langs'>
        <img onClick={() => changeLang('FR')}  src={FrenchFlag}/>
        <img onClick={() => changeLang('ES')} src={SpainFlag}/>
        <img onClick={() => changeLang('EN')} src={UnitedKingdomFlag}/>

    </div>
  )
}
