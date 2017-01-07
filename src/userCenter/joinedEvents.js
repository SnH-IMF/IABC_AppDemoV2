/**
 * @by:lani
 * @date()=>05-01-2017
 * @title: joinedEvents in userCenter Tab 
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
import { Container, Content, Card, CardItem, Icon ,List} from 'native-base';

let events = [
    {
        eventName: 'China international',
        eventType:  'Category / Location',
        
    },
    {
        eventName: 'Another event',
        eventType:  'Category / Location',
    },
    {
        eventName: 'Third event',
        eventType:  'Category / Location',
    },
    
];

class JoinedEvents extends Component {

	render() {
      return (
         <View style={{flex:1}}>
            <Container>
                    <Content>
                        <List dataArray={events}
                        renderRow={(event) =>
                            <Card style={styles.card} >
                                <CardItem style={styles.cardItem} >              
                                    <Text style={styles.eventName}>{event.eventName}</Text>
                                    <Text style={styles.eventSubtext}>{event.eventType}</Text>
                                </CardItem>
                            </Card>
                        }>
                        </List>
                    </Content>
                </Container>
         </View>
      );
   }
}

const styles = StyleSheet.create({
	card:{
        margin:30
	},
	eventName:{
		fontFamily: 'Helvetica',
        // fontWeight: 'bold',
        fontSize: 16,
        color:'#111',
	},
    eventSubtext:{
		fontFamily: 'Helvetica',
	},
    bottomView:{
        backgroundColor:'red',
       
        
    },
    cardItem:{
        paddingBottom:20
    }

});



//at bottom 
//to access reducers 
function mapStateToProps(state) {
    return {
        //listening for the serached recipies 
        searchedRecipes: state.searchedRecipes //coming from our reduer
    }
}

export default connect(mapStateToProps)(JoinedEvents);