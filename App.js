import { Button, Text, View } from 'react-native';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Ionicons } from '@expo/vector-icons'


function HomeScreen1(props) {
  useFocusEffect(function () {
    //cette fonction est appelé lors que l'ecran se trouve au premier plan
    alert("home screen 1 affiché")

    return function () {
      //cette fonction est appelé lors que l'ecran perd le focus
      alert("home screen 1 caché")
    }
  })
  const callback = function () {
    props.navigation.navigate("Home2")
  }
  const callback2 = function () {
    props.navigation.navigate("Settings", { screen: "Settings2" })
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home 1!</Text>
      <Button title='Home 2' onPress={callback} />
      <Button title='Settings 2' onPress={callback2} />
    </View>
  );
}
function HomeScreen2(props) {
  const callback = function () {
    props.navigation.navigate("Home1")
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home 2!</Text>
      <Button title='Home 1' onPress={callback} />
    </View>
  );
}

function SettingsScreen1(props) {
  const callback = function () {
    props.navigation.navigate("Settings2")
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings1!</Text>
      <Button title='Settings 2' onPress={callback} />
    </View>
  );
}
function SettingsScreen2(props) {
  const callback = function () {
    props.navigation.navigate("Settings1")
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings2!</Text>
      <Button title='Settings 1' onPress={callback} />
    </View>
  );
}
const HomeStack = createNativeStackNavigator()
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home1" component={HomeScreen1} />
      <HomeStack.Screen name="Home2" component={HomeScreen2} />
    </HomeStack.Navigator>
  )
}
const SettingsStack = createNativeStackNavigator()
function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings1" component={SettingsScreen1} />
      <SettingsStack.Screen name="Settings2" component={SettingsScreen2} />
    </SettingsStack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={
        function (props) {
          return {
            tabBarIcon: function (tabBarProps) {
              let icon = '';
              if (props.route.name === 'Home') {
                icon = tabBarProps.focused ? 'home' : 'home-outline'
              }
              else if (props.route.name === 'Settings') {
                icon = tabBarProps.focused ? 'settings' : 'settings-outline'
              }
              return <Ionicons name={icon} size={tabBarProps.size} color={tabBarProps.color} />
            }
          }
        }
      }>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsStackScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
