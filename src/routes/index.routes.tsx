/* eslint-disable @typescript-eslint/no-unused-vars */
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from '../screens/Welcome';
import Home from '../screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import IcHome from '../assets/svgs/home.svg';
import { AppRoutesTypes } from '../types/navigation';

// const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator<AppRoutesTypes>();
// const Drawer = createDrawerNavigator();

const Routes = () => {
  const user = true;

  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName={!user ? 'home' : 'welcome'}
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FFB701',
          tabBarInactiveTintColor: '#A9A9A9',
          tabBarStyle: {
            backgroundColor: '#e42e00',

          },
        }}>
        <Tabs.Screen
          name="welcome"
          component={Welcome}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <IcHome width={size} height={size} fill={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="home"
          component={Home}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <IcHome width={size} height={size} fill={color} />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
