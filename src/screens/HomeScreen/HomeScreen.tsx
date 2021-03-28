import React from 'react';
import  { View,Text,StyleSheet } from 'react-native';

interface HomeScreenProps{

}
const HomeScreen =({}:HomeScreenProps)=>{
    return (
        <View style={styles.HomeScreenRoot }>
           <Text>HomeScreen</Text>
        </View>
    )
}
const styles= StyleSheet.create({
    HomeScreenRoot:{
        flex:1,

    }


})


export default HomeScreen
