import React from 'react';
import {View,Text, StyleSheet} from 'react-native';

interface HomeScreenProps{

}

const HomeScreen =({}:HomeScreenProps)=>{
    return(
        <View style={styles.HomeContainer}>
            <Text>HomeScreen</Text>

        </View>
    )

};
const styles = StyleSheet.create({
    HomeContainer:{

    }
})
export default HomeScreen;