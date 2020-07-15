import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import Header from '../shared/header';
import React from 'react';

const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return{
              headerTitle: () => <Header navigation={navigation} title='About GameZone'/>
            }
        }
    }
}

const AbouStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        //default nac options unless its overridden individually like above
        headerTintColor: '#444',
        headerStyle: {
            backgroundColor: '#eee'
        }
    }
});

export default AbouStack;