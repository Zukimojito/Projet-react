import {configureStore} from '@reduxjs/toolkit'
import CounterReducers from '../reducers/counterReducer';
import AddCardReducer from '../reducers/addCardReducer';
import imageCatReducer from '../reducers/imageCatReducer';
import { applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';                                //c'est pour faire passer des fonctions dans dispatch

// const customMiddleware = store => next => action => {        //soit ça sinon on utilise thunk(c'est aussi un middleware)

//     next(action) // continue dispatch

// }



const store = configureStore({
  reducer : {counter : CounterReducers, addcard : AddCardReducer, imagecat : imageCatReducer},
  middleware : [thunk]
});

export default store;