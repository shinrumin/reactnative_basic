import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import Font5 from 'react-native-vector-icons/FontAwesome5'

import HomeScreen from '../Home'
import Profile from '../Profile'
import Setting from '../Setting'


export default class MainScreen extends Component {
    render() {
        return (
            <AppMain />
        )
    }
}


const mainBottomNavigation = createBottomTabNavigator(
    {
        Home: HomeScreen,
        Profile: Profile,
        Setting: Setting
    },
    {
        tabBarOptions: {
            activeTintColor: '#34495e',
            inactiveTintColor: '#bdc3c7',
            style: {
                backgroundColor: '#ecf0f1'
            },
            showLabel:  true
        },
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Font5;
                let iconName;

                if(routeName === 'Home'){
                    iconName = 'home';
                }else if(routeName === 'Profile'){
                    iconName = 'user-alt';
                }else if(routeName === 'Setting'){
                    iconName = 'cog'
                }

                return <IconComponent name={iconName} size={24} color={tintColor} />
            }
        })
    }
)

const AppMain = createAppContainer(mainBottomNavigation);

