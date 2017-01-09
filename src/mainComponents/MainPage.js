/**
 * @by:lani
 * @date()=>04-01-2017
 * @title: MainPage/HomePage/DrawerParent
 */

import React, {Component} from 'react';
import {
    Dimensions,
    DrawerLayoutAndroid,
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
import SideBarMenu from './SideBarMenu';

class MainPage extends Component {
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
                <View
                    style={{
                    flex: 1,
                    alignItems: 'center'
                }}>
                    <TouchableHighlight onPress={this.openDrawer}>
                        <Text>{'Open Drawer'}</Text>
                    </TouchableHighlight>
                </View>
            </DrawerLayoutAndroid>
        );
    }
}

const styles = StyleSheet.create({
    styleObjectName: {
        //
    }, styleObjectName2: {
        //
    }});

function mapStateToProps(state) {
    return {
        //listening for the serached recipies
        searchedRecipes: state.searchedRecipes //coming from our reduer
    }
}

export default connect(mapStateToProps)(MainPage);