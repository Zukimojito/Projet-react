import React from "react";
import './Home.css'
import Card from '../../Components/Card/Card'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from "react";
import { getArticles } from "../../Redux/articles/articleReducer";
import { v4 as uuidv4 } from "uuid";        //import id random
import {Link} from 'react-router-dom'

export default function Home() {

    const { ArticleDoc } = useSelector(state => ({
        ...state.addarticle
    }))

    const dispatch = useDispatch();

    useEffect(() => {

        if (ArticleDoc.length === 0) {
            dispatch(getArticles());
        }

    }, [])


    return (
        <>

            <h1 className="title-home">All articles</h1>

            <div className="container-card">

                {ArticleDoc.map(item => {
                    return (
                        <Card key={uuidv4()}>
                            <h2>{item.title}</h2>

                            <Link to={{
                                pathname: `articles/${item.title.replace(/\s+/g,'-').trim()}`}}           // changer URL en + propre \s+ = tous les espaces, g = gloabal, '-' = remplacer par des tirer
                                state={{title : item.title, body : item.body}}
                            >                                                                
                            Lire l'article                                                              
                            </Link> 
                           
                        </Card>
                    )
                })}



            </div>

        </>
    )
}