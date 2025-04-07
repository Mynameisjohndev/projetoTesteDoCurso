import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from '../screens/Welcome';
import Home from '../screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Routes = () => {

  const user = true;

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName={!user ? 'home' : 'welcome'}>
        <Drawer.Screen name="welcome" component={Welcome} />
        <Drawer.Screen name="home" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
