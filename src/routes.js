import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

const stack = createStackNavigator();

function Routes() {
  return (
    <stack.Navigator
      initialRouteName={Main}
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: '#7159c1' },
        headerTintColor: '#fff',
      }}
    >
      <stack.Screen
        name="Main"
        component={Main}
        options={{ title: 'Usuários' }}
      />
      <stack.Screen
        name="User"
        component={User}
        options={({ route }) => ({ title: route.params.user.name })}
      />
    </stack.Navigator>
  );
}

export default Routes;
