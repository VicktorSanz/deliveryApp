import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { routes } from './Routes/routes';
import Tabs from './components/navigation/Tabs'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteNmae={'Home'}>
        {
          routes.map((view, i) => {
            if (view.name == 'Home') {
              return <Stack.Screen key={i} name={view.name} component={Tabs} />
            } else {
              return < Stack.Screen key={i} name={view.name} component={view.component} />
            }

          })
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
