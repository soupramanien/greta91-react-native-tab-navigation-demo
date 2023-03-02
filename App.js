import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
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
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
