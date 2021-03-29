import React from 'react';
import { View, Text, FlatList, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { userListProps } from '../../../services/interface';
import { userList } from './../../../services/data';
import { Feather as Icon } from '@expo/vector-icons';
import { SECONDARY_LIGHT, LIGHT_COLOR } from '../../constants/colors';

const { width: wWith, height: wHeight } = Dimensions.get('window');

interface ChatScreenProps { }

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: wWith - 20,
        marginHorizontal: 10,
        marginVertical: 5,
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingBottom: 10,

    },
    avatarBox: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "grey",

    }
})


const ChatScreen = ({ }: ChatScreenProps) => {
    const renderItem = ({ item }: { item: userListProps }) => {
        return (
            <View style={styles.cardContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={styles.avatarBox}>

                    </View>
                    <View style={{ paddingHorizontal: 9 }}>
                        <Text>{item.name}</Text>
                        <Text style={{ color: "grey" }}>{item.lastMessage}</Text>

                    </View>
                </View>

                <View>
                    <Text style={{ color: "grey" }}>{item.lastSeen}</Text>
                </View>
            </View>
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: LIGHT_COLOR }}>
            <FlatList
                data={userList}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            />
            <View>
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
                    <Icon name="message-square" size={30} color="#ffff" />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default ChatScreen;