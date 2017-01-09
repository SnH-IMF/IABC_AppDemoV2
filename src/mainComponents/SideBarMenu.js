/**
 * @by:lani
 * @date()=>04-01-2017
 * @title: sidebar menu
 */

import React, {Component} from 'react';
import {
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
import { Container, Content,Thumbnail} from 'native-base';

///

class SideBarMenu extends Component {

    render() {
        return (
            <View
                style={{
                flex: 1,
                // backgroundColor: 'red'
            }}>
                <Container>
                <Content>
                    <View style={styles.scene}>
                       
                    	<View style={styles.view2}>
                            <Image source={require('./img/closegray.png')} style={styles.icons} />
                            <View style={styles.view5}>
                                <Text style={styles.view5Text}>Login</Text>
                                <Image source={require('./img/profile.png')} style={styles.icons} />
                            </View>
                            
                        </View>
                        <View style={styles.view3}>
                            <View style={styles.view4}>
                                <Image source={require('./img/homegray.png')} style={styles.icons} />
                                <Text style={[styles.view5Text,styles.view4Text]}>Home</Text>
                            </View>
                            <View style={styles.view4}>
                                <Image source={require('./img/marketgray.png')} style={styles.icons} />
                                <Text style={[styles.view5Text,styles.view4Text]}>Marketplace</Text>
                            </View>
                            <View style={styles.view4}>
                                <Image source={require('./img/companygray.png')} style={styles.icons} />
                                <Text style={[styles.view5Text,styles.view4Text]}>Companies</Text> 
                            </View>
                            <View style={styles.view4}>
                                <Image source={require('./img/eventgray.png')} style={styles.icons} />
                                <Text style={[styles.view5Text,styles.view4Text]}>Events</Text>
                            </View>
                            <View style={styles.view4}>
                                <Image source={require('./img/infogray.png')} style={styles.icons} />
                                <Text style={[styles.view5Text,styles.view4Text]}>About IABC</Text>
                            </View>
                            <View style={styles.view4}>
                                <Image source={require('./img/faqgray.png')} style={styles.icons} />
                                <Text style={[styles.view5Text,styles.view4Text]}>F.A.Q</Text>
                            </View>
                        </View>
                    </View>
                </Content>
            </Container>
            </View>
        );
    }
}


const styles = StyleSheet.create({
	scene:{
        flex: 1,
        paddingTop:20,
		// backgroundColor:'#0084ff'
	},
	view2:{

        flex:1,
		// backgroundColor:'#ffc300',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft:23,
        paddingRight:23,
        paddingBottom:43
	},
    view3:{
        
		// backgroundColor:'#fa3c4c',
        paddingLeft:23,
        
	},
    view4:{
        flexDirection: 'row',
		// backgroundColor:'#d696bb',
        paddingBottom:13
	},
    view4Text:{
        paddingLeft:18,
        // color:'red'
    },
    view5:{
        
        flexDirection: 'row'
	},
    view5Text:{
        // color:'#111111',
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        fontSize: 16,
        paddingRight:13,
        paddingTop:12
        


    },
    icons:{
        
		width: 45,
        height: 45
	},
    
});


//at bottom to access reducers
function mapStateToProps(state) {
    return {
        //listening for the serached recipies
        searchedRecipes: state.searchedRecipes //coming from our reduer
    }
}

export default connect(mapStateToProps)(SideBarMenu);