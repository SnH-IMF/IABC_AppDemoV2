/**
 * @by:lani
 * @date()=>2016-12-23
 * @title: index.ripper / root appComponent
 */
import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {ActionCreators} from '../actions'
import Home from './Home';
import MainPage from './MainPage';
import SideBarMenu from './SideBarMenu';
import ComponentDemo from './ComponentDemo';
import Login from '../userCenter/login';
import UserCenter from '../userCenter/userCenter';
import WatchedCompanies from '../userCenter/watchedCompanies';
import JoinedEvents     from '../userCenter/joinedEvents';
import FavouriteMovies  from '../userCenter/favouriteMovies';

class AppContainer extends Component {
    

    render() {
        //because of my desruct here any props from my 
        //app container will get passed to my Home container 
        // so i would have access to any actions in my action creators 
        // return (<Home {...this.props}/>);
        // return (<MainPage{...this.props}/>);
        // return (
        //     <SideBarMenu {...this.props}/>
        // );
        return (<Login{...this.props}/>);
    }
}

//--create our own function to send actions to he entire app
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

//--export the class so that other components can acess it
/**
 *  we can work with the this.state.
 * we can connect the action and the state here and this is where the
 * redux secreat source comes in
 * so in the same way im mapping the dispatch to props for actions
 * i can also map portions of the state
 * the state param being passed is the globle state of the application
 */
export default connect((state) => {
    return {}
}, mapDispatchToProps)(AppContainer);