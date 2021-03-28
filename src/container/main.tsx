import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View ,TouchableOpacity} from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';



interface MainProps {

}
const Stack = createStackNavigator();
const Main = ({ }: MainProps) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={({ navigation, route }) => ({
                    title: 'WhatsApp',
                    headerRight: () => {
                        return (
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <TouchableOpacity  onPress={()=>console.log('search')} style={{marginHorizontal:5}}>
                                    <Icon name="search" size={26} />

                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>console.log('menu clicked')} style={{marginHorizontal:5}}>
                                    <Icon name="more-vertical" size={26} />

                                </TouchableOpacity>

                            </View>
                        )
                    }

                })}
                    name="home"
                    component={HomeScreen} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}
export default Main;
