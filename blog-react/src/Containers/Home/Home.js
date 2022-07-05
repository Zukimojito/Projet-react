import React from "react";
import './Home.css'
import Card from '../../Components/Card/Card'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect, useState } from "react";
import { getArticles } from "../../Redux/articles/articleReducer";

export default function Home(){


    return(
        <>

        <h1 className="title-home">All articles</h1>

        <div className="container-card">

            <Card> <h2>wsh wsh toi</h2></Card>

            

        </div>

        </>
    )
}