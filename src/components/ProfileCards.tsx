import React from 'react';
import { View, Dimensions,StyleSheet,Text } from 'react-native';
import { userListProps } from '../services/interface';
const {width:wWidth} =Dimensions.get('window')
import {Feather as Icon} from '@expo/vector-icons';

interface ProfileCardProps{
    item: userListProps;

} 
const ProfileCards =({item}:ProfileCardProps) =>{
    <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: wWidth - 20,
        marginVertical: 5,
        marginHorizontal: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingBottom: 8
    }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: "grey"
            }}>

            </View>
            <View style={{ paddingHorizontal: 10 }}>

                <Text>{item.name}</Text>
                <Text style={{color:'grey'}}>{item.lastMessage}</Text>
            </View>

        </View>


        <View style={{ marginHorizontal: 6 }}>
            <Text style={{color:'grey'}}>{item.lastSeen}</Text>
        </View>
    </View>

}

export default ProfileCards;