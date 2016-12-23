 /**
 * @by:lani
 * @date()=>2016-12-23
 * @title: 
 * @url:https://github.com/jlebensold/peckish/blob/master/app/lib/createReducer.js
 */

import * as RecipeActions from './recipes';

export  const ActionCreators = Object.assign({},
    RecipeActions,
);























 /**
 * we are using the Object.assign which allows to combine multiple objects together
 * we need to define what recipe actions is 
 * which we will define in another file called recepies 
 * all of my recipe actions if i was to have many all the actions are going 
 * to be functions that i will define in my ./recepies file 
 * and by using this syntax import * RecipeActions from './recipes';
 * we are importing all the recepies defines as objects and merging them 
 * with any other actions that my application might have and reyrning then as 
 * action creators 
 * so basically im just grouping up all ofthe potential actions that my app will have 
 * could perform into this action creator 
 * this is particulary useful if ur application 
 * so all of these will be different actions that your mobile is supposed to respond to  
 * and itshelp ful to have a manifest file to describe them all 
 */
