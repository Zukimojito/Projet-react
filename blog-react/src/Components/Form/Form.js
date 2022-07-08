import React,{useState} from "react"
import { useDispatch } from "react-redux"

import  './Form.css'



export default function Form(){

    const [article,setArticle] = useState({
        title:"",
        body:""
    });

    const dispatch = useDispatch();

    const HandleForm = e => {
        e.preventDefault();

        dispatch({
            type : 'ADDARTICLES',
            payload : article
        })

        setArticle({
            title : "",
            body : ""
        });
    }

    const HandleInput = e => {
        if(e.target.classList.contains('form-inp-title')){
            const NewObjState = {
                ...article,
                title : e.target.value
            }
            setArticle(NewObjState);
        }
        else if(e.target.classList.contains('form-inp-body')){
            const NewObjState = {
                ...article,
                body : e.target.value
            }
            setArticle(NewObjState);
        }
    }

    return(
        <> 
            <h1 className="title-form">Write an article </h1>
            
            <form onSubmit={HandleForm} className="container-form">
                <label htmlFor="title">Titre</label>
                <input 
                value={article.title}
                onChange={HandleInput} 
                type="text" 
                id="title" 
                className="form-inp-title"
                placeholder="Entrer your name"/>

                <label htmlFor="article">Your article</label>
                <textarea
                onChange={HandleInput} 
                value={article.body} 
                id="article" 
                className="form-inp-body"
                placeholder="Your article"></textarea>

                <button>Send</button>


            </form>

        </>
    )
}