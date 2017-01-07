/**
 * @by:lani
 * @date()=>04-01-2017
 * @title: Login Page
 * @comment:built drawer manullay in code but should be altered to a central location 
 */
import React, {Component} from 'react';
import {
    DrawerLayoutAndroid,
    Alert,
    Button,
    Dimensions,
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
import SideBarMenu from '../containers/SideBarMenu';


const  onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

class ComponentName extends Component {

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

                    <View style={styles.scene}>
                        <Image source={require('./img/background.png')} style={styles.backgroundImage}>
                            <View style={styles.view2}>

                            <TouchableHighlight onPress={this.openDrawer}>
                                <Image source={require('./img/menuwhite.png')} style={styles.icons} />
                            </TouchableHighlight>
                                <Text style={styles.view2Text}>Login</Text>
                            </View>
                            <View style={styles.view3}>
                                <TextInput
                                    style={styles.textBox}
                                    placeholder="Email"
                                    keyboardType="email-address"
                                />
                                <TextInput
                                    style={styles.textBox}
                                    placeholder="Password"
                                />
                                <View style={styles.button}>
                                    <Button
                                        onPress={onButtonPress}
                                        title="Login"
                                        color="#841584"
                                        accessibilityLabel="Learn more about this purple button"
                                    />
                                </View>
                            </View>
                        </Image>
                    </View>
            </DrawerLayoutAndroid>
        );
    }
}

const styles = StyleSheet.create({
	scene:{
        flex:1,
		// backgroundColor:'rgb(250,60,76)'
	},
	backgroundImage:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height
	},
    view2:{
        flexDirection: 'row',
        paddingLeft:23,
        paddingTop:20
	},
    view2Text:{
    paddingLeft:100,
    paddingTop:11,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 18,
    color:'#fff'
        
    },
    view3:{
         paddingTop:138
		// backgroundColor:'rgb(250,60,76)'
	},
    icons:{
        width: 48,
        height: 48
    },
    textBox:{
        height: 40,
        borderColor: 'gray',
        fontSize: 20,
        marginBottom:18,
        marginTop:18,
        color:'#fff',
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        // textAlign:'center',

    },
    button:{
        padding:20
    },
});

function mapStateToProps(state) {
    return {
        //listening for the serached recipies
        searchedRecipes: state.searchedRecipes //coming from our reduer
    }
}

export default connect(mapStateToProps)(ComponentName);