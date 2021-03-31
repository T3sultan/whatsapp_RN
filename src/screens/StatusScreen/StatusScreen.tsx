import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { GREY_COLOR, LIGHT_COLOR, PRIMARY ,PRIMARY_DARK,SECONDARY_LIGHT} from '../../constants/colors';
import { Feather as Icon, Entypo } from '@expo/vector-icons'




const { width: wWidth, height: wHeight } = Dimensions.get('window')

interface StatusScreenProps {
}
interface profileCardProps {
    title: string;
    subtitle: string;
    create: boolean;
}


const ProfileCard = ({ title, subtitle, create }: profileCardProps) => {
    return (
        <View style={styles.profileCardContainer}>
            <View style={styles.avatar}>
                {create ?
                    <View style={styles.plusContainer}>
                        <Icon name="plus" size={20} color={LIGHT_COLOR} />
                    </View>

                    : null
                }



            </View>
            <View style={styles.textContainer}>
                <Text style={styles.label}>{title}</Text>
                <Text style={styles.silence}>{subtitle}</Text>
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
                subtitle="Tap to add status update"
            />
            <View style={styles.section}>
                <View style={{ marginHorizontal: 15 }}>

                    <Text>Recent updates</Text>
                </View>
            </View>
            <ProfileCard
                create={false}
                title="Tipu Sultan"
                subtitle="Today, 9:00"
            />
            <View style={styles.floatingActionContainer}>
                <View style={styles.edit}>
                    <Entypo name="edit" size={26} color={PRIMARY}/>

                </View>
                <View style={styles.camera}>
                    <Entypo name="camera" size={26} color={LIGHT_COLOR}/>

                </View>

            </View>



        </View>

    )

}
const styles = StyleSheet.create({
    rootStatus: {
        flex: 1,
        backgroundColor: LIGHT_COLOR
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 30,
        backgroundColor: 'grey'

    },
    profileCardContainer: {
        marginVertical: 10,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',


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
    },
    textContainer: {
        paddingHorizontal: 15

    },
    label: {
        fontSize: 18,


    },
    silence: {
        color: 'grey'

    },
    section: {
        backgroundColor: GREY_COLOR,
        height: 30,
        justifyContent: 'center'
    },
    floatingActionContainer:{
        position:'absolute',
        bottom:20,
        right:20,
        alignItems:'center',
        marginHorizontal:5,
        marginVertical:4
    },
    edit:{
        backgroundColor:GREY_COLOR,
        height:40,
        width:40,
        borderRadius:26,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:5


    },
    camera:{
        backgroundColor:SECONDARY_LIGHT,
        height:50,
        width:50,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
       

    }




})


export default StatusScreen;