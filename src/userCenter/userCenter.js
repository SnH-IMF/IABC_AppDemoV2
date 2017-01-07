/**
 * @by:lani
 * @date()=>05-01-2017
 * @title: UserCenter
 */

import React, {Component} from 'react';
import {
    DrawerLayoutAndroid,
    Dimensions,
    Thumbnail,
    StyleSheet,
    Image,
    TextInput,
    ScrollView,
    View,
    Text,
    TouchableHighlight
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Container, Content, Tabs, Header, Title, Button, Icon } from 'native-base';
import FavouriteMovies  from './favouriteMovies';
import WatchedCompanies from './watchedCompanies';
import JoinedEvents     from './joinedEvents';
import SideBarMenu from '../containers/SideBarMenu';





class UserCenter extends Component {

    constructor() {
        super();
        this.openDrawer = this.openDrawer.bind(this);
    }

    openDrawer() {
        this.drawer.openDrawer();
    }

	render() {
      return (
          <DrawerLayoutAndroid
                drawerWidth={Dimensions.get('window').width*75/100}
                ref={(_drawer) => this.drawer = _drawer}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => <SideBarMenu/>}>
                <View style={{flex:1}}>
                    <Container>
                            <View style={styles.header}>
                                <TouchableHighlight onPress={this.openDrawer}>
                                    <Image source={require('./img/menugray.png')} style={styles.icon} />
                                </TouchableHighlight>
                                <Text style={styles.title}>User Center</Text>
                            </View>
                            <Content>
                                <Tabs>
                                    <FavouriteMovies  tabLabel='Movies' {...this.props}  />
                                    <WatchedCompanies tabLabel='Companies' {...this.props} />
                                    <JoinedEvents     tabLabel='Events'    {...this.props} />
                                </Tabs>
                            </Content>
                        </Container>
                </View>
         </DrawerLayoutAndroid>
      );
   }
}

const styles = StyleSheet.create({
	header:{
		backgroundColor:'#fff',
        flexDirection: 'row',
        paddingLeft:23
	},
	title:{
		fontFamily: 'Helvetica',
        fontWeight: 'bold',
        fontSize: 18,
        color:'#111',
        paddingLeft:80,
        paddingTop:10
        // paddingRight:13,
        // paddingTop:12
	},
    icon:{

        width: 45,
        height: 45

    },
});



//at bottom 
//to access reducers 
function mapStateToProps(state) {
    return {
        //listening for the serached recipies 
        searchedRecipes: state.searchedRecipes //coming from our reduer
    }
}

export default connect(mapStateToProps)(UserCenter);