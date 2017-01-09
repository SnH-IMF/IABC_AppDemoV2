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


export default connect((state) => {
    return {}
}, mapDispatchToProps)(AppContainer);
