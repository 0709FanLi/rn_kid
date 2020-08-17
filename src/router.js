import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { connect } from 'react-redux'

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tabs" component={Tabs} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}

enableScreens();
const Stack = createNativeStackNavigator();

function Home({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('MyTabs')}
      />
    </View>
  );
}
function Feed() {
  return (
    <Text>Feed</Text>
  );
}
function Article() {
  return (
    <Text>Article</Text>
  );
}
function Tabs() {
  return (
    <Text>Tabs</Text>
  );
}
function Settings() {
  return (
    <Text>Settings</Text>
  );
}


function Routerss() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ Home } />
        <Stack.Screen name="MyDrawer" component={ MyDrawer } />
        <Stack.Screen name="MyTabs" component={ MyTabs } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

class Router extends React.PureComponent{
    render(){
        return <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={ Home } />
                <Stack.Screen name="MyDrawer" component={ MyDrawer } />
                <Stack.Screen name="MyTabs" component={ MyTabs } />
            </Stack.Navigator>
        </NavigationContainer>
    }
}

export default Router;
