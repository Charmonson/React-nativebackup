import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { campsites } from './campsites';
import { comments } from './comments';
import { promotions } from './promotions';
import { partners } from './partners';
import { favorites } from './favorites';
import { persistStore, persistCombineReducers } from 'redux-persist'; /*will automatically change*/
import storage from 'redux-persist/es/storage'; /*access to local storage device  & adds storage support*/


const config = {
    key: 'root',
    storage,
    debug: true
}

/* updates the state to local storage*/
 /*whenever a reducer is used to update*/
   /*redux store*/

export const ConfigureStore = () => {
    const store = createStore(
        persistCombineReducers(config, { 
            campsites,                    
            comments,                     
            partners,
            promotions,
            favorites
        }),
        applyMiddleware(thunk, logger)
    );

    const persistor = persistStore(store);

    return { persistor, store } ;
};