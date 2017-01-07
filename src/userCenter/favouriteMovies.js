/**
 * @by:lani
 * @date()=>05-01-2017
 * @title: Favourite Movies in userCenter Tab 
 */

import React, {Component} from 'react';
import {
    ListView,
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
import { Container, Content, Card, CardItem,List, Thumbnail, Button, Icon } from 'native-base';
import {Column as Col ,Row} from 'react-native-flexbox-grid';


 let movies = [
    {
        title: 'Lion King',
        catg:  'Sci-fi,drama',
        poster:require('./img/lionking.png')
    },
    {
        title: 'Cars 3',
        catg:  'Animation',
        poster:require('./img/cars.png')
    },
    {
        title: 'Toy story 2',
        catg:  'Animation',
        poster:require('./img/toystory.png')
    },
    
];

class FavouriteMovies extends Component {

    constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    // var data = Array.apply(null, {length: 21}).map(Number.call, Number);
    this.state = {
      dataSource: ds.cloneWithRows(movies),
    };
  }

	render() {
      return (
         <View style={{flex:1}}>
            <ListView 
                contentContainerStyle={styles.listView}
                dataSource={this.state.dataSource}
                renderRow={(rowData) => 
                
                <View style={styles.posterContainer}>
                    <Image source={rowData.poster} style={styles.posterImage} />
                    <Text style={styles.posterCatgrText}>{rowData.catg}</Text>
                    <Text style={styles.movieName}>{rowData.title}</Text>
                </View>
                }
            />
         </View>
      );
   }
}

const styles = StyleSheet.create({
	listView:{
		paddingTop:20,
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems:'flex-start'
	},
    posterContainer:{
        marginRight:17
    },
	posterImage:{
		width:110,
        height:150
	},
    posterCatgrText:{
        fontFamily: 'Helvetica',
        fontSize: 12,
        paddingTop:10
    },
    movieName:{
        fontFamily: 'Helvetica',
        fontSize: 15,
        color:'#111'
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

export default connect(mapStateToProps)(FavouriteMovies);