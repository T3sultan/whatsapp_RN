import { Feather as Icon, Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import ProfileCard from '../../components';
import { LIGHT_COLOR, SECONDARY_LIGHT } from '../../constants/colors';
import { userListProps } from '../../services/interface';

interface CallScreenProps {
    item: userListProps,
    call?: boolean

}
const CallScreen = ({ item, call }: CallScreenProps) => {
    return (
        <View style={styles.rootCalls}>
            <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: StyleSheet.hairlineWidth, }}>
                <ProfileCard
                    create={false}
                    title="Tipu Sultan"
                    subtitle="Yesterday, 10:00 PM"

                />

                <TouchableOpacity style={{ marginLeft: 110 }}>
                    <Ionicons name="call" size={26} color={SECONDARY_LIGHT} />

                </TouchableOpacity>

            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: StyleSheet.hairlineWidth, }}>
                <ProfileCard
                    create={false}
                    title="Asik Ahmed"
                    subtitle="Yesterday, 11:00 PM"

                />
                <TouchableOpacity style={{ marginLeft: 110 }}>
                    <Ionicons name="call" size={26} color={SECONDARY_LIGHT} />

                </TouchableOpacity>

            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: StyleSheet.hairlineWidth, }}>
                <ProfileCard
                    create={false}
                    title="Monir Ahmed"
                    subtitle="Yesterday, 09:00 PM"

                />
                <TouchableOpacity style={{ marginLeft: 110 }}>
                    <Ionicons name="call" size={26} color={SECONDARY_LIGHT} />

                </TouchableOpacity>

            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: StyleSheet.hairlineWidth, }}>
                <ProfileCard
                    create={false}
                    title="Rofiqul Islam"
                    subtitle="Yesterday, 1:00 AM"

                />
                <TouchableOpacity style={{ marginLeft: 110 }}>
                    <Ionicons name="call" size={26} color={SECONDARY_LIGHT} />

                </TouchableOpacity>

            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: StyleSheet.hairlineWidth, }}>
                <ProfileCard
                    create={false}
                    title="Mizun Farqu"
                    subtitle="Yesterday, 10:00 PM"

                />
                <TouchableOpacity style={{ marginLeft: 110 }}>
                    <Ionicons name="call" size={26} color={SECONDARY_LIGHT} />

                </TouchableOpacity>

            </View>


            
                <View style={{
                    position: 'absolute',
                    bottom: 20,
                    right: 20,
                    alignItems: 'center',
                    marginHorizontal: 5,
                    marginVertical: 4,
                    marginBottom:-34
                }}>

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
                            marginBottom: -300
                        }}
                    >
                        <MaterialIcons name="add-call" size={30} color={LIGHT_COLOR} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    bottom: 20,
                    right: 20,
                    alignItems: 'center',
                    marginHorizontal: 19,
                    marginVertical: 4,
                    marginBottom:40,
                
                }}>
                    <TouchableOpacity
                        style={{
                            borderWidth: 1,
                            borderColor: 'rgba(0,0,0,0.2)',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 50,
                            position: 'absolute',
                            bottom: 10,
                            right: 10,
                            height: 50,
                            backgroundColor: LIGHT_COLOR,
                            borderRadius: 100,
                            marginBottom: -300,
                            
                        }}
                    >
                        <MaterialIcons name="video-library" size={30} color="#000000" />
                    </TouchableOpacity>

                

            </View>

        </View>
    )

}
const styles = StyleSheet.create({
    rootCalls: {


    }

})


export default CallScreen;