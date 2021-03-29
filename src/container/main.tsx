import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import StatusScreen from './../screens/StatusScreen/StatusScreen';
import CallScreen from './../screens/callScreen/CallScreen';
import { PRIMARY, PRIMARY_DARK } from '../constants/colors';
import { LIGHT_COLOR } from './../constants/colors';
import { StatusBar } from 'expo-status-bar';



interface MainProps {

}
const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const MaterialTopTab = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                indicatorStyle: {
                    backgroundColor: LIGHT_COLOR

                },
                activeTintColor: LIGHT_COLOR,
                labelStyle: { fontSize: 16, fontWeight: 'bold' },
                // tabStyle: { width: 100 },
                style: { backgroundColor: PRIMARY },
            }}
        >
            <Tab.Screen name="chats" component={ChatScreen} />
            <Tab.Screen name="status" component={StatusScreen} />
            <Tab.Screen name="calls" component={CallScreen} />
        </Tab.Navigator>
    )

}





const Main = ({ }: MainProps) => {
    return (
        <View style={{flex:1}}>
            <StatusBar style="light" backgroundColor={PRIMARY_DARK}/>


            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen options={({ navigation, route }) => ({
                        title: 'WhatsApp',
                        headerTintColor: LIGHT_COLOR,
                        headerStyle: {
                            elevation: 0,
                            backgroundColor: PRIMARY,

                        },
                        headerRight: () => {
                            return (
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <TouchableOpacity onPress={() => console.log('search')} style={{ marginHorizontal: 15 }}>
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
