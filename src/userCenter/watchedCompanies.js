/**
 * @by:lani
 * @date()=>05-01-2017
 * @title: Watched Companies in userCenter Tab 
 */

import React, {Component} from 'react';
import {
    Alert,
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
import { Container, Content, Card, CardItem, Thumbnail } from 'native-base';

let themes = [
    {
        name: 'Disney',
        image: require('./img/disney.png')
    },
    {
        name: 'DC Comics',
        image: require('./img/DC.png')
    },
    
];

const  onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};


class WatchedCompanies extends Component {


	render() {
      return (
         <View style={{flex:1}}>
            <Container>
                    <Content>
                        <Card dataArray={themes}
                            renderRow={(theme) =>
                                <CardItem button onPress={onButtonPress}>
                                    <Thumbnail  style={styles.icons}source={theme.image} />
                                    <Text style={styles.companyName}>{theme.name}</Text>
                                </CardItem>
                            }>
                        </Card>
                    </Content>
                </Container>
         </View>
      );
   }
}

const styles = StyleSheet.create({
	icons:{
        height: 45,
        width: 45,
        borderRadius: 45
	},
	companyName:{
        padding:18,
        fontFamily: 'Helvetica',
        fontSize: 18,
        color:'#111',
        // fontWeight: 'bold',
		// paddingLeft:60,
        // paddingTop:20
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

export default connect(mapStateToProps)(WatchedCompanies);