import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { GREY_COLOR, LIGHT_COLOR, PRIMARY, SECONDARY_LIGHT } from './../../constants/colors';
import { Entypo, Feather as Icon } from '@expo/vector-icons';
///import {Feather as Icon,Entypo} from '@expo/vector-icons';


const { width: wWidth, height: wHeight } = Dimensions.get('window');
interface StatusScreenProps { };
interface profileCardProps {
    title: string;
    subTitle: string;
    create: boolean
}

const ProfileCard = ({ title, subTitle, create }: profileCardProps) => {
    return (
        <View style={styles.profileCardContainer}>
            <View style={styles.avatar}>
                {
                    create ?
                        <View style={styles.plusContainer}>
                            <Icon name="plus" size={20} color={LIGHT_COLOR} />
                        </View>

                        : null
                }

            </View>
            <View style={styles.textContainer}>
                <Text style={{ fontSize: 17 }}>{title}</Text>
                <Text style={{ color: 'grey' }}>{subTitle}</Text>
            </View>
        </View>

    )
}

const StatusScreen = ({ }: StatusScreenProps) => {
    return (
        <View style={styles.rootStatus}>
            <ProfileCard
                create={true}
                title="My Status"
                subTitle="Tap to add status update"
            />
            <View style={{

                backgroundColor: GREY_COLOR,
                height: 30,
                justifyContent: 'center',


            }}>
                <View style={{ marginHorizontal: 15 }}>
                    <Text style={{ alignItems: 'center', justifyContent: "center" }}>Recent updates</Text>

                </View>
            </View>

            <ProfileCard
                create={false}
                title="Tipu Sultan"
                subTitle="Today, 10:20 AM"

            />

            <ProfileCard
                create={false}
                title="Joy Ahmed"
                subTitle="Today, 3:00 PM"
            />
            <View style={{
                position: 'absolute',
                bottom: 10,
                right: 16,
                alignItems:'center'
            }}>
                <View style={{
                    backgroundColor: GREY_COLOR,
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    elevation: 5



                }}>
                    <Entypo name="edit" size={20} color={PRIMARY} />

                </View >
                <View
                    style={{
                        backgroundColor: SECONDARY_LIGHT,
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginVertical: 10,
                        elevation: 5

                    }}

                >
                    <Entypo name="camera" size={26} color={LIGHT_COLOR} />

                </View>
            </View>

        </View>
    )

}
const styles = StyleSheet.create({
    textContainer: {
        marginHorizontal: 20,
        marginVertical: 4,
        paddingHorizontal: 5


    },
    rootStatus: {
        flex: 1,
        backgroundColor: LIGHT_COLOR

    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: 'grey',

    },
    profileCardContainer: {
        marginVertical: 10,
        marginHorizontal: 15,
        flexDirection: "row",
        alignItems: 'center'
    },
    plusContainer: {
        backgroundColor: SECONDARY_LIGHT,
        width: 20,
        height: 20,
        borderRadius: 10,
        position: 'absolute',
        bottom: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }


})
export default StatusScreen;