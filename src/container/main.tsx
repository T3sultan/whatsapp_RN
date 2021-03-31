import { NavigationContainer, CompositeNavigationProp, } from '@react-navigation/native';
import React from 'react';
import { createStackNavigator, StackNavigationProp, } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import { View, TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { createMaterialTopTabNavigator, MaterialTopTabNavigationProp, } from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import StatusScreen from '../screens/StatusScreen';
import CallScreen from '../screens/callScreen';
import { PRIMARY, PRIMARY_DARK } from '../constants/colors';
import { SECONDARY_LIGHT, LIGHT_COLOR } from './../constants/colors';
import { StatusBar } from 'expo-status-bar';
import Camera from '../screens/CameraScreen/CameraScreen';
import CameraScreen from '../screens/CameraScreen/CameraScreen';


interface MainProps {

};
const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

export type MatrimonyTabParamList = {
    chats: undefined;
    status: undefined;
    calls: undefined;
    camera: undefined;
};

export type WhatsAppStackParamList = {
    home: undefined;
};

export type combineTabWithStackProps<
    T extends keyof MatrimonyTabParamList
    > = CompositeNavigationProp<
        MaterialTopTabNavigationProp<MatrimonyTabParamList, T>,
        StackNavigationProp<WhatsAppStackParamList>
    >;





const MaterialTopTab = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                indicatorStyle: {
                    backgroundColor: "#ffff"

                },
                activeTintColor: LIGHT_COLOR,
                labelStyle: { fontSize: 16, fontWeight: 'bold' },
                // tabStyle: { width: 100 },
                style: { backgroundColor: PRIMARY },
            }}

        >
            <Tab.Screen name="camera" options={{
                tabBarLabel: () => (
                    <View>
                        <Icon name="camera" size={26} color={LIGHT_COLOR} />

                    </View>
                )
            }} component={CameraScreen} />
            <Tab.Screen name="Chats" component={ChatScreen} />
            <Tab.Screen name="Status" component={StatusScreen} />
            <Tab.Screen name="Calls" component={CallScreen} />
        </Tab.Navigator>

    )
}


const Main = ({ }: MainProps) => {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar style="light" backgroundColor={PRIMARY_DARK}
            />


            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        options={({ navigation, route }) => ({
                            title: 'Whatsapp',
                            headerTintColor: '#fff',
                            headerStyle: {
                                elevation: 0,
                                backgroundColor: PRIMARY
                            },
                            headerRight: () => {
                                return (
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity onPress={() => console.log('Search')} style={{ marginHorizontal: 15 }}>

                                            <Icon name="search" size={26} color={LIGHT_COLOR} />

                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => console.log('menu clicked')} style={{ marginHorizontal: 5 }}>
                                            <Icon name="more-vertical" size={26} color={LIGHT_COLOR} />
                                        </TouchableOpacity>

                                    </View>
                                )

                            }
                        })}
                        name="home"
                        component={MaterialTopTab} />
                </Stack.Navigator>

            </NavigationContainer>
        </View>
    )

}

export default Main;
