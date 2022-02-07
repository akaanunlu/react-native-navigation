import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './src/pages/Welcome';
import MemberSign from './src/pages/MemberSign';
import MemberResult from './src/pages/MemberResult';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
                <Stack.Screen name="MemberSign" component={MemberSign} options={{ headerShown: false }} />
                <Stack.Screen name="MemberResult" component={MemberResult} options={{ headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;