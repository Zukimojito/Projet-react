import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCatIMG } from "../redux/reducers/imageCatReducer";



export default function Counter(){

    const [Value, setValue] = useState(0);

    //const count = useSelector(state => state.addcard.cart); //seulement useSelector pour 1 reducer !!!!!

    const {count, cart, imgcat} = useSelector(state => ({           //ici le {count , cart} correspond à les valeurs dans le INITIAL_STATE du reducer
        ...state.counter,
        ...state.addcard,
        ...state.imagecat
    }))

    const dispatch = useDispatch();

    const FuncInc = () =>{
        dispatch({
            type : "INCR"
        })
    }

    const FuncDecre = () => {
        dispatch({
            type : "DECRE"
        })
    }

    const AddToCartFunc = () => {
        dispatch({
            type : "ADDCART",
            payload : Value

        })
    }

    useEffect(() => {
        dispatch(getCatIMG())
    },[])

    return(
        <div>
            <h1>Votre panier : count {count} cart {cart}</h1>
            <button onClick={FuncDecre}>-1</button>
            <button onClick={FuncInc}>+1</button> 
            <input
            value={Value}
            onInput={e => setValue(e.target.value)}
             type="number" />
             <br/>
             <button onClick={AddToCartFunc}>Ajouter au panier</button>
            <br />
            {imgcat && <img style={{width:"500px"}} src={imgcat}/>}

        </div>
    )
}