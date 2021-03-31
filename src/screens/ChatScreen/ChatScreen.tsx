import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { userList } from '../../services/data';
import { userListProps } from '../../services/interface';
import { Dimensions } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { PRIMARY, SECONDARY_LIGHT, LIGHT_COLOR } from './../../constants/colors';



const { width: wWidth,height:wHeight } = Dimensions.get('window')



interface ChatScreenProps { };



const ChatScreen = ({}: ChatScreenProps) => {
    const renderItem = ({ item }: { item: userListProps }) => {
        return(
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
        )
    
        
    };
    return (
        <View style={{flex:1,backgroundColor:LIGHT_COLOR}}>
            <FlatList
                data={userList}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            />
            <TouchableOpacity
                style={{
                    borderWidth: 1,
                    borderColor: 'rgba(0,0,0,0.2)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 70,
                    position: 'absolute',
                    bottom: 10,
                    right: 10,
                    height: 70,
                    backgroundColor: SECONDARY_LIGHT,
                    borderRadius: 100,
                }}
            >
                <Icon name="message-square" size={30} color={LIGHT_COLOR} />
            </TouchableOpacity>
        </View>
    )

}
const styles = StyleSheet.create({

})


export default ChatScreen;