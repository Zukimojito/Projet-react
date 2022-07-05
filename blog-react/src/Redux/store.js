import {configureStore, applyMiddleware} from '@reduxjs/toolkit';
import articleReducer from './articles/articleReducer'
import thunk from 'redux-thunk'


const store = configureStore({
    reducer : {article : articleReducer}
}, applyMiddleware(thunk ))

export default store;