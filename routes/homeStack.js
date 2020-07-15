import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';
import React from 'react';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return{
              headerTitle: () => <Header navigation={navigation} title='GameZone'/>
            }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details'
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        //default nav options unless its overridden individually like above
        headerTintColor: '#444',
        headerStyle: {
            backgroundColor: '#eee'
        }
    }
});

export default HomeStack;