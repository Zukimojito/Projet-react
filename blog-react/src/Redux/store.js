import {configureStore} from '@reduxjs/toolkit'
import AddArticleReducer from './articles/articleReducer';
import thunk from 'redux-thunk';                                //c'est pour faire passer des fonctions dans dispatch



const store = configureStore({
  reducer : {addarticle : AddArticleReducer},
  middleware : [thunk]
});

export default store;