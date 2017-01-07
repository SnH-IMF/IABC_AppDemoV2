/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import AppContainer from './app/containers/AppContainer';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, combineReducers, compose}from'redux'
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from './app/reducers';


//--configure middleware that logs actions with this one line 
const loggerMiddleware = createLogger({predicate:(getState,action) => __DEV__});

//-- lets configure the store that will bring all our middleware configurtion together 
function configureStore(initialState){
  //--we will create an enhancer using the composer 
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,//--lets us dispatch() functions 
      loggerMiddleware,//--the logger we had define is now setup for use 
    ),
  );
  return createStore(reducer,initialState,enhancer);
}

//-- let now create our store  // which is the middleware 
const store = configureStore({});


/**
 * this file does only one thing basically just 
 * wraps our app container with our store and runs the 
 * appContainer 
 */
const App = () =>(
  <Provider store={store}>
    <AppContainer/>
  </Provider>
)


//-- lets now change and register our app to the app method rendering the app container 
AppRegistry.registerComponent('ReduxV1', () => App);



//
