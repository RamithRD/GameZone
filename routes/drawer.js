import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import AbouStack from './aboutStack';
import HomeStack from './homeStack';


const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    About: {
        screen: AbouStack,
    }
})

export default createAppContainer(RootDrawerNavigator)